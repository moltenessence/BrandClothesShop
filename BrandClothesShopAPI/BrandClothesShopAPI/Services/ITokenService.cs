using BrandClothesShopAPI.Models;
using Core.Models;
using System.Threading.Tasks;

namespace BrandClothesShopAPI.Services
{
    public interface ITokenService
    {
        string GenerateJwtToken(User user);
        RefreshToken GenerateRefreshToken(User user);
        Task<UpdateTokenResult> ValidateAndUpdateTokenAsync(UpdateTokenRequest tokenRequest);
        TokenValidationResult ValidateToken(TokenRequest tokenRequest);
    }
}