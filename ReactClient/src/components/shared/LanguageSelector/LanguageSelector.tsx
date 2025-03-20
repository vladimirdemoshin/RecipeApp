import { SupportedLanguage } from "../../../models/Language";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../../state/language/languageSlice";
import { RootState } from "state/store";

export default function LanguageSelector () {
    const language = useSelector((state: RootState) => state.language.value);
    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        console.log(value);
        // todo convert value to enum
        dispatch(change(SupportedLanguage.Ru));
    }

    return (
        <div className="language-select-container">
            <h3>Language: {language}</h3>
            <select value={language} onChange={handleChange}>
                <option value={SupportedLanguage.En}>English</option>
                <option value={SupportedLanguage.Ru}>Russian</option>
            </select>
        </div>
    );
}