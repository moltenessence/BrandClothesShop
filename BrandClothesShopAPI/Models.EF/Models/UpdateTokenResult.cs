
namespace Core.Models
{
    public class UpdateTokenResult : TokenValidationResult
    {
        public string Token { get; set; }
        public string RefreshToken { get; set; }
    }
}
