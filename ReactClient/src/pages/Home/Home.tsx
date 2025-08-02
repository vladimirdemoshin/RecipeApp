import React from "react";
import RecipeList from "../Recipe/RecipeList";
import "./Home.css"
import LanguageSelector from '../../components/shared/LanguageSelector/LanguageSelector'
import AddRecipeButton from "../../pages/AddRecipe/AddRecipeButton";
import SignUpButton from "../../pages/User/SignUpButton";
import LoginButton from "../../pages/User/LoginButton";

export default function Home () {
    return (
        <div className="container">
            <div className='header'>
                <div>
                    <LanguageSelector/>
                    <h1>Recipe app</h1>
                </div>
                <AddRecipeButton/>
                <SignUpButton/>
                <LoginButton/>
            </div>
            <div className="content">
                <div></div>
                <div className="recipe-list">
                    <RecipeList/>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}