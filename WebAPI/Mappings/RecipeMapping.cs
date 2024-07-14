using DataAccess.Entities;
using RecipeApp.WebAPI.Models;

namespace RecipeApp.WebAPI.Mappings
{
    public static class RecipeMapping
    {
        public static RecipeModel MapFrom(RecipeEntity recipeEntity)
        {
            return new RecipeModel(recipeEntity.RecipeId, recipeEntity.Title);
        }
    }
}
