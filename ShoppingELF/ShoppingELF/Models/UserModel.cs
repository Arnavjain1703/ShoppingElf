using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Helpers;

namespace ShoppingELF.Models
{
    public class UserModel
    {
        public int UserID { get; set; }

        [Required]
        public string yourName { get; set; }

        [EmailAddress]
        public string email { get; set; }

        [Required]
        [MinLength(10, ErrorMessage = "Please enter a valid Phone Number")]
        public string phoneNumber { get; set; }

        [Required]
        //[RegularExpression("^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{7,}$", ErrorMessage = "Password must be atleast 7 characters long with Atleast one capital letter,Number and Special symbol (e.g. !@#$%^&*)")]
        public string password { get; set; }

        [Required(ErrorMessage = "please confirm your message")]
        [Compare("password")]
        public string confirmPassword { get; set; }

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

        public void AddAddress(int uid, AddressModel model)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                AddressTable at = new AddressTable()
                {
                    AddressLine1 = model.AddressLine1,
                    AddressLine2 = model.AddressLine2,
                    Pincode = model.Pincode,
                    State = model.State,
                    city = model.city,
                    UserID = uid
                };
                context.AddressTable.Add(at);
                context.SaveChanges();
            }
        }

        public bool EditAddress(int uid, AddressModel model)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                var Address = context.AddressTable.FirstOrDefault(x => x.UserID == uid);
                if (Address != null)
                {
                    Address.AddressLine1 = model.AddressLine1;
                    Address.AddressLine2 = model.AddressLine2;
                    Address.city = model.city;
                    Address.Pincode = model.Pincode;
                    Address.State = model.State;
                    context.SaveChanges();
                    return true;
                }
                else
                    return false;
            }
        }

        public List<AddressModel> GetAddress(int uid)
        {
            using(var context = new ShoppingELFEntities())
            {
                var result = context.AddressTable
                    .Where(x => x.UserID == uid)
                    .Select(x => new AddressModel()
                    {
                        AddressID = x.AddressID,
                        UserID = x.UserID,
                        AddressLine1 = x.AddressLine1,
                        AddressLine2 = x.AddressLine2,
                        State = x.State,
                        city = x.city,
                        Pincode = x.Pincode
                    }).ToList();
                return result;
            }
        }

        public bool EditAccount(int uid, UserModel model)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                var user = context.UserTable.FirstOrDefault(x => x.UserID == uid);
                if(user != null)
                {
                    user.phoneNumber = model.phoneNumber;
                    user.yourName = model.yourName;
                    context.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public int ChangePassword(int uid, ChangePasswordModel model)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                var user = context.UserTable.FirstOrDefault(x => x.UserID == uid);
                if (user != null)
                {
                    string oldPassword = Crypto.Hash(model.oldPassword);
                    string newPassword = Crypto.Hash(model.NewPassword);
                    if (oldPassword != user.password)
                        return 1;
                    else if (newPassword == user.password)
                        return 4;
                    else
                    {
                        user.password = newPassword;
                        context.SaveChanges();
                        return 2;
                    }
                    //return 0;
                }
                else
                    return 3;
            }
        }
    }
}