using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BrandClothesShopAPI.Models
{
    public class User : IUser
    {
        public int UserId { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public string Username { get; set; }
        public virtual ICollection<Order> Orders { get; set; }

    }
}
