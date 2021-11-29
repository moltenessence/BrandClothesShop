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
        private readonly ITokenService _tokenService;

        public AccountController(IUserService userService, ITokenService tokenService)
        {
            _userService = userService;
            _tokenService = tokenService;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegistrationModel user)
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

            return Ok(authenticateResponse);
        }

        [HttpPost]
        [Route("Refresh-Token")]
        public IActionResult RefreshToken(UpdateTokenRequest tokenRequest)
        {
            var result = _tokenService.ValidateAndUpdateToken(tokenRequest);

            return new ObjectResult(result);
        }

        [HttpPost]
        [Route("Validate-Token")]
        public IActionResult ValidateToken(TokenRequest tokenRequest)
        {
            var result = _tokenService.ValidateToken(tokenRequest);

            return new ObjectResult(result);
        }

        [HttpGet("GetAll")]
        public IActionResult GetAllUsers()
        {
            var users = _userService.GetAll();

            return Ok(users);
        }
    }

          
}
