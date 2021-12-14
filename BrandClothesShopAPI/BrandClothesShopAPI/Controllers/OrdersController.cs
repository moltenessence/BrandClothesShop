using BrandClothesShopAPI.Models;
using DataStore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Core.ModelValidations;
using Core.Models;
using Microsoft.Extensions.Logging;

namespace BrandClothesShopAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController
    {
        private readonly ClothesShopContext _context;
        private readonly ILogger<AccountController> _logger;
        public OrdersController(ClothesShopContext context, ILogger<AccountController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [Authorize]
        [HttpPost("Purchase")]
        public async Task<IActionResult> Order(OrderRequest orderRequest)
        {
            if (orderRequest.ItemId <= 0 || orderRequest.UserId <= 0 || !ModelValidationParameters.Sizes.Contains(orderRequest.Size.ToLower()))
                return new BadRequestResult();

            var user = await _context.Users.FindAsync(orderRequest.UserId);
            var item = await _context.ClothesItems.FindAsync(orderRequest.ItemId);

            if (user == null || item == null)
                return new NotFoundObjectResult("There is no such user or item!");


            await _context.Orders.AddAsync(new Order
            {
                UserId = orderRequest.UserId,
                ClothesItemId = orderRequest.ItemId,
                PurchaseTime = DateTime.Now,
                Price = (decimal)item.Price,
                Size = orderRequest.Size,
                Name = item.ModelName,
            });
             
            await _context.SaveChangesAsync();
            _logger.LogInformation($"[{DateTime.Now}]:The user {user.Email} ordered {item.ModelName} for {item.Price} euros.");

            return new OkObjectResult(user.Orders.Last());
        }

        [Authorize]
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetOrders(int userId)
        {
            if (userId <= 0)
                return new BadRequestResult();

            var allOrders = await _context.Orders.AsNoTracking().ToListAsync();

            if (_context.Users.Find(userId) == null)
                return new NotFoundObjectResult("There is no such a user!");

            var userOrders =  allOrders.Where(c => c.UserId == userId);

            if (userOrders.Count() == 0) return new OkObjectResult("Your Order List is empty!");

            return new OkObjectResult(userOrders);
        }

    }
}
