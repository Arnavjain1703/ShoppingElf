using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShoppingELF.Models
{
    public class SellerDetailsModel
    {
        public int SellerDetailID { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string pincode { get; set; }
        public string state { get; set; }
        public string city { get; set; }
        public string AccountHolderName { get; set; }
        public string accountNumber { get; set; }
        public string IFSCCode { get; set; }
        public string accountType { get; set; }
        public int ShippingFee { get; set; }
        public string GSTNumber { get; set; }
        public string PANCardNumber { get; set; }
        public Nullable<int> SellerID { get; set; }

        public virtual SellerTable SellerTable { get; set; }
    }
}