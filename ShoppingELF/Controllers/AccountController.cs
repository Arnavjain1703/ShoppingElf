using ShoppingELF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;

namespace ShoppingELF.Controllers
{
    public class AccountController : ApiController
    {
        public HttpResponseMessage PostSignup([FromBody]UserTable user)
        {
            try
            {
                UserTable us = new UserTable();
                using (ShoppingELFEntities db = new ShoppingELFEntities())
                {
                    db.UserTable.Add(user);
                    db.SaveChanges();
                    var message = Request.CreateResponse(HttpStatusCode.Created, user);
                    message.Headers.Location = new Uri(Request.RequestUri + user.UserID.ToString());
                    EmailVerification(user.UserID, user.email, us.ActivationCode.ToString());
                    return message;
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        public HttpResponseMessage PostVerifyAccount(string id, UserModel model)
        {
            bool status = false;
            using (var context = new ShoppingELFEntities())
            {
                UserTable us = new UserTable();
                var v = context.UserTable.Where(a => a.ActivationCode == new Guid(id)).FirstOrDefault();
                if(v != null)
                {
                    us.IsEmailVerified = true;
                    v.IsEmailVerified = Convert.ToBoolean(us.IsEmailVerified);
                    context.SaveChanges();
                    status = true;
                }
                
                var message = Request.CreateResponse(HttpStatusCode.Created, model);
                message.Headers.Location = new Uri(Request.RequestUri + model.UserID.ToString());
                return message;
            }
        }

        public void EmailVerification(int FacultyID, string FacultyEmail, string ActivationCode, string EmailFor = "VerifyAccount")
        {
            var verifyUrl = "/Account/" + EmailFor + "/" + ActivationCode;
            var link = Request.RequestUri.AbsoluteUri.Replace(Request.RequestUri.PathAndQuery, verifyUrl);
            var FromEmail = new MailAddress("4as1827000224@gmail.com", "ShoppingELF");
            var ToEmail = new MailAddress(FacultyEmail);
            var FromEmailPassword = "Rishabh@2306";
            string Subject = "";
            string Body = "";
            if (EmailFor == "VerifyAccount")
            {
                Subject = "Email Verification for Mail Pro Account";
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
