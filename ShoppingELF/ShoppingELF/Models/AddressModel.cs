using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ShoppingELF.Models
{
    public class AddressModel
    {
        public int AddressID { get; set; }

        [Required]
        public string AddressLine1 { get; set; }

        [Required]
        public string AddressLine2 { get; set; }

        [Required]
        public int Pincode { get; set; }

        [Required]
        public string city { get; set; }

        [Required]
        public string State { get; set; }
        public int UserID { get; set; }

        public virtual UserTable UserTable { get; set; }
    }
}