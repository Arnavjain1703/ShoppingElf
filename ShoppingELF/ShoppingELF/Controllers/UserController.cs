using ShoppingELF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ShoppingELF.Models;

namespace ShoppingELF.Controllers
{
    public class UserController : ApiController
    {
        //[Authorize]
        [HttpPost]
        [Route("api/User/Addtocart/{uid}/{pid}")]
        public IHttpActionResult AddToCart(int uid, int pid)
        {
            using (ShoppingELFEntities context = new ShoppingELFEntities())
            {
                var v = context.CartTable.Where(a => a.PID == pid).FirstOrDefault();

                if (v != null)
                {
                    return BadRequest("Product already added in the cart");
                }
                else
                {
                    var x = new UserRepository().AddToCart(uid, pid);
                    return Ok("Product has been added to cart Successfully");
                }
            }
        }

        //[Authorize]
        [HttpGet]
        [Route("api/User/GetCart/{uid}")]
        public IHttpActionResult GetCart(int uid)
        {
            var x = new UserRepository().GetCart(uid);
            return Ok(x);
        }
    }
}
