using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BrandClothesShopAPI
{
    public static class AuthOptions
    {
        public const string ISSUER = "ClothesShopWebAPI";
        public const string AUDIENCE = "ClothesShopClient"; 
        const string KEY = "mysupersecret_secretkey!123";
        public const int LIFETIME = 1;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
