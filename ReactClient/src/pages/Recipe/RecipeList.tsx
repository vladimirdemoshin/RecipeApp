import React from "react";
import RecipeListItem from "./RecipeListItem";

export default function RecipeList () {
    const recipes: Recipe[] = [
        { id: "1", title: "Pizza" },
        { id: "2", title: "Pasta" },
        { id: "3", title: "Gellato" }
    ];
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