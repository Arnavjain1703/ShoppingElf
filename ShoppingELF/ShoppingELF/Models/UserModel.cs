using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Helpers;

namespace ShoppingELF.Models
{
    public class UserModel
    {
        public int UserID { get; set; }
        public string yourName { get; set; }
        public string email { get; set; }
        public string phoneNumber { get; set; }
        public string password { get; set; }
        public Nullable<System.Guid> ActivationCode { get; set; }
        public Nullable<bool> IsEmailVerified { get; set; }
        public string ResetPasswordCode { get; set; }
        public string files { get; set; }
        public string Role { get; set; }

        public virtual ICollection<AddressTable> AddressTable { get; set; }
        public virtual ICollection<CartTable> CartTable { get; set; }
        public virtual ICollection<OrderTable> OrderTable { get; set; }

        //public JWTAuthenticationIdentity(string userName)
        //    : base(userName)
        //{
        //    email = userName;
        //}


        public bool verification(string Email)
        {
            //UserModel model = new UserModel();
            ShoppingELFEntities context = new ShoppingELFEntities();
            UserTable Fac = new UserTable();
            ////FacultyTable faculty1 = new FacultyTable();
            Fac = context.UserTable.SingleOrDefault(m => m.email == Email);
            var y = Convert.ToBoolean(Fac.IsEmailVerified);
            return y;
        }

        public string Password(string Email)
        {
            ShoppingELFEntities context = new ShoppingELFEntities();
            UserTable us = new UserTable();
            us = context.UserTable.SingleOrDefault(x => x.email == Email);
            string pass = Convert.ToString(us.password);
            return pass;
        }

        public void AddUser(UserTable user)
        {
            UserTable us = new UserTable();
            using (ShoppingELFEntities db = new ShoppingELFEntities())
            {
                us.ActivationCode = Guid.NewGuid();
                user.ActivationCode = us.ActivationCode;
                user.Role = "User";
                user.password = Crypto.Hash(user.password);
                db.UserTable.Add(user);
                db.SaveChanges();
            }
        }
        public bool IsEmailExist(string Email)
        {
            using (ShoppingELFEntities se = new ShoppingELFEntities())
            {
                var v = se.UserTable.Where(a => a.email == Email).FirstOrDefault();
                return v != null;
            }
        }
    }
}