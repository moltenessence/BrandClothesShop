namespace BrandClothesShopAPI.Models
{
    public interface IPhoto
    {
        СlothesItem ClothesItem { get; set; }
        int ClothesItemId { get; set; }
        int PhotoId { get; set; }
        string URL { get; set; }
    }
}