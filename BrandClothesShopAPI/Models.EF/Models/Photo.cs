using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BrandClothesShopAPI.Models
{
    public class Photo : IPhoto
    {
        [Key]
        public int PhotoId { get; set; }
        [Required]
        [DataType(DataType.ImageUrl)]
        public string URL { get; set; }
        [ForeignKey("ClothesItem")]
        public int ClothesItemId { get; set; }
        public virtual СlothesItem ClothesItem { get; set; }
    }
}
