using BrandClothesShopAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using BrandClothesShopAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Models;

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

            return Ok(registrationResponse);
        }

        [HttpPost("Authenticate")]
        public async Task<IActionResult> Authenticate(AuthenticateRequest user)
        {
            var authenticateResponse = await _userService.Authenticate(user);

            if (authenticateResponse == null)
                return BadRequest("Invalid email or password!");

            return new JsonResult(authenticateResponse);
        }

        [HttpGet("GetAll")]
        public IActionResult GetAllUsers()
        {
            var users = _userService.GetAll();

            return Ok(users);
        }
    }
}
