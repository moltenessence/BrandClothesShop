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
        [DataType(DataType.Password)]
        [MaxLength(20)]
        [MinLength(5)]
        [JsonIgnore]
        public string Password { get; set; }
        [MaxLength(20)]
        public string Username { get; set; }
        public virtual ICollection<Order> Orders { get; set; }

    }
}
