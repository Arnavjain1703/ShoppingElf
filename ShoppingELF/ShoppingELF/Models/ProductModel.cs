using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShoppingELF.Models
{
    public class ProductModel
    {
        public int ProductID { get; set; }
        public string productName { get; set; }
        public string productBrand { get; set; }
        public string productDetails { get; set; }
        public string picture1 { get; set; }
        public string picture2 { get; set; }
        public string picture3 { get; set; }
        public string picture4 { get; set; }
        public int SubCategoryID { get; set; }
        public int SellerID { get; set; }
        public int SuitableID { get; set; }

        public virtual ICollection<CartTable> CartTable { get; set; }
        public virtual ICollection<OrderTable> OrderTable { get; set; }
        public virtual SellerTable SellerTable { get; set; }
        public virtual SubCategoryTable SubCategoryTable { get; set; }
        public virtual ICollection<SizeTable> SizeTable { get; set; }
        public virtual SuitableForTable SuitableForTable { get; set; }
    }
}