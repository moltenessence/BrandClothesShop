using System.ComponentModel.DataAnnotations;

namespace Core.Models
{
    public class UpdateTokenRequest : TokenRequest
    {
        [Required]
        public string RefreshToken { get; set; }
    }

}
