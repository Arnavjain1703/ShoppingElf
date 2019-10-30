using ShoppingELF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

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

        //[Authorize]
        [Route("api/User/Cart/{cid}")]
        public IHttpActionResult DeleteFromCart(int cid)
        {
            int x = new UserRepository().RemoveFromCart(cid);
            if (x == 1)
                return Ok("Item removed from cart successfully");
            else
                return BadRequest("Cart is already empty");
        }

        //[Authorize]
        [HttpGet]
        [Route("api/User/OrderList/{uid}")]
        public IHttpActionResult ShowOrderedItems(int uid)
        {
            var x = new UserRepository().ShowOrderedItem(uid);
            return Ok(x);
        }

        //[Authorize]
        [HttpPost]
        [Route("api/User/OrderFromCart/{uid}")]
        public IHttpActionResult OrderFromCart(int uid)
        {
            int x = new UserRepository().AddFromCartToOrder(uid);
            new UserRepository().ClearCart();
            if (x == 1)
                return Ok("Order Placed Successfully");
            else
                return BadRequest("cart is empty");

        }
    }
}
