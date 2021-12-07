using Core.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace BrandClothesShopAPI.Models
{
    public class СlothesItem
    {
        [Key]
        public int ClothesItemId { get; set; }
        [Required]
        public string ModelName { get; set; }
        [Required]
        public string Brand { get; set; }
        [Required]
        public string Size { get; set; }
        public string Description { get; set; }
        [Range(0.0, Double.MaxValue, ErrorMessage = "The price can't be negative.")]
        public double Price { get; set; }
        [Required]
        [ClothesItem_EnsureThisClothesTypeExists]
        public string Type { get; set; }
        public virtual ICollection<Photo> Photos { get; set; }

        public СlothesItem()
        {
            Photos = new List<Photo>();
        }
    }

}