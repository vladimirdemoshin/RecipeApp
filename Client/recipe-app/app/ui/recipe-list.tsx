import Recipe from "@/app/lib/models/recipe";
import { fetchRecipes } from "@/app/lib/webApi";

export default async function RecipeList() {
    const data: Recipe[] = await fetchRecipes();
    return (
        <>
            {
                data.map(r =>
                    <div>{r.title}</div>
                )
            }
        </>
    );
}