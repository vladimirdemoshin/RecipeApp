import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipePage () {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    const url = `https://localhost:44325/api/v1/recipes/${id}`;
    useEffect(() => {
        const fetchData = async () => {
            try { 
                const response = await fetch(url); 
                if (!response.ok) {
                     throw new Error('Network response was not ok'); 
                } 
                const result: Recipe = await response.json(); 
                setRecipe(result);
            }
            catch (error) {
                console.log(error);
            }
        }; 
        fetchData(); 
    }, []);

    return (
        recipe ? 
            <div>
                {recipe && `Welcome to recipe ${recipe.title}`}
            </div>
            : <div>Loading ... </div>
    );
}