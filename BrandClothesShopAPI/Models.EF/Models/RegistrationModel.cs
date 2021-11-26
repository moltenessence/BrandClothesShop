using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Core.Models
{
    [NotMapped]
    public class RegistrationModel
    {
        [Required]
        public string Email { get; set; }
        [StringLength(20, MinimumLength = 5, ErrorMessage = "The password can contain 5-20 characters!")]
        public string Password { get; set; }
        [MaxLength(20, ErrorMessage = "The username can't contain more than 20 characters!")]
        public string Username { get; set; }
    }
}
