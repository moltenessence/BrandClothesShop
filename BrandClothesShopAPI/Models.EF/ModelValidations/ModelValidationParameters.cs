using System;
using System.Collections.Generic;
using System.Text;

namespace Core.ModelValidations
{
    public static class ModelValidationParameters
    {
        public static List<string> ClothesTypes = new List<string>()
        {
            "sport", "t-shirt", "shoes", "pants", "shirt", "hoodie"
        };

        public static List<string> Sizes = new List<string>()
        {
            "s", "m", "l", "xl", "xxl", "xs", "8.5", "6", "6.5", "7","7.5","8","9","9.5","10","10.5","11","11.5","12","12.5"
        };
    }
}
