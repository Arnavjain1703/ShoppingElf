using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Helpers;
using System.Web;

namespace ShoppingELF.Models
{
    public class TokenAuthorization : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            
            UserTable us = new UserTable();
            //using (var user = new ShoppingELFEntities())
            //{
            //    y = Crypto.Hash(model)
            //    bool IsValid = user.UserTable.Any(x => x.email == model.email && x.password == y);
            //}
            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            if (context.UserName == us.email && Crypto.Hash(context.Password) == us.password && us.Role == "User")
            {
                identity.AddClaim(new Claim(ClaimTypes.Role, us.Role));
                identity.AddClaim(new Claim(us.email, us.Role));
                identity.AddClaim(new Claim(ClaimTypes.Name, us.yourName));
                context.Validated(identity);
            }
            else
            {
                context.SetError("Invalid_Grant", "Email and Password do not match");
                return;
            }
        }
    }
}