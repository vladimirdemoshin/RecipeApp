import React from "react";
import { Link } from "react-router-dom";

interface RecipeListItemProps { id: string; name: string; }

export default function RecipeListItem ({id, name}: RecipeListItemProps) {
    return (
        <div>
            <Link to={`/recipe/${id}`}>{name}</Link>
        </div>
    );
}