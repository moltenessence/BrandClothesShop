using BrandClothesShopAPI.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Models
{
    [NotMapped]
    public class AuthenticateResponse
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public string RefreshToken { get; set; }

        public AuthenticateResponse(User user, string token, string refreshToken)
        {
            Id = user.UserId;
            Username = user.Username;
            Email = user.Email;
            Token = token;
            RefreshToken = refreshToken;
        }
    }
}
