using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrandClothesShopAPI.Controllers
{
    interface ICartController
    {
        Task<ActionResult> AddItemIntoCart(int id);
        Task<ActionResult> DeleteItemFromCart(int id);
        Task<ActionResult> GetAllItemsFromCart();
    }
}
