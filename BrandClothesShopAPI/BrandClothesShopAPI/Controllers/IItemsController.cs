using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BrandClothesShopAPI.Controllers
{
    public interface IItemsController
    {
        Task<ActionResult> GetItemById(int id);
        Task<ActionResult> GetItems(int page, int count, string type);
    }
}