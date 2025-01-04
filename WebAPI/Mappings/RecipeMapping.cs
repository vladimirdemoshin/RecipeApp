using DataAccess.Entities;
using WebAPI.Models;

namespace WebAPI.Mappings
{
    public static class RecipeMapping
    {
        public static RecipeModel MapFrom(RecipeEntity recipeEntity, bool includeSteps = false)
        {
            var steps = includeSteps ? recipeEntity.Steps
                .OrderBy(s => s.StepIndex)
                .Select(RecipeStepMapping.MapFrom)
                .ToArray() : [];
            return new RecipeModel(recipeEntity.RecipeId, recipeEntity.Title, recipeEntity.Description, steps);
        }

        public static RecipeEntity MapFrom(AddRecipeModel recipeModel)
        {
            var steps = new List<RecipeStepEntity>();
            var stepModels = recipeModel.Steps;
            for (int index = 0; index < stepModels.Length; index++)
            {
                steps.Add(RecipeStepMapping.MapFrom(index, stepModels[index]));
            }

            return new RecipeEntity
            {
                Title = recipeModel.Title,
                Description = recipeModel.Description,
                Steps = steps,
            };
        }
    }
}
