using BrandClothesShopAPI.Models;
using Core.Models;
using Core.ModelValidations;
using DataStore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace BrandClothesShopAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private readonly ClothesShopContext _context;
        public CartController(ClothesShopContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpPost("Add")]
        public async Task<ActionResult> AddItemIntoCart(CartRequest cartRequest)
        {
            if (cartRequest.ItemId <= 0 || cartRequest.UserId <= 0 || !ModelValidationParameters.Sizes.Contains(cartRequest.Size.ToLower()))
                return BadRequest();

            var user = await _context.Users.FindAsync(cartRequest.UserId);
            var item = await _context.ClothesItems.FindAsync(cartRequest.ItemId);

            if (user == null || item == null)
                return NotFound("There is no such user or item!");

            var userCartItems = _context.CartItems.AsNoTracking().Where(i => i.UserId == cartRequest.UserId).ToList();

            if (userCartItems.Where(i => i.ItemId == cartRequest.ItemId).Any()) return BadRequest("There is such item in the Cart!");

            _context.Photos.AsNoTracking().ToList();

            await _context.CartItems.AddAsync(new CartItem
            {
                UserId = cartRequest.UserId,
                Price = item.Price,
                Size = cartRequest.Size,
                Name = item.ModelName,
                PhotoUrl = item.Photos.FirstOrDefault().URL
            });

            await _context.SaveChangesAsync();

            return Ok("The item was successfully added into the cart!");
        }

        [Authorize]
        [HttpGet("{userId}")]
        public ActionResult GetItemsFromCart(int userId)
        {
            if (userId <= 0) return BadRequest("Invalid Pearameters!");
            if (_context.Users.Find(userId) == null) return NotFound("The user doesn't exist!");

            var userCartItems = _context.CartItems.Include("Photos").AsNoTracking().Where(i => i.UserId == userId).ToList();

            if (userCartItems.Count() == 0) return Ok("Your Cart is empty!");

            return Ok(userCartItems);
        }

        [Authorize]
        [HttpDelete("Delete")]
        public async Task<ActionResult> DeleteItemsFromCart(int userId, int itemId)
        {
            if (itemId <= 0 || userId <= 0) return BadRequest();

            var user = await _context.Users.FindAsync(userId);

            if (user == null) return NotFound("There is no such user!");

            var userCartItems = _context.CartItems.Where(i => i.UserId == userId).ToList();
            var itemToRemove = userCartItems.Where(i => i.ItemId == itemId).SingleOrDefault();

            if (itemToRemove==null) return BadRequest("There no such item in the Cart!");

            _context.CartItems.Remove(itemToRemove);
            await _context.SaveChangesAsync();

            return Ok("The item was deleted successfully!");

        }
    }
}
