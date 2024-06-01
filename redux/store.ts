import { configureStore } from '@reduxjs/toolkit';
import englishReducer from './language';

export const store = configureStore({
  reducer: {
    englishMode: englishReducer,
  },
});
