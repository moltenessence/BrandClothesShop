using Microsoft.AspNetCore.Mvc;
using BrandClothesShopAPI.Services;
using System;
using System.Threading.Tasks;
using Core.Models;
using Microsoft.Extensions.Logging;

namespace BrandClothesShopAPI.Controllers
{
    /// <summary>
    /// This controller manages all the operations with users and their accounts.
    /// </summary>
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

        /// <summary>
        /// This Method allows to register a new user in case if
        /// the user hadn't created an account before. It loggs successfull registration.
        /// </summary>
        /// <param name="user"></param>
        /// <returns>Email, Username</returns>
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

        /// <summary>
        /// This Method is responsible for user authentication. It checks if the user exists in DB and 
        /// in case of successfull authentication generates Access JWT Token (expiration time is 5 minutes)
        /// and Refresh Token. The method also loggs successfull cases of authentication.
        /// </summary>
        /// <param name="user"></param>
        /// <response code="401">Invalid email or password</response>
        /// <returns></returns>
        [HttpPost("Authenticate")]
        public async Task<IActionResult> Authenticate(AuthenticateRequest user)
        {
            var authenticateResponse = await _userService.Authenticate(user);

            if (authenticateResponse == null)
                return Unauthorized("Invalid email or password!");

            _logger.LogInformation($"[{DateTime.Now}]:The user {user.Email} logged in.");

            return Ok(authenticateResponse);
        }

        /// <summary>
        /// Generates new pair of tokens if the Access Token is expired and valid.
        /// </summary>
        /// <response code="400">The token is invalid</response>
        /// <response code="500">Internal server error</response>
        /// <param name="tokenRequest"></param>
        /// <returns>Access Token, Refresh Token</returns>
        [HttpPost]
        [Route("Refresh-Token")]
        public async Task<IActionResult> RefreshToken(UpdateTokenRequest tokenRequest)
        {
            var result = await _tokenService.ValidateAndUpdateTokenAsync(tokenRequest);

            return new OkObjectResult(result);
        }

        /// <summary>
        /// Validates the expiration time of current access token.
        /// </summary>
        /// <response code="500">Internal server error</response>
        /// <response code="400">The token is invalid</response>
        ///  <response code="403">The token is expired</response>
        /// <param name="tokenRequest"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Validate-Token")]
        public IActionResult ValidateToken(TokenRequest tokenRequest)
        {
            var result = _tokenService.ValidateToken(tokenRequest);

            return new OkObjectResult(result);
        }
        /// <summary>
        /// The GET Method which allows to see the list of all the accounts.
        /// </summary>
        /// <returns>The list of Users</returns>
        [HttpGet("Users")]
        public IActionResult GetAllUsers()
        {
            var users = _userService.GetAll();

            return Ok(users);
        }
    }

          
}
