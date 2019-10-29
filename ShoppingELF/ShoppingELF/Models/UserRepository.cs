using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;

namespace ShoppingELF.Models
{
    public class UserRepository
    {
        ShoppingELFEntities context = new ShoppingELFEntities();

        
        public UserTable GetUser(string username)
        {
            try
            {

                return context.UserTable.FirstOrDefault(user => user.email.Equals(username));

            }
            catch
            {
                return null;
            }
        }

        public int AddToCart(int uid, int pid)
        {
            using(var context = new ShoppingELFEntities())
            {
                CartTable ct = new CartTable()
                { 
                    PID = pid,
                    UserID = uid
                };
                context.CartTable.Add(ct);
                context.SaveChanges();
                return ct.CartID;
            }
        }

        public List<CartModel> GetCart(int uid)
        {
            using(var context = new ShoppingELFEntities())
            {
                var result = context.CartTable
                    .Where(x => x.UserID == uid)
                    .Select(x => new CartModel()
                    {
                        UserID = uid,
                        PID = x.PID,
                        CartID = x.CartID,
                        SizeModel = new SizeModel()
                        {
                            productPrice = x.SizeTable.productPrice,
                            productSize = x.SizeTable.productSize,
                            ProductModel = new ProductModel()
                            {
                                productName = x.SizeTable.ProductTable.productName,
                                productBrand = x.SizeTable.ProductTable.productBrand,
                                productDetails = x.SizeTable.ProductTable.productDetails
                            }
                        }
                    }).ToList();
                return result;
            }
        }

    }
}