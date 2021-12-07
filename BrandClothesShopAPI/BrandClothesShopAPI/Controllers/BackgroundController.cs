using Microsoft.AspNetCore.Mvc;

namespace BrandClothesShopAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BackgroundController : ControllerBase
    {
        private const string homepageUrl = "vk.com";

        [HttpGet("Homepage")]
        public ActionResult GetHomepageImageUrl() => new OkObjectResult(homepageUrl);
    }
}
