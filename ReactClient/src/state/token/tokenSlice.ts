import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TokenState = {
    value: string | null
}

const initialState : TokenState = {
    value: null
}

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        change: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.value = action.payload;
        },
    }
});

export const { change } = tokenSlice.actions;

export default tokenSlice.reducer;