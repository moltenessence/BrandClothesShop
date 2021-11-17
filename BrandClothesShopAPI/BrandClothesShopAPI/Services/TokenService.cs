using BrandClothesShopAPI.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BrandClothesShopAPI.Services
{
    public class TokenService : ITokenService
    {
        public string GenerateJwtToken(User user)
        {
            var now = DateTime.UtcNow;
            var identity = GetIdentity(user);
            var securityKey = AuthOptions.GetSymmetricSecurityKey();
            var jwt = new JwtSecurityToken(issuer: AuthOptions.ISSUER,
                                           audience: AuthOptions.AUDIENCE,
                                           notBefore: now,
                                           expires: DateTime.Now.AddMinutes(AuthOptions.LIFETIME),
                                           claims: identity.Claims,
                                           signingCredentials: new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }
        private ClaimsIdentity GetIdentity(User user)
        {
            if (user == null) return null;

            var claims = new List<Claim>
                {
                    new Claim("Username", user.Username),
                    new Claim("Email", user.Email),
                    new Claim("UserID", user.UserId.ToString())
                };

            ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, "Token",
                                                 ClaimsIdentity.DefaultNameClaimType,
                                                 ClaimsIdentity.DefaultRoleClaimType);
            return claimsIdentity;
        }
    }
}
