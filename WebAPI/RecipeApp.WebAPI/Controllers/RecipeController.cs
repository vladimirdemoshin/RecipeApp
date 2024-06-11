using Microsoft.AspNetCore.Mvc;
using RecipeApp.WebAPI.Models;

namespace RecipeApp.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        [HttpGet(Name = "GetRecipes")]
        public IEnumerable<RecipeModel> Get()
        {
            return new List<RecipeModel>()
            {
                new RecipeModel("1", "Pizza"),
                new RecipeModel("2", "Pasta with salmon"),
            };
        }

        [HttpPost(Name = "AddRecipes")]
        public async Task<OkResult> PostAsync()
        {
            return await Task.FromResult(Ok());
        }
    }
}
