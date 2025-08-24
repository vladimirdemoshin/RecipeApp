import React from "react";
import RecipeList from "../Recipe/RecipeList";
import AddRecipeButton from "../../pages/AddRecipe/AddRecipeButton";
import "./RecipesPage.css"
import Header from "../../components/Header/Header";

export default function RecipesPage () {
    return (
        <div className="container">
            <Header/>
            <div className="content">
                <div></div>
                <div className="recipe-list">
                    <RecipeList/>
                </div>
                <div>
                    <AddRecipeButton/>
                </div>
            </div>
        </div>
    );
}