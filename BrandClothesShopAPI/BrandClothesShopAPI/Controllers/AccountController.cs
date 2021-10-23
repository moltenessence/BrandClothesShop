using BrandClothesShopAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using BrandClothesShopAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Models;
using Microsoft.AspNetCore.Cors;

namespace BrandClothesShopAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IUserService _userService;

        public AccountController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegistrationModel user)
        {
            var registrationResponse = await _userService.Register(user);

            if (registrationResponse == null)
            {
                return new UnprocessableEntityObjectResult("The user with such email already exists!");
            }

            var response = new
            {
                RegistrationResponse = registrationResponse,
                StatusCode = Response.StatusCode
            };

            return new JsonResult(response);
        }

        [HttpPost("Authenticate")]
        public async Task<IActionResult> Authenticate(AuthenticateRequest user)
        {
            var authenticateResponse = await _userService.Authenticate(user);

            if (authenticateResponse == null)
                return BadRequest("Invalid email or password!");

            var response = new
            {
                AuthenticateResponse = authenticateResponse,
                StatusCode = Response.StatusCode
            };

            return new JsonResult(response);
        }

        [HttpGet("GetAll")]
        public IActionResult GetAllUsers()
        {
            var users = _userService.GetAll();

            var response = new
            {
                Items = users,
                StatusCode = Response.StatusCode
            };

            return new JsonResult(response);
        }
    }
}
