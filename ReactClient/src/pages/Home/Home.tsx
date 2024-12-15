import React from "react";
import RecipeList from "../Recipe/RecipeList";
import "./Home.css"

export default function Home () {
    return (
        <div>
            <div className='header'>
                <h1>Welcome to React with TypeScript</h1>

            </div>
            <div className="content">
                <RecipeList></RecipeList>
            </div>
        </div>
    );
}