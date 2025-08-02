import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './language/languageSlice'
import tokenReducer from './token/tokenSlice'

export const store = configureStore({
  reducer: {
    language: languageReducer,
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;