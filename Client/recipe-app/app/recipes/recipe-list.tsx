import Recipe from "@/app/lib/models/recipe";
import styles from '@/app/ui/styles/recipes.module.css';
import RecipePreview from "./recipe-preview";

export interface RecipeListProps {
    recipes: Recipe[]
}

export default function RecipeList({
    recipes
}: RecipeListProps) {
    return (
        <div className={styles.recipes_list}>
            {
                recipes.map(r =>
                    <RecipePreview key={r.id} recipe={r}/>
                )
            }
        </div>
    );
}