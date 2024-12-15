import React, { useEffect, useState } from "react";
import RecipeListItem from "./RecipeListItem";
import { fetchData } from "../../utility/ApiClient";

export default function RecipeList () {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const url = `https://localhost:44325/api/v1/recipes`;
    useEffect(() => {
        fetchData<Recipe[]>(url)
            .then((recipe) => setRecipes(recipe))
            .catch((error) => console.log(error)); 
    }, []);

    return (
        <div>
          <ul>
            {recipes.map(r => 
                <li key={r.id}>
                    <RecipeListItem id={r.id} name={r.title}/>
                </li>
            )}
          </ul>
        </div>
    );
}