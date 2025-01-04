type Recipe = { id: string; title: string; description: string; steps: RecipeStep[] };

type AddRecipeModel = { title: string, description: string, steps: RecipeStep[] }

type RecipeStep = { details: string }