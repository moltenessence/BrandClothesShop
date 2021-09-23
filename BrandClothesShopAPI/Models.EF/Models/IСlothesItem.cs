using System.Collections.Generic;

namespace BrandClothesShopAPI.Models
{
    public interface IСlothesItem
    {
        string Brand { get; set; }
        string ClothesItemId { get; set; }
        string Description { get; set; }
        string ModelName { get; set; }
        ICollection<Photo> Photos { get; set; }
        string Size { get; set; }
        string Type { get; set; }
    }
}