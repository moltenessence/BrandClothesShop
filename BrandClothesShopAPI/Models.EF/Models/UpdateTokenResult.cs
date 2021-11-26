using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public class UpdateTokenResult
    {
        public bool Success { get; set; }
        public List<string> Errors { get; set; }
        public string Token { get; set; }
        public string RefreshToken { get; set; }
    }
}
