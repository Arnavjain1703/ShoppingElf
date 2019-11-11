using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Helpers;

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



        public bool EnterDetails(int sid, SellerDetailsModel model)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                SellerDetailsTable sdt = new SellerDetailsTable()
                {
                    AddressLine1 = model.AddressLine1,
                    AddressLine2 = model.AddressLine2,
                    pincode = model.pincode,
                    state = model.state,
                    city = model.city,
                    AccountHolderName = model.AccountHolderName,
                    accountNumber = model.accountNumber,
                    accountType = model.accountType,
                    IFSCCode = model.IFSCCode,
                    ShippingFee = model.ShippingFee,
                    GSTNumber = model.GSTNumber,
                    PANCardNumber = model.PANCardNumber,
                    SellerID = sid
                };
                context.SellerDetailsTable.Add(sdt);
                context.SaveChanges();
                return true;
            }
        }

        public bool EditDetails(int sid, SellerDetailsModel model)
        {
            using(ShoppingELFEntities context = new ShoppingELFEntities())
            {
                SellerDetailsTable sdt = new SellerDetailsTable();
                sdt = context.SellerDetailsTable.FirstOrDefault(x => x.SellerID == sid);
                if (sdt != null)
                {
                    sdt.AddressLine1 = model.AddressLine1;
                    sdt.AddressLine2 = model.AddressLine2;
                    sdt.pincode = model.pincode;
                    sdt.state = model.state;
                    sdt.city = model.city;
                    sdt.AccountHolderName = model.AccountHolderName;
                    sdt.accountNumber = model.accountNumber;
                    sdt.accountType = model.accountType;
                    sdt.ShippingFee = model.ShippingFee;
                    sdt.GSTNumber = model.GSTNumber;
                    sdt.PANCardNumber = model.PANCardNumber;
                    context.SaveChanges();
                    return true;
                }
                else
                    return false;
            }
        }

        public int ChangePassword(int sid, ChangePasswordModel model)
        {
            using (ShoppingELFEntities context = new ShoppingELFEntities())
            {
                var seller = context.SellerTable.FirstOrDefault(x => x.SellerID == sid);
                if (seller != null)
                {
                    string oldPassword = Crypto.Hash(model.oldPassword);
                    string newPassword = Crypto.Hash(model.NewPassword);
                    if (oldPassword != seller.password)
                        return 1;
                    else if (newPassword == seller.password)
                        return 4;
                    else
                    {
                        seller.password = newPassword;
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