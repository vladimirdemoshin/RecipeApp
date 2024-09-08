import styles from '@/app/ui/styles/recipes.module.css';
import Recipe from '../lib/models/recipe';
import Link from 'next/link';

export default function RecipePreview({
    recipe
}: {recipe: Recipe}) {
    return (
        <Link href={`recipes/${recipe.id.toString()}`} target='_blank' className={styles.recipe_preview}>
            <div>
                <span>{recipe.title}</span>
                <div>{"Test description"}</div>
            </div>
        </Link>
    );
}