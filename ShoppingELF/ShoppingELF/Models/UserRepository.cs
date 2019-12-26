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
                    UserID = uid,
                    Quantity = 1
                };
                context.CartTable.Add(ct);
                context.SaveChanges();
                return ct.CartID;
            }
        }

        public bool UpdateCartModel(int cid, CartModel model)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                var cart = context.CartTable.FirstOrDefault(m => m.CartID == cid);
                if (cart != null)
                {
                    cart.Quantity = model.Quantity;
                    context.SaveChanges();
                    return true;
                }
                else
                    return false;
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
                        Quantity = x.Quantity,
                        SizeModel = new SizeModel()
                        {
                            productPrice = x.SizeTable.productPrice,
                            productSize = x.SizeTable.productSize,
                            ProductModel = new ProductModel()
                            {
                                productName = x.SizeTable.ProductTable.productName,
                                productBrand = x.SizeTable.ProductTable.productBrand,
                                productDetails = x.SizeTable.ProductTable.productDetails,
                                picture1 = x.SizeTable.ProductTable.picture1,
                                picture2 = x.SizeTable.ProductTable.picture2,
                                picture3 = x.SizeTable.ProductTable.picture3,
                                picture4 = x.SizeTable.ProductTable.picture4
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
                        productQuantity = x.productQuantity,
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
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.UserID == uid);
                var cart = context.CartTable.Where(m => m.UserID == uid).ToList();
                var cartitems = context.CartTable.Where(m => m.UserID == uid).ToList();
                if(cart.Count > 0)
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
                                productQuantity = i.Quantity,
                                PID = i.PID,
                            };

                            st.productQuantity -= i.Quantity;
                            context.OrderTable.Add(ot);
                            context.SaveChanges();

                            ProductTable seller = new ProductTable();
                            seller = context.ProductTable.FirstOrDefault(x => x.ProductID == i.SizeTable.ProductID);
                            

                            SoldTable soldt = new SoldTable()
                            {
                                SellerID = seller.SellerID,
                                productName = i.SizeTable.ProductTable.productName,
                                productBrand = i.SizeTable.ProductTable.productBrand,
                                productPrice = i.SizeTable.productPrice,
                                productQuantity = i.SizeTable.productQuantity,
                                productSize = i.SizeTable.productSize,
                                productPicture = i.SizeTable.ProductTable.picture1,
                                PID = i.PID,
                                UserName = user.email
                            };
                            context.SoldTable.Add(soldt);
                            context.SaveChanges();
                            //return 1;
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

        public int OrderNow(int uid, int pid, OrderModel model)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                UserTable user = new UserTable();
                user = context.UserTable.FirstOrDefault(m => m.UserID == uid);
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
                        productSize = st.productSize,
                        productQuantity = 1
                    };
                    st.productQuantity -= 1;
                    context.OrderTable.Add(ot);
                    context.SaveChanges();

                    SizeTable seller = new SizeTable();
                    seller = context.SizeTable.FirstOrDefault(x => x.PID == pid);
                    ProductTable pp = new ProductTable();
                    pp = context.ProductTable.FirstOrDefault(m => m.ProductID == seller.ProductID);

                    SoldTable soldt = new SoldTable()
                    {
                        SellerID = pp.SellerID,
                        productName = st.ProductTable.productName,
                        productBrand = st.ProductTable.productBrand,
                        productPrice = st.productPrice,
                        productQuantity = 1,
                        productSize = st.productSize,
                        productPicture = st.ProductTable.picture1,
                        PID = pid,
                        UserName = user.email
                    };
                    context.SoldTable.Add(soldt);
                    context.SaveChanges();

                    return 1;
                }
                else
                    return 0;
            }
        }

    }
}