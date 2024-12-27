type Recipe = { id: string; title: string;};

type AddRecipeModel = { title: string, description: string, steps: RecipeStep[] }

type RecipeStep = { details: string }