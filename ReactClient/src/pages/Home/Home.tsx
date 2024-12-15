import React from "react";
import RecipeList from "../Recipe/RecipeList";
import styles from "./Home.module.css"

export default function Home () {
    return (
        <div>
            <div className={styles.header}>
                <h1>Welcome to React with TypeScript</h1>

            </div>
            <div className="content">
                <RecipeList></RecipeList>
            </div>
        </div>
    );
}