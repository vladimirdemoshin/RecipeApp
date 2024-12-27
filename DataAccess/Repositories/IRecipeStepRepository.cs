using DataAccess.Entities;

namespace DataAccess.Repositories
{
    public interface IRecipeStepRepository
    {
        Task AddAsync(RecipeStepEntity[] steps);
    }
}
