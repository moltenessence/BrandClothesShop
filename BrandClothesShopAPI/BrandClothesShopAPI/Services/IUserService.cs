using BrandClothesShopAPI.Models;
using Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BrandClothesShopAPI.Services
{
    public interface IUserService
    {
        Task<AuthenticateResponse> Authenticate(AuthenticateRequest user);
        Task<RegistrationResponse> Register(RegistrationModel user);
        IEnumerable<User> GetAll();
    }
}
