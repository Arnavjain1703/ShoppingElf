using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;

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

        [Required(ErrorMessage = "Please confirm Your Password")]
        [Compare("password")]
        public string confirmPassword { get; set; }
        public Nullable<System.Guid> ActivationCode { get; set; }
        public Nullable<bool> IsEmailVerified { get; set; }
        public string ResetPasswordCode { get; set; }
        public string files { get; set; }
        public string Role { get; set; }

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
    }
}