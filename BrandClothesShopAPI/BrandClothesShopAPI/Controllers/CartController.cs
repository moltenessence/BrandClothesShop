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
    //This controller allows to manage users' carts.
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private readonly ClothesShopContext _context;
        public CartController(ClothesShopContext context)
        {
            _context = context;
        }
        /// <summary>
        /// The method is available only for authorized users. It adds the item into personal cart.
        /// </summary>
        /// <param name="cartRequest"></param>
        /// <response code="400">Invalid request parameters</response>
        ///<response code="404">Item or user doesn't exist</response>
        /// <returns></returns>
        [Authorize]
        [HttpPost("Add")]
        public async Task<ActionResult> AddItemIntoCart(CartRequest cartRequest)
        {
            if (cartRequest.ItemId <= 0 || cartRequest.UserId <= 0 || !ModelValidationParameters.Sizes.Contains(cartRequest.Size.ToLower()))
                return BadRequest("The parameters are invalid!");

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

            return Ok();
        }

        /// <summary>
        /// This method allows to GET all the items for a current user by his ID.
        /// It is available only for authorized users.
        /// </summary>
        /// <response code="400">Invalid request parameters</response>
        ///<response code="404">The user doesn't exist</response>
        ///<response code="204">Cart is empty</response>
        /// <param name="userId"></param>
        /// <returns>User's Cart Items</returns>
        [Authorize]
        [HttpGet("{userId}")]
        public ActionResult GetItemsFromCart(int userId)
        {
            if (userId <= 0) return BadRequest("Invalid Parameters!");
            if (_context.Users.Find(userId) == null) return NotFound("The user doesn't exist!");

            var userCartItems = _context.CartItems.Include("Photos").AsNoTracking().Where(i => i.UserId == userId).ToList();

            if (userCartItems.Count() == 0) return NoContent();

            return Ok(userCartItems);
        }

        /// <summary>
        /// This DELETE Method allow user to drop the item off his cart.
        /// The usage of IDs helps to define the user's cart and the definite
        /// item to drop.
        /// </summary>
        /// <response code="400">Invalid request parameters</response>
        /// <response code="404">The user doesn't exist or there is not such item in the cart</response>
        /// <param name="userId"></param>
        /// <param name="itemId"></param>
        /// <returns></returns>
        [Authorize]
        [HttpDelete("Delete")]
        public async Task<ActionResult> DeleteItemsFromCart(int userId, int itemId)
        {
            if (itemId <= 0 || userId <= 0) return BadRequest();

            var user = await _context.Users.FindAsync(userId);

            if (user == null) return NotFound("There is no such user!");

            var userCartItems = _context.CartItems.Where(i => i.UserId == userId).ToList();
            var itemToRemove = userCartItems.Where(i => i.ItemId == itemId).SingleOrDefault();

            if (itemToRemove==null) return NotFound("There no such item in the Cart!");

            _context.CartItems.Remove(itemToRemove);
            await _context.SaveChangesAsync();

            return Ok();

        }
    }
}
