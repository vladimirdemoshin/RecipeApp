import RecipeList from "@/app/ui/recipe-list";
import { fetchRecipes } from "./lib/webApi";
import Recipe from "./lib/models/recipe";

export default async function Home() {
  const recipes: Recipe[] = await fetchRecipes();
  console.log(recipes);
  return (
    <>
      <div>
        <RecipeList recipes={recipes}></RecipeList>
      </div>
    </>
  );
}
