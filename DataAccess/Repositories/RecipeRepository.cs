using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories
{
    public class RecipeRepository
    {
        public async Task<IEnumerable<RecipeEntity>> GetAllAsync()
        {
            using var context = new DataContext();
            var recipes = await context.Recipes.ToListAsync();
            return recipes;
        }
    }
}
