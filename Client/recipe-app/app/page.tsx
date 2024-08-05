import { fetchRecipes } from "./lib/webApi";
import Recipe from "./lib/models/recipe";
import Link from "next/link";

export default async function Home() {
  //const recipes: Recipe[] = await fetchRecipes();
  //console.log(recipes);
  return (
    <>
      <div>
        <Link href="recipes">
          Check all recipes
        </Link>
      </div>
    </>
  );
}
