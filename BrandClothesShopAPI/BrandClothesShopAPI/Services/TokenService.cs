using BrandClothesShopAPI.Models;
using Core.Models;
using DataStore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BrandClothesShopAPI.Services
{
    public class TokenService : ITokenService
    {
        private readonly ClothesShopContext _context;
        private readonly TokenValidationParameters _tokenValidationParameters;
        public TokenService(ClothesShopContext context, TokenValidationParameters tokenValidationParameters)
        {
            _context = context;
            _tokenValidationParameters = tokenValidationParameters;
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
        public RefreshToken GenerateRefreshToken(User user)
        {
            var refreshToken = new RefreshToken()
            {
                UserId = user.UserId,
                AddedDate = DateTime.UtcNow,
                IsUsed = false,
                ExpiryDate = DateTime.UtcNow.AddMonths(6),
                Token = RandomString(35) + Guid.NewGuid()
            };

            _context.RefreshTokens.Add(refreshToken);
            _context.SaveChanges();

            return refreshToken;
        }

        public TokenValidationResult ValidateToken(TokenRequest tokenRequest)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();

            try
            {
                var tokenInVerification = jwtTokenHandler.ValidateToken(tokenRequest.Token, _tokenValidationParameters, out var validatedToken);

                if (validatedToken is JwtSecurityToken jwtSecurityToken)
                {
                    return new TokenValidationResult
                    {
                        Success = true,
                        Errors = null,
                        StatusCode = HttpStatusCode.OK
                    };
                }

                return new TokenValidationResult
                {
                    Success = false,
                    Errors = new List<string>() { "Token isn't valid" },
                    StatusCode = HttpStatusCode.BadRequest
                };
            }
            catch(SecurityTokenExpiredException)
            {
                return new TokenValidationResult
                {
                    Success = false,
                    Errors = new List<string>() { "The token is expired." },
                    StatusCode = HttpStatusCode.Forbidden
                };
            }
            catch (Exception ex)
            {
                return new TokenValidationResult
                {
                    Success = false,
                    Errors = new List<string>() { $"Something went wrong: {ex.Message}" },
                    StatusCode = HttpStatusCode.BadRequest
                };
            }
        }
        public async Task<UpdateTokenResult> ValidateAndUpdateTokenAsync(UpdateTokenRequest tokenRequest)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();

            try
            {
                var tokenInVerification = jwtTokenHandler.ValidateToken(tokenRequest.Token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = false
                },
                out var validatedToken);

                if (validatedToken is JwtSecurityToken jwtSecurityToken)
                {
                    var result = jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase);

                    if (!result) return null;
                }

                var utcExpiryDate = long.Parse(tokenInVerification.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Exp).Value);

                var expiryDate = UnixTimeStampToDateTime(utcExpiryDate);

                if (expiryDate > DateTime.UtcNow) return new UpdateTokenResult
                {
                    Success = false,
                    Errors = new List<string>() { "Token hasn't expired yet" },
                    Token = null,
                    StatusCode = HttpStatusCode.BadRequest
                };

                var storedToken = _context.RefreshTokens.FirstOrDefault(x => x.Token == tokenRequest.RefreshToken);

                if (storedToken == null) return new UpdateTokenResult
                {
                    Success = false,
                    Errors = new List<string>() { "The token doesn't exist" },
                    Token = null,
                    StatusCode = HttpStatusCode.BadRequest
                };

                if (storedToken.ExpiryDate < DateTime.Now)
                {
                    _context.RefreshTokens.Remove(storedToken);
                    await _context.SaveChangesAsync();

                    return new UpdateTokenResult
                    {
                        Success = false,
                        Errors = new List<string>() { "The refresh token expired." },
                        Token = null,
                        StatusCode = HttpStatusCode.NotFound
                    };
                }

                if (storedToken.IsUsed)
                {
                    return new UpdateTokenResult
                    {
                        Success = false,
                        Errors = new List<string>() { "The refresh token has been used" },
                        Token = null,
                        StatusCode = HttpStatusCode.BadRequest
                    };
                }
              

                storedToken.IsUsed = true;
                _context.RefreshTokens.Update(storedToken);
                await _context.SaveChangesAsync();

                var user = await _context.Users.FindAsync(storedToken.UserId);
                var token = GenerateJwtToken(user);

                return new UpdateTokenResult
                {
                    Success = true,
                    Errors = null,
                    Token = token,
                    RefreshToken = GenerateRefreshToken(user).Token,
                    StatusCode = HttpStatusCode.OK
                };

            }
            catch (Exception ex)
            {
                return new UpdateTokenResult
                {
                    Success = false,
                    Errors = new List<string>() {
                       $"Something went wrong: {ex.Message}"
                        },
                    Token = null,
                    StatusCode = HttpStatusCode.InternalServerError
                };
            }
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

        private string RandomString(int length)
        {
            var random = new Random();

            var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

            return new string(Enumerable.Repeat(characters, length)
                .Select(x => x[random.Next(x.Length)]).ToArray());
        }

        private DateTime UnixTimeStampToDateTime(long unixTimeStamp)
        {
            var dateTimeVal = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            dateTimeVal = dateTimeVal.AddSeconds(unixTimeStamp).ToUniversalTime();

            return dateTimeVal;
        }
    }
}
