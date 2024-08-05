'use client'

import Recipe from "@/app/lib/models/recipe";
import styles from '@/app/ui/styles/recipes.module.css';
import { addRecipe } from "../lib/webApi";
import RecipePreview from "./recipe-preview";

export interface RecipeListProps {
    recipes: Recipe[]
}

export default function RecipeList({
    recipes
}: RecipeListProps) {
    return (
        <div className={styles.recipes_list}>
            {/* <button className={styles.add_button} onClick={() => {
                addRecipe().then((response) => {
                    console.log('added', response);
                });
            }}>
                Add receipt
            </button> */}
            {
                recipes.map(r =>
                    <RecipePreview recipe={r}/>
                )
            }
        </div>
    );
}