using Core.ModelValidations;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BrandClothesShopAPI.Models
{
    [Table("OrderList")]
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        [Order_EnsureTheOrderTimeIsNotInFuture]
        public DateTime? PurchaseTime { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }
        [ForeignKey("ClothesItem")]
        public int ClothesItemId { get; set; }
        [Required]
        public string Size { get; set; }
        [Required]
        public decimal Price { get; set; }
        public string Name { get; set; }
        public Order()
        {

        }
    }
}

