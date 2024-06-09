import RecipeList from "@/app/ui/recipe-list";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense>
          <RecipeList/>
      </Suspense>
    </>
  );
}
