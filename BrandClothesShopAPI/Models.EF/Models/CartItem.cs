﻿using BrandClothesShopAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Core.Models
{
    [Table("CartItems")]
    public class CartItem
    {
        [Key]
        public int ItemId { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }

        public string PhotoUrl { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Size { get; set; }
    }
}
