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

    const steps = recipe?.steps || [];

    // todo
    // const ingridients = [ { name: "salmon" }, { name: "sour cream" }, { name: "salt" }, { name: "pasta penne" } ];

    return (
        recipe ? 
            <div>
                <h1>{recipe.title}</h1>
                <div>
                    {recipe.description}
                </div>

                {/* <div>
                    <h2>Ingridients:</h2>
                    <div>
                        {ingridients.map(i => {
                            return (
                                <span>{i.name}</span>
                            );
                        })}
                    </div>
                </div> */}

                {steps.map((s, index) => {
                    return (
                        <div>
                            <h3>Step {index + 1}</h3>
                            <div>
                                {s.details}
                            </div>
                        </div>
                    );
                })}
            </div>
            : <div>Loading ... </div>
    );
}