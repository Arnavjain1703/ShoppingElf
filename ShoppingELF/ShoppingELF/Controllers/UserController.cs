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
        [JwtAuthentication]
        [HttpPost]
        [Route("api/User/Addtocart/{uid}/{pid}")]
        public IHttpActionResult AddToCart(int uid, int pid)
        {
            var x = new UserRepository().AddToCart(uid, pid);
            return Ok("Product has been added to cart Successfully");
        }
    }
}
