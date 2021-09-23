using System;

namespace BrandClothesShopAPI.Models
{
    public interface IOrder
    {
        СlothesItem ClothesItem { get; set; }
        int ClothesItemId { get; set; }
        int OrderId { get; set; }
        DateTime? PurchaseTime { get; set; }
        User User { get; set; }
        int UserId { get; set; }
    }
}