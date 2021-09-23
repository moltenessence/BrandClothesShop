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

        [HttpGet]
        public async Task<ActionResult> GetItems(int page, int count)
        {
            if (page <= 0 || count <= 0) 
                return BadRequest("The parameters are invalid!");

            var totalCount = _context.ClothesItems.Count();
            var amountToSkip = page == 1 ? 0 : page * count;
            var amountToTake = totalCount - amountToSkip;

            if (amountToSkip >= totalCount || amountToTake >= totalCount) 
                return BadRequest("The number of item need to take is out of range");

            var clothesItems = await _context.ClothesItems.Skip(amountToSkip)
                                                          .Take(amountToTake)
                                                          .ToListAsync();
            var responsesStatusCode = Response.StatusCode;

            var result = new {
                items = clothesItems, statusCode = responsesStatusCode, total = totalCount
            };

            return new JsonResult(result);
        }

    }
}
