'use client'

import Recipe from "@/app/lib/models/recipe";
import styles from '@/app/ui/styles/recipes.module.css';
import { addRecipe } from "../lib/webApi";

export interface RecipeListProps {
    recipes: Recipe[]
}

export default function RecipeList({
    recipes
}: RecipeListProps) {
    return (
        <>
            <button className={styles.add_button} onClick={() => {
                addRecipe().then((response) => {
                    console.log('added', response);
                });
            }}>
                Add receipt
            </button>
            {
                recipes.map(r =>
                    <div>{r.title}</div>
                )
            }
        </>
    );
}