using DataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;
using RecipeApp.WebAPI.Mappings;
using RecipeApp.WebAPI.Models;

namespace RecipeApp.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        [HttpGet(Name = "GetRecipes")]
        public async Task<IEnumerable<RecipeModel>> GetAsync()
        {
            var repository = new RecipeRepository();
            var entities = await repository.GetAllAsync();
            var data = entities.Select(RecipeMapping.MapFrom).ToList();
            return data;

            //return new List<RecipeModel>()
            //{
            //    new RecipeModel("1", "Pizza"),
            //    new RecipeModel("2", "Pasta with salmon"),
            //};
        }

        [HttpGet(Name = "GetRecipe")]
        public RecipeModel Get(int id)
        {
            return new RecipeModel(id, "Test");
        }

        [HttpPost(Name = "AddRecipes")]
        public async Task<OkResult> AddAsync(RecipeModel model)
        {
            return await Task.FromResult(Ok());
        }

        [HttpPost(Name = "DeleteRecipe")]
        public async Task<OkResult> Delete(RecipeModel model)
        {
            return await Task.FromResult(Ok());
        }
    }
}
