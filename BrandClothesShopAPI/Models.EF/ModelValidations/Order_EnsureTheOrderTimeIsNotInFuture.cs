using BrandClothesShopAPI.Models;
using System;
using System.ComponentModel.DataAnnotations;

namespace Core.ModelValidations
{
    public class Order_EnsureTheOrderTimeIsNotInFuture : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var order = (Order)validationContext.ObjectInstance;
            var purchaseTime = order?.PurchaseTime;

            if (purchaseTime != null && purchaseTime > DateTime.Now)
                return new ValidationResult("The purchase can't be made in future");

            return ValidationResult.Success;
        }
    }
}
