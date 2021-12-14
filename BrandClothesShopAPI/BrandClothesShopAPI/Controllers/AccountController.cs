using BrandClothesShopAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using BrandClothesShopAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Models;
using Microsoft.Extensions.Logging;

namespace BrandClothesShopAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ITokenService _tokenService;
        private readonly ILogger<AccountController> _logger;
        public AccountController(IUserService userService, ITokenService tokenService, ILogger<AccountController> logger)
        {
            _userService = userService;
            _tokenService = tokenService;
            _logger = logger;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegistrationModel user)
        {
            var registrationResponse = await _userService.Register(user);

            if (registrationResponse == null)
            {
                return new UnprocessableEntityObjectResult("The user with such email already exists!");
            }

            _logger.LogInformation($"[{DateTime.Now}]:The user with e-mail {user.Email} created account.");

            return Ok(registrationResponse);
        }

        [HttpPost("Authenticate")]
        public async Task<IActionResult> Authenticate(AuthenticateRequest user)
        {
            var authenticateResponse = await _userService.Authenticate(user);

            if (authenticateResponse == null)
                return BadRequest("Invalid email or password!");

            _logger.LogInformation($"[{DateTime.Now}]:The user {user.Email} logged in.");

            return Ok(authenticateResponse);
        }

        [HttpPost]
        [Route("Refresh-Token")]
        public async Task<IActionResult> RefreshToken(UpdateTokenRequest tokenRequest)
        {
            var result = await _tokenService.ValidateAndUpdateTokenAsync(tokenRequest);

            return new ObjectResult(result);
        }

        [HttpPost]
        [Route("Validate-Token")]
        public IActionResult ValidateToken(TokenRequest tokenRequest)
        {
            var result = _tokenService.ValidateToken(tokenRequest);

            return new ObjectResult(result);
        }

        [HttpGet("Users")]
        public IActionResult GetAllUsers()
        {
            var users = _userService.GetAll();

            return Ok(users);
        }
    }

          
}
