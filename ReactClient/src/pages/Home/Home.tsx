import React from "react";
import RecipeList from "../Recipe/RecipeList";
import "./Home.css"
import { Link } from "react-router-dom";

export default function Home () {
    return (
        <div className="container">
            <div className='header'>
                <h1>Recipe app</h1>
                <div className="add-recipe-container">
                    <Link to={`/recipe/add`}>
                        <button>
                            Add new recipe
                        </button>
                    </Link>
                </div>
            </div>
            <div className="content">
                <div></div>
                <div className="recipe-list">
                    <RecipeList></RecipeList>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}