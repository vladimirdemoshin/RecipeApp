namespace WebAPI.Models
{
    public record RecipeModel(int Id, string Title, string Description, IEnumerable<RecipeStepModel> Steps);
}
