import React from "react";
import LoginForm from "./LoginForm";
import { LanguageTextCode } from "../../models/LanguageTextCode";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import { getText } from "../../utility/LanguageManager"

export default function LoginPage () {
    const language = useSelector((state: RootState) => state.language.value);
    const signUpText = getText(LanguageTextCode.SignUp, language);

    return (
        <div>
            <LoginForm/>
            <div>
                <label>
                    Don't have account? Sign up here
                </label>
                <Link to={`/signup`}>
                    <button>{signUpText}</button>
                </Link>
            </div>
        </div>
    );
}