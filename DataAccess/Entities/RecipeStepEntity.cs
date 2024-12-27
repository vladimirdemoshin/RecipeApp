using System.ComponentModel.DataAnnotations;

namespace DataAccess.Entities
{
    public class RecipeStepEntity
    {
        [Key]
        public int RecipeId { get; set; }

        [Key]
        public int StepIndex { get; set; }

        public string Details { get; set; } = string.Empty;

        public RecipeEntity Recipe { get; set; }
    }
}
