using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Text.Json.Serialization;

namespace BrandClothesShopAPI.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        [StringLength(20, MinimumLength = 5, ErrorMessage = "The password can contain 5-20 characters!")]
        [JsonIgnore]
        public string Password { get; set; }
        [MaxLength(20, ErrorMessage = "The username can't contain more than 20 characters!")]
        public string Username { get; set; }
        public virtual ICollection<Order> Orders { get; set; }

    }
}
