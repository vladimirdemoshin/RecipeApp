import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import { getText } from "../../utility/LanguageManager"
import { LanguageTextCode } from "../../models/LanguageTextCode";
import { Link } from "react-router-dom";
import { getUserName } from "../../utility/TokenUtility";

export default function LoginButton () {
    // const language = useSelector((state: RootState) => state.language.value);
    // const signUpText = getText(LanguageTextCode.SignUp, language);
    const token = useSelector((state: RootState) => state.token.value);
    console.log('from state:', token);
    return (
        token === null ? 
            <div>
                <Link to={`/login`}>
                    <button>{"login"}</button>
                </Link>
            </div> :
            <div>
                <span>Welcome {getUserName(token)}</span>
            </div>
    );
}