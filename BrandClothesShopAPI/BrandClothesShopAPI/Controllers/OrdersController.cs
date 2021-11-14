using BrandClothesShopAPI.Models;
using DataStore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Core.ModelValidations;
using Core.Models;

namespace BrandClothesShopAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController
    {
        private readonly ClothesShopContext _context;
        public OrdersController(ClothesShopContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpPost("Purchase")]
        public async Task<IActionResult> Order(OrderRequest orderRequest)
        {
            if (orderRequest.ItemId <= 0 || orderRequest.UserId <= 0 || !ModelValidationParameters.Sizes.Contains(orderRequest.Size.ToLower()))
                return new BadRequestResult();

            var user = _context.Users.Find(orderRequest.UserId);
            var item = _context.ClothesItems.Find(orderRequest.ItemId);

            if (user == null || item == null)
                return new NotFoundObjectResult("There is no such user or item!");


            var order = await _context.Orders.AddAsync(new Order
            {
                UserId = orderRequest.UserId,
                ClothesItemId = orderRequest.ItemId,
                PurchaseTime = DateTime.Now,
                Price = (decimal)item.Price,
                Size = orderRequest.Size,
                Name = item.ModelName,
            });
             
            await _context.SaveChangesAsync();

            return new OkObjectResult(user.Orders.Last());
        }

        [Authorize]
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetOrders(int userId)
        {
            var allOrders = await _context.Orders.ToListAsync();

            if (userId <= 0)
                return new BadRequestResult();

            if (_context.Users.Find(userId) == null)
                return new NotFoundObjectResult("There is no such a user!");

            var userOrders = _context.Orders.Where(c => c.UserId == userId);

            if (userOrders == null) return new OkObjectResult("Your Order List is empty!");

            return new OkObjectResult(userOrders);
        }

    }
}
