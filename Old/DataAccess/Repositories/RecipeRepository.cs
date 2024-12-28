using DataAccess.DbContexts;
using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories
{
    public class RecipeRepository : IRecipeRepository
    {
        public async Task<IEnumerable<RecipeEntity>> GetAllAsync()
        {
            using var context = new DataContext();
            var recipes = await context.Recipes.ToListAsync();
            return recipes;
        }

        public async Task<RecipeEntity?> GetAsync(int id)
        {
            using var context = new DataContext();
            var recipe = await context.Recipes.FindAsync(id);
            return recipe;
        }

        public async Task AddAsync(RecipeEntity entity)
        {
            using var context = new DataContext();
            await context.Recipes.AddAsync(entity);
            context.SaveChanges();
        }
    }
}
