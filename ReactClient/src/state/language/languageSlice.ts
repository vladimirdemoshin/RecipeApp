import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LanguageState, SupportedLanguage } from "../../models/Language";

const initialState: LanguageState = {
    value: SupportedLanguage.En
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        change: (state, action: PayloadAction<SupportedLanguage>) => {
            console.log(action.payload);
            state.value = action.payload;
        },
    }
});

export const { change } = languageSlice.actions;

export default languageSlice.reducer;