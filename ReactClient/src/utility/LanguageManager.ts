import { SupportedLanguage } from "../models/Language"
import { LanguageTextCode } from "../models/LanguageTextCode";

export const getText = (code: LanguageTextCode, supportedLanguage: SupportedLanguage): string => {
    switch (supportedLanguage) {
        case SupportedLanguage.En:
            return getEnglishText(code);
        case SupportedLanguage.Ru:
            return getRussianText(code);
    }
}

function getRussianText(code: LanguageTextCode): string {
    switch (code) {
        case LanguageTextCode.Language:
            return "Язык";
        case LanguageTextCode.Russian:
            return "Русский";
        case LanguageTextCode.English:
            return "Английский";
        case LanguageTextCode.SignUp:
            return "Зарегистрироваться";
        case LanguageTextCode.AddNewRecipe:
            return "Добавить новый рецепт";
        case LanguageTextCode.EnterNameRecipe:
            return "Введите название рецепта";
        default: return "";
    }
}

function getEnglishText(code: LanguageTextCode): string {
    switch (code) {
        case LanguageTextCode.Language:
            return "Language";
        case LanguageTextCode.Russian:
            return "Russian";
        case LanguageTextCode.English:
            return "English";
        case LanguageTextCode.SignUp:
            return "Sign up";
        case LanguageTextCode.AddNewRecipe:
            return "Add new recipe";
        case LanguageTextCode.EnterNameRecipe:
            return "Enter name of recipe";
        default: return "";
    }
}