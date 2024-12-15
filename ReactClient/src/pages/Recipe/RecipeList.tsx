import React from "react";
import RecipeListItem from "./RecipeListItem";

export default function RecipeList () {
    const recipes: Recipe[] = [
        { id: "1", name: "Pizza" },
        { id: "2", name: "Pasta" },
        { id: "3", name: "Gellato" }
    ];
    return (
        <div>
          <ul>
            {recipes.map(r => 
                <li>
                    <RecipeListItem name={r.name}/>
                </li>
            )}
          </ul>
        </div>
    );
}