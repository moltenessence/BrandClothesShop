using System.Collections.Generic;
using System.Net;

namespace Core.Models
{
    public class TokenValidationResult
    {
        public bool Success { get; set; }
        public List<string> Errors { get; set; }
        public HttpStatusCode StatusCode { get; set; }
    }
}
