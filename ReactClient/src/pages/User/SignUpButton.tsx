import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import { getText } from "../../utility/LanguageManager"
import { LanguageTextCode } from "../../models/LanguageTextCode";
import { Link } from "react-router-dom";

export default function SignUpButton () {
    const language = useSelector((state: RootState) => state.language.value);
    const signUpText = getText(LanguageTextCode.SignUp, language);
    return (
        <div>
            <Link to={`/signup`}>
                <button>{signUpText}</button>
            </Link>
        </div>
    );
}