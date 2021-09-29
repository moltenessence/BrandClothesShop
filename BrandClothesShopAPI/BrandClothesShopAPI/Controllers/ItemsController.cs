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
    public class  ItemsController : ControllerBase
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

            var itemsCount = _context.ClothesItems.Where(i => i.Type == type).Count();
            var amountToSkip = page == 1 ? 0 : page * count;
            var amountToTake = count - amountToSkip;

            if (amountToSkip >= itemsCount || count > amountToTake) 
                return BadRequest("The number of item need to take is out of range!");

            var clothesItems = await _context.ClothesItems.Where(i=> i.Type==type)
                                                          .Include("Photos")
                                                          .Skip(amountToSkip)
                                                          .Take(amountToTake)
                                                          .ToListAsync();

            var responsesStatusCode = Response.StatusCode;

            var result = new
            {
                items = clothesItems,
                total = itemsCount,
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
