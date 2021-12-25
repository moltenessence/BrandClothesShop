using BrandClothesShopAPI.Models;
using DataStore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Helpers;
using Newtonsoft.Json;
using Core.ModelValidations;

namespace BrandClothesShopAPI.Controllers
{
    /// <summary>
    /// This controller is used for getting all the information about items in catalog for their view on the client side.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly ClothesShopContext _context;
        public ItemsController(ClothesShopContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Returns all the items from the DataBase.
        /// </summary>
        /// <param name="page"></param>
        /// <param name="count"></param>
        /// <param name="type"></param>
        /// <returns>List of Items</returns>
        [HttpGet("{type}")]
        public async Task<ActionResult> GetItems(int page, int count, string type)
        {
            if (!ModelValidationParameters.ClothesTypes.Contains(type)) return NotFound($"There is no such type as {type}!");
            if (page <= 0 || count <= 0)
                return BadRequest("The parameters are invalid!");

            var totalAmount = _context.ClothesItems.Where(i => i.Type == type).Count();
            var amountToSkip = page == 1 ? 0 : (page - 1) * count;

            if (page*count - count > totalAmount)
                return BadRequest($"The number of items to take is out of range! Total amount of items of type '{type}' = {totalAmount}.");

            var clothesItems = await _context.ClothesItems.AsNoTracking()
                                                          .Where(i => i.Type == type)
                                                          .Include("Photos")
                                                          .Skip(amountToSkip)
                                                          .Take(count)
                                                          .ToListAsync();

            var result = new
            {
                items = clothesItems,
                total = totalAmount,
            };

            return Ok(result);
        }
        /// <summary>
        /// Returns current item by its ID.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Item</returns>
        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetItemById(int id)
        {
            if (id < 0) return BadRequest();

            await _context.Photos.AsNoTracking().ToListAsync();
            var currentItem = await _context.ClothesItems.FindAsync(id);

            if (currentItem == null)
                return NotFound($"There is no item with id = {id}");

            var result = new
            {
                item = currentItem,
            };

            return Ok(result);
        }
    }
}
