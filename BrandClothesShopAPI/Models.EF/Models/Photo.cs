using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BrandClothesShopAPI.Models
{
    public class Photo
    {
        [Required]
        public string URL { get; set; }
        [Key]
        public int PhotoId { get; set; }
        [ForeignKey("ClothesItem")]
        public int ClothesItemId { get; set; }
        public virtual СlothesItem ClothesItem { get; set; }
    }
}
