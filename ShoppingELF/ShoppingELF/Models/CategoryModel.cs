using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShoppingELF.Models
{
    public class CategoryModel
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public int SuitableID { get; set; }

        public virtual SuitableForTable SuitableForTable { get; set; }
        public virtual ICollection<SubCategoryTable> SubCategoryTable { get; set; }
    }
}