using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ShoppingELF.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }

        [Required]
        public string yourName { get; set; }

        [EmailAddress]
        public string email { get; set; }

        [Required]
        [MinLength(10, ErrorMessage = "please enter a valid phone number")]
        public string phoneNumber { get; set; }

        [Required]
        //[RegularExpression("^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{7,}$", ErrorMessage = "Password must be atleast 7 characters long with Atleast one capital letter,Number and Special symbol (e.g. !@#$%^&*)")]
        public string password { get; set; }

        [Required(ErrorMessage = "please confirm your password")]
        [Compare("password")]
        public string confirmPassword { get; set; }
        public string file { get; set; }
        public Nullable<System.Guid> ActivationCode { get; set; }
        public Nullable<bool> IsEmailVerified { get; set; }
        public string ResetPasswordCode { get; set; }
    }
}