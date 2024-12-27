using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Context
{
    public class DataContext : DbContext
    {
        public DbSet<RecipeEntity> Recipes { get; set; }

        public DbSet<RecipeStepEntity> RecipeSteps { get; set; }

        public DataContext()
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RecipeEntity>()
                .HasKey(c => new { c.RecipeId });

            modelBuilder.Entity<RecipeStepEntity>()
                .HasKey(c => new { c.RecipeId, c.StepIndex });

            modelBuilder.Entity<RecipeEntity>()
                .HasMany(p => p.Steps)
                .WithOne(c => c.Recipe)
                .HasForeignKey(c => c.RecipeId);

            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string connectionString = "todo";
            optionsBuilder.UseSqlServer(connectionString);
        }
    }
}
