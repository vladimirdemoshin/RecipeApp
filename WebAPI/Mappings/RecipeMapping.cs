using DataAccess.Entities;
using WebAPI.Models;

namespace WebAPI.Mappings
{
    public static class RecipeMapping
    {
        public static RecipeModel MapFrom(RecipeEntity recipeEntity)
        {
            return new RecipeModel(recipeEntity.RecipeId, recipeEntity.Title);
        }

        public static RecipeEntity MapFrom(AddRecipeModel recipeModel)
        {
            return new RecipeEntity
            {
                Title = recipeModel.Title,
            };
        }
    }
}
