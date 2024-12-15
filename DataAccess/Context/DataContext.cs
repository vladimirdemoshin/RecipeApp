using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Context
{
    public class DataContext : DbContext
    {
        public DbSet<RecipeEntity> Recipes { get; set; }

        public DataContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string connectionString = "todo";
            optionsBuilder.UseSqlServer(connectionString);
        }
    }
}
