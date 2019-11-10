using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ShoppingELF.Models
{
    public class SellerModel
    {
        public int SellerID { get; set; }

        [Required]
        public string yourName { get; set; }

        [Required]
        [MinLength(10, ErrorMessage = "Please enter a valid Phone Number")]
        public string mobileNumber { get; set; }

        [EmailAddress]
        public string email { get; set; }

        [Required]
        //[RegularExpression("^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{7,}$", ErrorMessage = "Password must be atleast 7 characters long with Atleast one capital letter,Number and Special symbol (e.g. !@#$%^&*)")]
        public string password { get; set; }
        public string Role { get; set; }
        public string OTP { get; set; }
        public Nullable<bool> IsAccountVerified { get; set; }


        public virtual ICollection<ProductTable> ProductTable { get; set; }
        public virtual ICollection<SellerDetailsTable> SellerDetailsTable { get; set; }
        public virtual ICollection<SoldTable> SoldTable { get; set; }
    }
}