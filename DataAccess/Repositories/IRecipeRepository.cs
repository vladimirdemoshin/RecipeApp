using DataAccess.Entities;

namespace DataAccess.Repositories
{
    public interface IRecipeRepository
    {
        Task<IEnumerable<RecipeEntity>> GetAllAsync();

        Task<RecipeEntity?> GetAsync(int id);

        Task AddAsync(RecipeEntity entity);
    }
}
