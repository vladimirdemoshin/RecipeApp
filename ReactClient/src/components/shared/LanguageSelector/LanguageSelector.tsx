import { SupportedLanguage } from "../../../models/Language";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../../state/language/languageSlice";
import { RootState } from "state/store";
import { getText } from "../../../utility/LanguageManager"
import { LanguageTextCode } from "../../../models/LanguageTextCode";

export default function LanguageSelector () {
    const language = useSelector((state: RootState) => state.language.value);
    const languageText = getText(LanguageTextCode.Language, language);
    const russianText = getText(LanguageTextCode.Russian, language);
    const englishText = getText(LanguageTextCode.English, language);
    const dispatch = useDispatch();

    return (
        <div className="language-select-container">
            <h3>{languageText}</h3>
            <select value={language} onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                const value = +event.target.value;
                dispatch(change(value));
            }}>
                <option value={SupportedLanguage.En}>{englishText}</option>
                <option value={SupportedLanguage.Ru}>{russianText}</option>
            </select>
        </div>
    );
}