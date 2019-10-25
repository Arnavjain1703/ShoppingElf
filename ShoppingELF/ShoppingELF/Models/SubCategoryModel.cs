using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShoppingELF.Models
{
    public class SubCategoryModel
    {
        public int SubCategoryID { get; set; }
        public string SubCategoryName { get; set; }
        public int CategoryID { get; set; }

        public virtual CategoryTable CategoryTable { get; set; }
        public virtual ICollection<ProductTable> ProductTable { get; set; }
    }
}