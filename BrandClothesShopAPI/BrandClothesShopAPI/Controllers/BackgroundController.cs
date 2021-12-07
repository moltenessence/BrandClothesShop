using Microsoft.AspNetCore.Mvc;

namespace BrandClothesShopAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BackgroundController : ControllerBase
    {
        private const string homepageUrl = "https://sun9-85.userapi.com/impg/2HS1bcEIwKWLNh113oVCMc1wd7qSGiCb58qN3w/4W97P3gZzao.jpg?size=959x1280&quality=96&sign=c5daa24b22e0b09f99e550d63feb663a&type=album";

        [HttpGet("Homepage")]
        public ActionResult GetHomepageImageUrl() => new OkObjectResult(homepageUrl);
    }
}
