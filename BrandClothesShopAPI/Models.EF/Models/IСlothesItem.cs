using System.Collections.Generic;

namespace BrandClothesShopAPI.Models
{
    public interface IСlothesItem
    {
        double Price { get; set; }
        string Brand { get; set; }
        int ClothesItemId { get; set; }
        string Description { get; set; }
        string ModelName { get; set; }
        ICollection<Photo> Photos { get; set; }
        string Size { get; set; }
        string Type { get; set; }
    }
}