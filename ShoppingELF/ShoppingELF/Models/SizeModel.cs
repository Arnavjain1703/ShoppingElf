using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShoppingELF.Models
{
    public class SizeModel
    {
        public int PID { get; set; }
        public string productSize { get; set; }
        public int productQuantity { get; set; }
        public int ProductID { get; set; }
        public int productPrice { get; set; }

        public virtual ProductModel ProductModel { get; set; }
        //public ProductTable ProductModel { get; internal set; }
    }
}