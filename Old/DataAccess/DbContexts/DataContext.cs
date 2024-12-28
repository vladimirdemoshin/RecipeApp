using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.DbContexts
{
    public class DataContext : DbContext
    {
        public DbSet<RecipeEntity> Recipes { get; set; }

        public DataContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string connectionString = "Server=localhost\\SQLEXPRESS02;Database=RecipeApp;uid=RecipeApp;Password=12345678;Encrypt=false";
            optionsBuilder.UseSqlServer(connectionString);
        }
    }
}