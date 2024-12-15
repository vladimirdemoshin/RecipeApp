import React from "react";

interface RecipeListItemProps { name: string; }

export default function RecipeListItem ({name}: RecipeListItemProps) {
    return (
        <div>
          {name}
        </div>
    );
}