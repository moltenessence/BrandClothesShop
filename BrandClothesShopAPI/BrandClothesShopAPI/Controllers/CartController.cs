using BrandClothesShopAPI.Models;
using DataStore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrandClothesShopAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase, ICartController
    {
        private readonly ClothesShopContext _context;
        public CartController(ClothesShopContext context)
        {
            _context = context;
        }

        [HttpPut]
        public async Task<ActionResult> AddItemIntoCart(int id)
        {

        }

        public Task<ActionResult> DeleteItemFromCart(int id)
        {
            
        }

        public Task<ActionResult> GetAllItemsFromCart()
        {
           
        }
    }
}
