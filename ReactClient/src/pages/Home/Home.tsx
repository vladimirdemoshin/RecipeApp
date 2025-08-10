import React from "react";
import RecipeList from "../Recipe/RecipeList";
import "./Home.css"
import Header from "../../components/Header/Header";

export default function Home () {
    return (
        <div className="container">
            <Header/>
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