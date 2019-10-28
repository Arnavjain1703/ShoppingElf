using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShoppingELF.Models
{
    public class CartModel
    {
        public int CartID { get; set; }
        public int UserID { get; set; }
        public int ProductID { get; set; }

        public virtual ProductTable ProductTable { get; set; }
        public virtual UserTable UserTable { get; set; }
    }
}