using BrandClothesShopAPI.Models;
using Core.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrandClothesShopAPI.Services
{
    public interface IUserService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest user);
        Task<AuthenticateResponse> Register(RegistrationModel user);
        IEnumerable<User> GetAll();
    }
}
