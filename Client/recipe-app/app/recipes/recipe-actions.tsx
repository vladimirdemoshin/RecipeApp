'use client'

import styles from '@/app/ui/styles/recipes.module.css';
import Link from 'next/link';

export default function RecipeActions() {
    return (
        <div className={styles.recipes_actions}>
            <Link href={`recipes/add`} className={styles.add_button}>
                <span>{'Add new recipe'}</span>
            </Link>
        </div>
    );
}