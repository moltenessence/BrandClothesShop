using BrandClothesShopAPI.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BrandClothesShopAPI.Extentions
{
    public static class ConfigurationExtentions
    {
        public static string GenerateJwtToken(this IConfiguration configuration, User user)
        {
            var now = DateTime.UtcNow;
            var identity = GetIdentity(user);
            var securityKey = AuthOptions.GetSymmetricSecurityKey();
            var jwt = new JwtSecurityToken(issuer: AuthOptions.ISSUER,
                                           audience: AuthOptions.AUDIENCE,
                                           expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                                           claims: identity.Claims,
                                           signingCredentials: new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }
        
        private static ClaimsIdentity GetIdentity(User user)
        {
            if (user == null) return null;

            var claims = new List<Claim>
                {
                    new Claim("Username", user.Username),
                    new Claim("Email", user.Email),
                    new Claim("UserID", user.UserId.ToString())
                };

            ClaimsIdentity claimsIdentity =  new ClaimsIdentity(claims, "Token", 
                                                 ClaimsIdentity.DefaultNameClaimType,
                                                 ClaimsIdentity.DefaultRoleClaimType);
            return claimsIdentity;
        }
    }
}
