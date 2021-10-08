using BrandClothesShopAPI.Models;
using Core.Models;
using DataStore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BrandClothesShopAPI.Extentions;
using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;
using AutoMapper;

namespace BrandClothesShopAPI.Services
{
    public class UserService : IUserService
    {
        private readonly ClothesShopContext _context;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        public UserService (ClothesShopContext context, IConfiguration configuration, IMapper mapper)
        {
            _context = context;
            _configuration = configuration;
            _mapper = mapper;
        }

        public AuthenticateResponse Authenticate(AuthenticateRequest user)
        {
            var authUser = _context.Users
           .FirstOrDefault(u => u.Email == user.Email && u.Password == user.Password);

            if (authUser == null) return null;

            var token = _configuration.GenerateJwtToken(authUser);

            return new AuthenticateResponse(authUser, token);
        }

        public async Task<AuthenticateResponse> Register(RegistrationModel registrationModel)
        {
            var user = _mapper.Map<User>(registrationModel);
            var addedUser = await _context.Users.AddAsync(user);

            await _context.SaveChangesAsync();

            var response = Authenticate(new AuthenticateRequest
            {
                Email= user.Email,
                Password = user.Password
            });

            return response;
        }
        public IEnumerable<User> GetAll()
        {
            var users = _context.Users.ToList();

            return users;
        }

    }
}
