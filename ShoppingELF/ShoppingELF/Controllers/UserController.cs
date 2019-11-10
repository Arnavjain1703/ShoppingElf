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
        public IHttpActionResult AddToCart(int uid, int pid, string Username, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.email == Username);
                bool y = TokenManager.ValidateToken(token, Username);
                if (y && user.Role == "User")
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
                else
                    return Unauthorized();
            }
        }

        [HttpPut]
        [Route("api/User/UpdateCart/{cid}")]
        public IHttpActionResult UpdateCart(int cid, CartModel model, string Username, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.email == Username);
                bool y = TokenManager.ValidateToken(token, Username);
                if (y && user.Role == "User")
                {
                    bool x = new UserRepository().UpdateCartModel(cid, model);
                    if (x)
                    {
                        return Ok("updated cart");
                    }
                    else
                        return Ok("Something went wrong , please try again later");
                }
                else
                    return Unauthorized();
            }
        }

        //[Authorize]
        [HttpGet]
        [Route("api/User/GetCart/{uid}")]
        public IHttpActionResult GetCart(int uid, string Username, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.email == Username);
                bool y = TokenManager.ValidateToken(token, Username);
                if (y && user.Role == "User")
                {
                    var x = new UserRepository().GetCart(uid);
                    return Ok(x);
                }
                else
                    return Unauthorized();
            }
        }

        //[Authorize]
        [Route("api/User/Cart/{cid}")]
        public IHttpActionResult DeleteFromCart(int cid, string Username, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.email == Username);
                bool y = TokenManager.ValidateToken(token, Username);
                if (y && user.Role == "User")
                {
                    int x = new UserRepository().RemoveFromCart(cid);
                    if (x == 1)
                        return Ok("Item removed from cart successfully");
                    else
                        return BadRequest("Cart is already empty");
                }
                else
                    return Unauthorized();
            }
        }

        //[Authorize]
        [Route("api/User/ClearCart/{uid}")]
        public IHttpActionResult ClearCart(int uid, string Username, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.email == Username);
                bool y = TokenManager.ValidateToken(token, Username);
                if (y && user.Role == "User")
                {
                    new UserRepository().ClearCart(uid);
                    return Ok("All items removed from cart");
                }
                else
                    return Unauthorized();
            }
        }

        //[Authorize]
        [HttpGet]
        [Route("api/User/OrderList/{uid}")]
        public IHttpActionResult ShowOrderedItems(int uid, string Username, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.email == Username);
                bool y = TokenManager.ValidateToken(token, Username);
                if (y && user.Role == "User")
                {
                    var x = new UserRepository().ShowOrderedItem(uid);
                    return Ok(x);
                }
                else
                    return Unauthorized();
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/User/OrderFromCart/{uid}")]
        public IHttpActionResult OrderFromCart(int uid, string Username, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.email == Username);
                bool y = TokenManager.ValidateToken(token, Username);
                if (y && user.Role == "User")
                {
                    int x = new UserRepository().AddFromCartToOrder(uid);

                    if (x == 3)
                    {
                        new UserRepository().ClearCart(uid);
                        return Ok("Order Placed Successfully");
                    }
                    else if (x == 2 || x == 3)
                        return Ok("Item you are looking for seems to be out of stock");
                    else
                        return BadRequest("cart is empty");
                }
                else
                    return Unauthorized();
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/User/OrderNow/{uid}/{pid}")]
        public IHttpActionResult OrderNow(int uid, int pid, OrderModel model, string Username, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.email == Username);
                bool y = TokenManager.ValidateToken(token, Username);
                if (y && user.Role == "User")
                {
                    int x = new UserRepository().OrderNow(uid, pid, model);
                    if (x == 1)
                    {
                        new UserRepository().ClearCart(uid);
                        return Ok("Order Placed Successfully");
                    }
                    else
                        return Ok("The item you are looking for seems to be out of stock");
                }
                else
                    return Unauthorized(); 
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/User/Address/{uid}")]
        public IHttpActionResult AddAddress(int uid, AddressModel model, string Username, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.email == Username);
                bool y = TokenManager.ValidateToken(token, Username);
                if (y && user.Role == "User")
                {
                    new UserModel().AddAddress(uid, model);
                    return Ok("Address added successfully");
                }
                else
                    return Unauthorized();
            }
        }

        //[Authorize]
        [HttpPut]
        [Route("api/User/EditAddress/{uid}")]
        public IHttpActionResult EditAddress(int uid, AddressModel model, string Username, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.email == Username);
                bool y = TokenManager.ValidateToken(token, Username);
                if (y && user.Role == "User")
                {
                    bool x = new UserModel().EditAddress(uid, model);
                    if (x)
                        return Ok("Address updated successfully");
                    else
                        return Ok("Something went Wrong , unable to update Address");
                }
                else
                    return Unauthorized();
            }
        }
        
        //[Authorize]
        [HttpGet]
        [Route("api/User/GetAddress/{uid}")]
        public IHttpActionResult GetAddress(int uid, string Username, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.email == Username);
                bool y = TokenManager.ValidateToken(token, Username);
                if (y && user.Role == "User")
                {
                    var x = new UserModel().GetAddress(uid);
                    return Ok(x);
                }
                else
                    return Unauthorized();
            }
        }

        //[Authorize]
        [HttpPut]
        [Route("api/User/EditAccount/{uid}")]
        public IHttpActionResult EditAccount(int uid, UserModel model, string Username, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.email == Username);
                bool y = TokenManager.ValidateToken(token, Username);
                if (y && user.Role == "User")
                {
                    bool x = new UserModel().EditAccount(uid, model);
                    if (x)
                        return Ok("Account details has been updated");
                    else
                        return Ok("unable to update account");
                }
                else
                    return Unauthorized();
            }
        }

        //[Authorize]
        [HttpPut]
        [Route("api/User/ChangePassword/{uid}")]
        public IHttpActionResult ChangePassword(int uid, ChangePasswordModel model, string Username, string token)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.email == Username);
                bool y = TokenManager.ValidateToken(token, Username);
                if (y && user.Role == "User")
                {
                    int x = new UserModel().ChangePassword(uid, model);
                    if (x == 1)
                        return Ok("Please enter correct old password");
                    else if (x == 4)
                        return Ok("new password cannot be equal to old password");
                    else if (x == 2)
                        return Ok("Password Updated successfully");
                    else
                        return BadRequest("Something went wrong");
                }
                else
                    return Unauthorized();
            }
        }
    }
}
