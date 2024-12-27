using System.ComponentModel.DataAnnotations;

namespace DataAccess.Entities
{
    public class RecipeEntity
    {
        [Key]
        public int RecipeId { get; set; }

        public string Title { get; set; }

        public ICollection<RecipeStepEntity> Steps { get; set; }
    }
}
