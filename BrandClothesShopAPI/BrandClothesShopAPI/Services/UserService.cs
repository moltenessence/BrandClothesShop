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

        public UserService (ClothesShopContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

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

        public async Task<AuthenticateResponse> Authenticate(AuthenticateRequest user)
        {
            var authUser = await _context.Users
           .FirstOrDefaultAsync(u => u.Email == user.Email && u.Password == user.Password);

            if (authUser == null) return null;

            var token = GenerateJwtToken(authUser);

            return new AuthenticateResponse(authUser, token);
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
