using Core.ModelValidations;
using System.ComponentModel.DataAnnotations;

namespace BrandClothesShopAPI.Models
{
    public class ClothesItem_EnsureThisClothesTypeExists : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var item = (СlothesItem)validationContext.ObjectInstance;
            var type = item?.Type;

            if (type != null && !ModelValidationParameters.ClothesTypes.Contains(type))
                return new ValidationResult("The invalid clothes type!");

            return ValidationResult.Success;
        }

    }
}

