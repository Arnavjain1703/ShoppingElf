using ShoppingELF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Security.Claims;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Security;

namespace ShoppingELF.Controllers
{
    public class AccountController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage PostSignup([FromBody]UserTable user)
        {
            try
            {
                UserTable us = new UserTable();
                using (ShoppingELFEntities db = new ShoppingELFEntities())
                {
                    us.ActivationCode = Guid.NewGuid();
                    user.ActivationCode = us.ActivationCode;
                    user.Role = "User";
                    user.password = Crypto.Hash(user.password);
                    db.UserTable.Add(user);
                    db.SaveChanges();
                    EmailVerification(user.UserID, user.email, us.ActivationCode.ToString());
                    var message = Request.CreateResponse(HttpStatusCode.Created, "Account Created");
                    message.Headers.Location = new Uri(Request.RequestUri + user.UserID.ToString());
                    
                    return message;
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpPost]
        [Route("api/Account/UserLogin")]
        public HttpResponseMessage Login([FromBody]UserTable user)
        {
            var y = new UserModel().verification(user.email);
            var password = new UserModel().Password(user.email);
            UserTable u = new UserRepository().GetUser(user.email);
            
            if (u == null)
                return Request.CreateResponse(HttpStatusCode.NotFound,
                     "The Account was not found.");
            string pass = Crypto.Hash(user.password);
            bool credentials = pass.Equals(password);
            if (credentials && y)
                return Request.CreateResponse(HttpStatusCode.OK, TokenManager.GenerateToken(user.email));
            else
                return Request.CreateResponse(HttpStatusCode.Forbidden, "The email/password combination was wrong.");
        }

        [HttpGet]
        public HttpResponseMessage Validate(string token, string username)
        {
            bool exists = new UserRepository().GetUser(username) != null;
            if (!exists) return Request.CreateResponse(HttpStatusCode.NotFound,
                 "The Account was not found.");
            string tokenUsername = TokenManager.ValidateToken(token);
            if (username.Equals(tokenUsername))
                return Request.CreateResponse(HttpStatusCode.OK);
            return Request.CreateResponse(HttpStatusCode.BadRequest);
        }

        [Route("api/Account/{id}")]
        [HttpGet]
        public HttpResponseMessage VerifyAccount([FromUri]string id, [FromBody]UserModel model)
        {
            //bool status = false;
            using (ShoppingELFEntities context = new ShoppingELFEntities())
            {
             
                UserTable us = new UserTable();
                var v = context.UserTable.Where(a => a.ActivationCode == new Guid(id)).FirstOrDefault();
                if(v != null)
                {
                    us.IsEmailVerified = true;
                    v.IsEmailVerified = Convert.ToBoolean(us.IsEmailVerified);
                    context.SaveChanges();
                    //status = true;
                    return Request.CreateResponse(HttpStatusCode.OK, "Account successfully verified");
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, "Unable to activate account") ;
                }
                
            }
        }

        [NonAction]
        public void EmailVerification(int FacultyID, string FacultyEmail, string ActivationCode, string EmailFor = "Account")
        {
            var verifyUrl = "/api/" + EmailFor + "/" + ActivationCode;
            var link = Request.RequestUri.AbsoluteUri.Replace(Request.RequestUri.PathAndQuery, verifyUrl);
            var FromEmail = new MailAddress("4as1827000224@gmail.com", "ShoppingELF");
            var ToEmail = new MailAddress(FacultyEmail);
            var FromEmailPassword = "Rishabh@2306";
            string Subject = "";
            string Body = "";
            if (EmailFor == "Account")
            {
                Subject = "Email Verification for ShoppingELF Account";
                Body = "<br/>Please click on the link below to verify your account" +
                    "<br/><br/><a href = '" + link + "'>" + link + "<a/>";
            }
            else if (EmailFor == "ResetPassword")
            {
                Subject = "Reset Password";
                Body = "Hi,<br/><br/>Forgot your password , Don't worry click on the link below to reset your password<br/><br/><a href= '" + link + "'>" + link + "<a/>";
            }

            SmtpClient smtp = new SmtpClient()
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(FromEmail.Address, FromEmailPassword)
            };

            using (var message = new MailMessage(FromEmail, ToEmail)
            {
                Subject = Subject,
                Body = Body,
                IsBodyHtml = true
            })

                smtp.Send(message);
        }
    }
}
