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
        [Route("api/User/Addtocart/{pid}")]
        public IHttpActionResult AddToCart(int pid, string token)
        {
            try
            {
                using (ShoppingELFEntities context = new ShoppingELFEntities())
                {
                    UserTable user = new UserTable();
                    string username = TokenManager.ValidateToken(token);
                    user = context.UserTable.FirstOrDefault(m => m.email == username);

                    if (user != null && user.Role == "User")
                    {
                        var v = context.CartTable.Where(a => a.PID == pid).FirstOrDefault();

                        if (v != null)
                        {
                            return BadRequest("Product already added in the cart");
                        }
                        else
                        {
                            var x = new UserRepository().AddToCart(user.UserID, pid);
                            return Ok("Product has been added to cart Successfully");
                        }
                    }
                    else
                        return Unauthorized();
                }
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("api/User/UpdateCart/{cid}")]
        public IHttpActionResult UpdateCart(int cid, CartModel model, string token)
        {
            try
            {
                using (ShoppingELFEntities context = new ShoppingELFEntities())
                {
                    UserTable user = new UserTable();
                    string username = TokenManager.ValidateToken(token);
                    user = context.UserTable.FirstOrDefault(m => m.email == username);

                    if (user != null && user.Role == "User")
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
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        //[Authorize]
        [HttpGet]
        [Route("api/User/GetCart")]
        public IHttpActionResult GetCart(string token)
        {
            try
            {
                using (ShoppingELFEntities context = new ShoppingELFEntities())
                {
                    UserTable user = new UserTable();
                    string username = TokenManager.ValidateToken(token);
                    user = context.UserTable.FirstOrDefault(m => m.email == username);

                    if (user != null && user.Role == "User")
                    {
                        var x = new UserRepository().GetCart(user.UserID);
                        return Ok(x);
                    }
                    else
                        return Unauthorized();
                }
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/User/Cart/{cid}")]
        public IHttpActionResult DeleteFromCart(int cid, string token)
        {
            try
            {
                using (ShoppingELFEntities context = new ShoppingELFEntities())
                {
                    UserTable user = new UserTable();
                    string username = TokenManager.ValidateToken(token);
                    user = context.UserTable.FirstOrDefault(m => m.email == username);

                    if (user != null && user.Role == "User")
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
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/User/ClearCart")]
        public IHttpActionResult ClearCart(string token)
        {
            try
            {
                using (ShoppingELFEntities context = new ShoppingELFEntities())
                {
                    UserTable user = new UserTable();
                    string username = TokenManager.ValidateToken(token);
                    user = context.UserTable.FirstOrDefault(m => m.email == username);

                    if (user != null && user.Role == "User")
                    {
                        new UserRepository().ClearCart(user.UserID);
                        return Ok("All items removed from cart");
                    }
                    else
                        return Unauthorized();
                }
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        //[Authorize]
        [HttpGet]
        [Route("api/User/OrderList")]
        public IHttpActionResult ShowOrderedItems(string token)
        {
            try
            {
                using (ShoppingELFEntities context = new ShoppingELFEntities())
                {
                    UserTable user = new UserTable();
                    string username = TokenManager.ValidateToken(token);
                    user = context.UserTable.FirstOrDefault(m => m.email == username);

                    if (user != null && user.Role == "User")
                    {
                        var x = new UserRepository().ShowOrderedItem(user.UserID);
                        return Ok(x);
                    }
                    else
                        return Unauthorized();
                }
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/User/OrderFromCart")]
        public IHttpActionResult OrderFromCart(string token)
        {
            try
            {
                using (ShoppingELFEntities context = new ShoppingELFEntities())
                {
                    UserTable user = new UserTable();
                    string username = TokenManager.ValidateToken(token);
                    user = context.UserTable.FirstOrDefault(m => m.email == username);

                    if (user != null && user.Role == "User")
                    {
                        int x = new UserRepository().AddFromCartToOrder(user.UserID);

                        if (x == 3)
                        {
                            new UserRepository().ClearCart(user.UserID);
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
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/User/OrderNow/{pid}")]
        public IHttpActionResult OrderNow(int pid, OrderModel model, string token)
        {
            try
            {
                using (ShoppingELFEntities context = new ShoppingELFEntities())
                {
                    UserTable user = new UserTable();
                    string username = TokenManager.ValidateToken(token);
                    user = context.UserTable.FirstOrDefault(m => m.email == username);

                    if (user != null && user.Role == "User")
                    {
                        int x = new UserRepository().OrderNow(user.UserID, pid, model);
                        if (x == 1)
                        {
                            new UserRepository().ClearCart(user.UserID);
                            return Ok("Order Placed Successfully");
                        }
                        else
                            return Ok("The item you are looking for seems to be out of stock");
                    }
                    else
                        return Unauthorized();
                }
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/User/Address")]
        public IHttpActionResult AddAddress(AddressModel model, string token)
        {
            try
            {
                using (ShoppingELFEntities context = new ShoppingELFEntities())
                {
                    UserTable user = new UserTable();
                    string username = TokenManager.ValidateToken(token);
                    user = context.UserTable.FirstOrDefault(m => m.email == username);

                    if (user != null && user.Role == "User")
                    {
                        new UserModel().AddAddress(user.UserID, model);
                        return Ok("Address added successfully");
                    }
                    else
                        return Unauthorized();
                }
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/User/EditAddress")]
        public IHttpActionResult EditAddress(AddressModel model, string token)
        {
            try
            {
                using (ShoppingELFEntities context = new ShoppingELFEntities())
                {
                    UserTable user = new UserTable();
                    string username = TokenManager.ValidateToken(token);
                    user = context.UserTable.FirstOrDefault(m => m.email == username);

                    if (user != null && user.Role == "User")
                    {
                        bool x = new UserModel().EditAddress(user.UserID, model);
                        if (x)
                            return Ok("Address updated successfully");
                        else
                            return Ok("Something went Wrong , unable to update Address");
                    }
                    else
                        return Unauthorized();
                }
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }
        
        //[Authorize]
        [HttpGet]
        [Route("api/User/GetAddress")]
        public IHttpActionResult GetAddress(string token)
        {
            try
            {
                using (ShoppingELFEntities context = new ShoppingELFEntities())
                {
                    UserTable user = new UserTable();
                    string username = TokenManager.ValidateToken(token);
                    user = context.UserTable.FirstOrDefault(m => m.email == username);

                    if (user != null && user.Role == "User")
                    {
                        var x = new UserModel().GetAddress(user.UserID);
                        return Ok(x);
                    }
                    else
                        return Unauthorized();
                }
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/User/EditAccount")]
        public IHttpActionResult EditAccount(UserModel model, string token)
        {
            try
            {
                using (ShoppingELFEntities context = new ShoppingELFEntities())
                {
                    UserTable user = new UserTable();
                    string username = TokenManager.ValidateToken(token);
                    user = context.UserTable.FirstOrDefault(m => m.email == username);

                    if (user != null && user.Role == "User")
                    {
                        bool x = new UserModel().EditAccount(user.UserID, model);
                        if (x)
                            return Ok("Account details has been updated");
                        else
                            return Ok("unable to update account");
                    }
                    else
                        return Unauthorized();
                }
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        //[Authorize]
        [HttpPost]
        [Route("api/User/ChangePassword")]
        public IHttpActionResult ChangePassword(ChangePasswordModel model, string token)
        {
            try
            {
                using (ShoppingELFEntities context = new ShoppingELFEntities())
                {
                    UserTable user = new UserTable();
                    string username = TokenManager.ValidateToken(token);
                    user = context.UserTable.FirstOrDefault(m => m.email == username);

                    if (user != null && user.Role == "User")
                    {
                        int x = new UserModel().ChangePassword(user.UserID, model);
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
            catch(Exception ex)
            {
                return BadRequest();
            }
        }
    }
}
