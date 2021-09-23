using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BrandClothesShopAPI.Models
{
    public class СlothesItem : IСlothesItem
    {
        [Required]
        public string ModelName { get; set; }
        [Required]
        public string Brand { get; set; }
        [Key]
        public string ClothesItemId { get; set; }
        [Required]
        public string Size { get; set; }
        public string Description { get; set; }
        [Required]
        [ClothesItem_EnsureThisClothesTypeExists]
        public string Type { get; set; }
        public virtual ICollection<Photo> Photos { get; set; }
    }
}