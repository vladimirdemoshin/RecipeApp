import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utility/ApiClient"

export default function RecipePage () {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const url = `https://localhost:44325/api/v1/recipes/${id}`;
    useEffect(() => {
        fetchData<Recipe>(url)
            .then((recipe) => setRecipe(recipe))
            .catch((error) => console.log(error)); 
    }, []);

    return (
        recipe ? 
            <div>
                {recipe && `Welcome to recipe ${recipe.title}`}
            </div>
            : <div>Loading ... </div>
    );
}