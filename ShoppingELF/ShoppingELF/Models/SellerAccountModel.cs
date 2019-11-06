using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;

namespace ShoppingELF.Models
{
    public class SellerAccountModel
    {
        public string GenerateRandomNumber()
        {
            Random generator = new Random();
            String OTP = generator.Next(100000, 1000000).ToString();
            return OTP;
        }

        public void AddSeller(SellerTable seller)
        {
            SellerTable st = new SellerTable();
            using (ShoppingELFEntities db = new ShoppingELFEntities())
            {
                seller.OTP = Convert.ToString(GenerateRandomNumber());
                seller.Role = "Seller";
                seller.password = Crypto.Hash(seller.password);
                db.SellerTable.Add(seller);
                db.SaveChanges();
            }
        }

        public bool IsSellerExist(string Email)
        {
            using (ShoppingELFEntities se = new ShoppingELFEntities())
            {
                var v = se.SellerTable.Where(a => a.email == Email).FirstOrDefault();
                return v != null;
            }
        }
    }
}