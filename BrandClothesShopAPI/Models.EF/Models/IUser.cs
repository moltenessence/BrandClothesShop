using System.Collections.Generic;

namespace BrandClothesShopAPI.Models
{
    public interface IUser
    {
        string Email { get; set; }
        ICollection<Order> Orders { get; set; }
        string Password { get; set; }
        int UserId { get; set; }
    }
}