using DataAccess.Entities;
using WebAPI.Models;

namespace WebAPI.Mappings
{
    public static class RecipeStepMapping
    {
        public static RecipeStepEntity MapFrom(int stepIndex, RecipeStepModel recipeModel)
        {
            return new RecipeStepEntity
            {
                StepIndex = stepIndex,
                Details = recipeModel.Details,
            };
        }
    }
}
