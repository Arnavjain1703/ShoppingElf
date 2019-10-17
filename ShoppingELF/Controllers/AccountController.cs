using ShoppingELF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ShoppingELF.Controllers
{
    public class AccountController : ApiController
    {
        public HttpResponseMessage PostSignup([FromBody]User user)
        {
            try
            {
                using(DataContext db = new DataContext())
                {
                    db.users.Add(user);
                    db.SaveChanges();
                    var message = Request.CreateResponse(HttpStatusCode.Created, user);
                    message.Headers.Location = new Uri(Request.RequestUri + user.UserID.ToString());
                    return message;
                }
            }
            catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        public HttpResponseMessage GetVerifyAccount(string id, User model)
        {
            bool status = false;
            using (var context = new DataContext())
            {
                User us = new User();
                var v = context.users.Where(a => a.ActivationCode == new Guid(id)).FirstOrDefault();
                if(v != null)
                {
                    us.IsEmailVerified = true;
                    v.IsEmailVerified = Convert.ToBoolean(us.IsEmailVerified);
                    context.SaveChanges();
                    status = true;
                }
                //Session["IsEmailVerified"] = model.IsEmailVerified;

            }
            return status;

        }
    }
}
