namespace WebAPI.Models
{
    public record RecipeModel(int Id, string Title, IEnumerable<RecipeStepModel> Steps);
}
