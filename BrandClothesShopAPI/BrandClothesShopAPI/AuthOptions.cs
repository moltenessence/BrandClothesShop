using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace BrandClothesShopAPI
{
    public static class AuthOptions
    {
        public const string ISSUER = "ClothesShopWebAPI";
        public const string AUDIENCE = "CClient"; 
        public const string KEY = "ssisiaidsdisaaidsdjdisjsidjsecretkey2021";
        public const int LIFETIME = 1;

        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
