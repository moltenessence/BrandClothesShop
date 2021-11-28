using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Core.Models
{
    public class UpdateTokenRequest : TokenRequest
    {
        [Required]
        public string RefreshToken { get; set; }
    }

}
