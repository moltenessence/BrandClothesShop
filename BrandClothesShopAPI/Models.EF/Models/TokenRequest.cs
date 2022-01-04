using System.ComponentModel.DataAnnotations;

namespace Core.Models
{
    public class TokenRequest
    {
        [Required]
        public string Token { get; set; }
    }
}
