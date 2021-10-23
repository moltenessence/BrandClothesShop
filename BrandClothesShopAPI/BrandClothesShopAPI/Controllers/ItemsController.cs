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

namespace BrandClothesShopAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly ClothesShopContext _context;
        public ItemsController(ClothesShopContext context)
        {
            _context = context;
        }

        [HttpGet("{type}")]
        public async Task<ActionResult> GetItems(int page, int count, string type)
        {
            if (page <= 0 || count <= 0)
                return BadRequest("The parameters are invalid!");

            var totalAmount = _context.ClothesItems.Where(i => i.Type == type).Count();
            var amountToSkip = page == 1 ? 0 : (page - 1) * count;

            //if (count * page > totalAmount)
            //    return BadRequest($"The number of items to take is out of range! Total amount of items of type '{type}' = {totalAmount}");

            var clothesItems = await _context.ClothesItems.Where(i => i.Type == type)
                                                          .Include("Photos")
                                                          .Skip(amountToSkip)
                                                          .Take(count)
                                                          .ToListAsync();

            var responsesStatusCode = Response.StatusCode;

            var result = new
            {
                items = clothesItems,
                total = totalAmount,
                statusCode = responsesStatusCode,
            };

            return new JsonResult(result);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetItemById(int id)
        {
            var photos = await _context.Photos.ToListAsync();
            var currentItem = await _context.ClothesItems.FindAsync(id);
            var responseStatusCode = Response.StatusCode;

            if (currentItem == null)
                return NotFound($"There is no item with id = {id}");

            var result = new
            {
                item = currentItem,
                statusCode = responseStatusCode
            };

            return new JsonResult(result);
        }
    }
}
