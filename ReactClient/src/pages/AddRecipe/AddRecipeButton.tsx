import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import { getText } from "../../utility/LanguageManager"
import { LanguageTextCode } from "../../models/LanguageTextCode";
import { Link } from "react-router-dom";

export default function AddRecipeButton () {
    const language = useSelector((state: RootState) => state.language.value);
    const addNewRecipeText = getText(LanguageTextCode.AddNewRecipe, language);
    return (
        <div className="add-recipe-container">
            <Link to={`/recipe/add`}>
                <button>{addNewRecipeText}</button>
            </Link>
        </div>
    );
}