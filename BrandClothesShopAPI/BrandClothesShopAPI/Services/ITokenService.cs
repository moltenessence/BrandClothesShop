using BrandClothesShopAPI.Models;

namespace BrandClothesShopAPI.Services
{
    public interface ITokenService
    {
        string GenerateJwtToken(User user);
    }
}