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
    public class SellerController : ApiController
    {
        [HttpPost]
        [Route("api/Seller/Signup")]
        public HttpResponseMessage PostSignup([FromBody]SellerTable seller)
        {
            try
            {
                var x = new SellerAccountModel().IsSellerExist(seller.email);
                if (x)
                {
                    return Request.CreateResponse(HttpStatusCode.Forbidden, "Account already exist");
                }
                else
                {
                    new SellerAccountModel().AddSeller(seller);
                    EmailVerification(seller.SellerID, seller.email, seller.OTP);
                    return Request.CreateResponse(HttpStatusCode.Created, "An OTP has been sent to your email , Please Verify it to continue access");
                }


            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpPost]
        [Route("api/Seller/EnterOTP/{sid}")]
        public IHttpActionResult EnterOTP(int sid, SellerModel model)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                SellerTable seller = new SellerTable();
                seller = context.SellerTable.FirstOrDefault(m => m.SellerID == sid);
                if (seller.OTP == model.OTP)
                {
                    seller.IsAccountVerified = true;
                    return Ok("Your Account has been verified Successfully");
                }
                else
                    return Ok("Please enter a valid OTP");
            }
        }

        [NonAction]
        public void EmailVerification(int UserID, string Email, string OTP, string EmailFor = "Account")
        {
            //var verifyUrl = "/api/" + EmailFor + "/" + ActivationCode;
            //var link = Request.RequestUri.AbsoluteUri.Replace(Request.RequestUri.PathAndQuery, verifyUrl);
            //var link = "http://localhost:54039/api/" + EmailFor + "/" + ActivationCode;
            var FromEmail = new MailAddress("4as1827000224@gmail.com", "ShoppingELF");
            var ToEmail = new MailAddress(Email);
            var FromEmailPassword = "Rishabh@2306";
            string Subject = "";
            string Body = "";
            if (EmailFor == "Account")
            {
                Subject = "Verification for ShoppingELF Account";
                Body = "<br/>Never Share your OTP with others <br/>Enter this OTP " + OTP + " to verify your account if it was not you then ignore this message <br/>Team ShoppingELF <br/> Thank you!";
                    
            }
            //else if (EmailFor == "ResetPassword")
            //{
            //    Subject = "Reset Password";
            //    Body = "Hi,<br/><br/>Forgot your password , Don't worry click on the link below to reset your password<br/><br/><a href= '" + link + "'>" + link + "<a/>";
            //}

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
