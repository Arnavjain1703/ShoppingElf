using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;

namespace ShoppingELF.Models
{
    public class SellerAccountModel
    {
        ShoppingELFEntities context = new ShoppingELFEntities();
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

        public string Password(string Email)
        {
            ShoppingELFEntities context = new ShoppingELFEntities();
            SellerTable us = new SellerTable();
            us = context.SellerTable.SingleOrDefault(x => x.email == Email);
            string pass = Convert.ToString(us.password);
            return pass;
        }

        public bool verification(string Email)
        {
            ShoppingELFEntities context = new ShoppingELFEntities();
            SellerTable Fac = new SellerTable();
            Fac = context.SellerTable.SingleOrDefault(m => m.email == Email);
            var y = Convert.ToBoolean(Fac.IsAccountVerified);
            return y;
        }

        public SellerTable GetSeller(string username)
        {
            try
            {

                return context.SellerTable.FirstOrDefault(user => user.email.Equals(username));

            }
            catch
            {
                return null;
            }
        }

        //public bool ExpireOTP(DateTime time)
        //{
        //    DateTime timeNow = DateTime.Now;
        //    var Timer = new System.Timers.Timer(120000);
        //    if((timeNow - time) <= )
        //}
    }
}