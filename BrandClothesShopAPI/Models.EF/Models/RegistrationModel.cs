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
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [DataType(DataType.Password)]
        [MaxLength(20)]
        [MinLength(5)]
        public string Password { get; set; }
        [MaxLength(20)]
        public string Username { get; set; }
    }
}
