import Recipe from "../lib/models/recipe";
import { fetchRecipes } from "../lib/webApi";
import RecipeList from "./recipe-list";

export default async function Recipes() {
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