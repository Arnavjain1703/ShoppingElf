using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShoppingELF.Models
{
    public class SellerModel
    {
        public int SellerID { get; set; }
        public string yourName { get; set; }
        public string mobileNumber { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string Role { get; set; }
        public string OTP { get; set; }
        public Nullable<bool> IsAccountVerified { get; set; }


        public virtual ICollection<ProductTable> ProductTable { get; set; }
        public virtual ICollection<SellerDetailsTable> SellerDetailsTable { get; set; }
        public virtual ICollection<SoldTable> SoldTable { get; set; }
    }
}