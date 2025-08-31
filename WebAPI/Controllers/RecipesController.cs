using DataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Mappings;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/v1/recipes")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly IRecipeRepository _recipeRepository;

        public RecipesController(IRecipeRepository recipeRepository)
        {
            _recipeRepository = recipeRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<RecipeModel>> GetAllAsync()
        {
            var user = HttpContext.User;
            var entities = await _recipeRepository.GetAllAsync();
            var data = entities.Select(e => RecipeMapping.MapFrom(e)).ToList();
            return data;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync([FromRoute] int id)
        {
            var entity = await _recipeRepository.GetAsync(id);
            var data = RecipeMapping.MapFrom(entity, true);
            return Ok(data);
        }

        [HttpPost("add")]
        public async Task<IActionResult> PostAsync([FromBody] AddRecipeModel model)
        {
            var entity = RecipeMapping.MapFrom(model);
            await _recipeRepository.AddAsync(entity);
            return Ok();
        }
    }
}