using BrandClothesShopAPI.Models;
using Core.Models;
using DataStore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;

namespace BrandClothesShopAPI.Services
{
    public class UserService : IUserService
    {
        private readonly ClothesShopContext _context;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;

        public UserService (ClothesShopContext context, IMapper mapper, ITokenService tokenService)
        {
            _context = context;
            _mapper = mapper;
            _tokenService = tokenService;
        }

        public async Task<AuthenticateResponse> Authenticate(AuthenticateRequest user)
        {
            var authUser = await _context.Users
           .FirstOrDefaultAsync(u => u.Email == user.Email && u.Password == user.Password);

            if (authUser == null) return null;

            var token = _tokenService.GenerateJwtToken(authUser);
            var refreshToken = _tokenService.GenerateRefreshToken(authUser);

            return new AuthenticateResponse(authUser, token, refreshToken.ToString());
        }

        public async Task<RegistrationResponse> Register(RegistrationModel registrationModel)
        {
            var user = _mapper.Map<User>(registrationModel);

            if (await _context.Users.CountAsync(u => u.Email == user.Email) >= 1)
                return null;

            var addedUser = await _context.Users.AddAsync(user);

            await _context.SaveChangesAsync();

            return new RegistrationResponse(user);
        }
        public IEnumerable<User> GetAll()
        {
            var users = _context.Users.ToList();

            return users;
        }

    }
}
