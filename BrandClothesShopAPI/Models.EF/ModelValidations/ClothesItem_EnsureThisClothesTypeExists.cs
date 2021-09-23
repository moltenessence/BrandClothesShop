using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BrandClothesShopAPI.Models
{
    public class ClothesItem_EnsureThisClothesTypeExists : ValidationAttribute
    {
        private readonly List<string> ValidClothesTypes = new List<string>()
        {
            "Sport", "T-Shirt", "Shoes", "Pants", "Shirt"
        };
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var item = (СlothesItem)validationContext.ObjectInstance;
            var type = item?.Type;

            if (type != null && !ValidClothesTypes.Contains(type))
                return new ValidationResult("The invalid clothes type!");

            return ValidationResult.Success;
        }

    }
}

