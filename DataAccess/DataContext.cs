using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

public class DataContext : DbContext
{
    public DbSet<RecipeEntity> Recipes { get; set; }

    public DataContext()
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        string connectionString = "Server=localhost\\SQLEXPRESS02;Database=RecipeApp;Trusted_Connection=True;";
        optionsBuilder.UseSqlServer(connectionString);
    }
}