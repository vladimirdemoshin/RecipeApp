import Recipe from "@/app/lib/models/recipe";
import { fetchRecipe } from "@/app/lib/webApi";

export default async function RecipePage({params}: {params: {recipeId: string}}) {
    const recipe: Recipe = await fetchRecipe(params.recipeId);
    return (
        <div>
            {JSON.stringify(recipe)}
        </div>
    );
}