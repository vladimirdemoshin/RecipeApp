using Contract.Options;
using DataAccess.Context;
using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace DataAccess.Repositories
{
    public class RecipeRepository(IOptions<DataAccessOptions> dataAccessOptions) : IRecipeRepository
    {
        private readonly string _connectionString = dataAccessOptions.Value.ConnectionString;

        public async Task<IEnumerable<RecipeEntity>> GetAllAsync()
        {
            using var context = new DataContext(_connectionString);
            var recipes = await context.Recipes.ToListAsync();
            return recipes;
        }

        public async Task<RecipeEntity> GetAsync(int id)
        {
            using var context = new DataContext(_connectionString);
            var recipe = await context.Recipes
                .Where(r => r.RecipeId == id)
                .Include(r => r.Steps)
                .FirstAsync();
            return recipe;
        }

        public async Task AddAsync(RecipeEntity entity)
        {
            using var context = new DataContext(_connectionString);
            await context.Recipes.AddAsync(entity);
            context.SaveChanges();
        }
    }
}
