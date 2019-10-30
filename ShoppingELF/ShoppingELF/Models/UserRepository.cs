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

        public int RemoveFromCart(int cid)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                var result = context.CartTable.FirstOrDefault(x => x.CartID == cid);
                if(result != null)
                {
                    context.CartTable.Remove(result);
                    context.SaveChanges();
                    return 1;
                }
                else
                {
                    return 0;
                }
            }
        }

        public List<OrderModel> ShowOrderedItem(int uid)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                var result = context.OrderTable
                    .Where(x => x.UserID == uid)
                    .Select(x => new OrderModel()
                    {
                        OrderID = x.OrderID,
                        UserID = x.UserID,
                        ProductName = x.ProductName,
                        productBrand = x.productBrand,
                        productPrice = x.productPrice,
                        productSize = x.productSize,
                        productPicture = x.productPicture,
                        PID = x.PID
                    }).ToList();
                return result;
            }
        }

        public void ClearCart(int uid)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                var querry = context.CartTable.Where(m => m.UserID == uid).ToList();
                foreach(var q in querry)
                {
                    context.CartTable.Remove(q);
                }
                context.SaveChanges();
            }
        }

        public int AddFromCartToOrder(int uid)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                CartTable ct = new CartTable();
                SizeTable st = new SizeTable();
                ct = context.CartTable.SingleOrDefault(m => m.UserID == uid);
                var cartitems = context.CartTable.Where(m => m.UserID == uid).ToList();
                if(ct != null)
                {
                    foreach (var i in cartitems)
                    {
                        st = context.SizeTable.FirstOrDefault(x => x.PID == i.PID);
                        if (st.productQuantity > 0)
                        {
                            OrderTable ot = new OrderTable()
                            {
                                UserID = uid,
                                productBrand = i.SizeTable.ProductTable.productBrand,
                                ProductName = i.SizeTable.ProductTable.productName,
                                productPicture = i.SizeTable.ProductTable.picture1,
                                productPrice = i.SizeTable.productPrice,
                                productSize = i.SizeTable.productSize,
                                PID = i.PID
                            };

                            st.productQuantity -= 1;
                            context.OrderTable.Add(ot);
                            context.SaveChanges();
                            return 1;
                        }
                        else
                            return 2;
                    }
                    return 3;
                }
                else
                    return 0;
            }
        }

        public int OrderNow(int uid, int pid)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                SizeTable st = new SizeTable();
                st = context.SizeTable.FirstOrDefault(m => m.PID == pid);
                if (st.productQuantity > 0)
                {
                    OrderTable ot = new OrderTable()
                    {
                        UserID = uid,
                        PID = pid,
                        productBrand = st.ProductTable.productBrand,
                        ProductName = st.ProductTable.productName,
                        productPicture = st.ProductTable.picture1,
                        productPrice = st.productPrice,
                        productSize = st.productSize
                    };
                    st.productQuantity -= 1;
                    context.OrderTable.Add(ot);
                    context.SaveChanges();
                    return 1;
                }
                else
                    return 0;
            }
        }

    }
}