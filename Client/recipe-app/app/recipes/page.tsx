import Recipe from "../lib/models/recipe";
import { fetchRecipes } from "../lib/webApi";
import styles from '@/app/ui/styles/recipes.module.css';
import RecipeList from "./recipe-list";
import RecipeActions from "./recipe-actions";

export default async function Recipes() {
    const recipes: Recipe[] = await fetchRecipes();
    console.log(recipes);
    return (
      <>
        <div className={styles.recipes_page}>
          <div className={styles.recipes_menu}></div>
          <RecipeList recipes={recipes}></RecipeList>
          <RecipeActions></RecipeActions>
        </div>
      </>
    );
  }