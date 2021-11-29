using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Core.Models
{
    public class TokenRequest
    {
        [Required]
        public string Token { get; set; }
    }
}
