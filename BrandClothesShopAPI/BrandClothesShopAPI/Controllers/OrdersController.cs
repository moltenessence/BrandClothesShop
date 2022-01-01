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
    /// <summary>
    /// This controller allows to make orders. There aren't any transactions, just imitation of
    /// order and its influence on DataBase.
    /// </summary>
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

        /// <summary>
        /// This Method adds item into user's OrderList. It also loggs the information about the purchase.
        /// </summary>
        /// <param name="orderRequest"></param>
        /// <response code="400">Invalid request parameters</response>
        /// <response code="404">The user or item doesn't exist</response>
        /// <returns></returns>
        [Authorize]
        [HttpPost("Purchase")]
        public async Task<IActionResult> Order(OrderRequest orderRequest)
        {
            if (orderRequest.ItemId <= 0 || orderRequest.UserId <= 0 || !ModelValidationParameters.Sizes.Contains(orderRequest.Size.ToLower()))
                return new BadRequestObjectResult("The Parameters are invalid!");

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

        /// <summary>
        /// GET Method which shows current user's Order List.
        /// </summary>
        /// <param name="userId"></param>
        /// <response code="400">Invalid request parameters</response>
        /// <response code="204">Order List is empty</response>
        /// <returns>The list of orders</returns>
        [Authorize]
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetOrders(int userId)
        {
            if (userId <= 0)
                return new BadRequestObjectResult("The parameters are invalid!");

            var allOrders = await _context.Orders.AsNoTracking().ToListAsync();

            if (_context.Users.Find(userId) == null)
                return new NotFoundObjectResult("There is no such a user!");

            var userOrders =  allOrders.Where(c => c.UserId == userId);

            if (userOrders.Count() == 0) return new NoContentResult();

            return new OkObjectResult(userOrders);
        }

    }
}
