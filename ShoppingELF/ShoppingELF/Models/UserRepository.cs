using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;

namespace ShoppingELF.Models
{
    public class UserRepository
    {
        ShoppingELFEntities context = new ShoppingELFEntities();

        //public UserTable ValidateUser(string Email, string password)
        //{
        //    var y = Crypto.Hash(password);
        //    return context.UserTable.FirstOrDefault(user =>
        //    user.email.Equals(Email, StringComparison.OrdinalIgnoreCase)
        //    && user.password == y);
        //}
        public UserTable GetUser(string username)
        {
            try
            {
                return context.UserTable.FirstOrDefault(user => user.email.Equals(username));
            }
            catch
            {
                return null;
            }
        }

        //public void Dispose()
        //{
        //    context.Dispose();
        //}


    }
}