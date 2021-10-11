using BrandClothesShopAPI.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public class RegistrationResponse
    {
        public string Username { get; set; }
        public string Email { get; set; }

        public RegistrationResponse(User user)
        {
            Username = user.Username;
            Email = user.Email;
        }
    }
}
