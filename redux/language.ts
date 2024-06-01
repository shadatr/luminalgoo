import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEnglish: true,
};

export const language = createSlice({
  name: 'englishMode',
  initialState,
  reducers: {
    toggleEnglish: (state) => {
      state.isEnglish = !state.isEnglish;
    },
  },
});

export const { toggleEnglish } = language.actions;

export const selectIsEnglish = (state: { englishMode: { isEnglish: boolean } }) => state.englishMode.isEnglish;

export default language.reducer;
