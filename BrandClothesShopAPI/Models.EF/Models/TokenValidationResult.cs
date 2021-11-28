using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace Core.Models
{
    public class TokenValidationResult
    {
        public bool Success { get; set; }
        public List<string> Errors { get; set; }
        public HttpStatusCode StatusCode { get; set; }
    }
}
