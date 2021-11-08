using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BrandClothesShopAPI.Models
{
    public class Photo
    {
        [Key]
        [JsonIgnore]
        public int PhotoId { get; set; }
        [Required]
        [DataType(DataType.ImageUrl)]
        public string URL { get; set; }
        [ForeignKey("ClothesItem")]
        [JsonIgnore]
        public int ClothesItemId { get; set; }
        public virtual СlothesItem ClothesItem { get; set; }
    }
}
