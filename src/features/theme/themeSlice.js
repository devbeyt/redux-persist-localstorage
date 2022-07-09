import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 colors: {dark: false,}
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state) {
      state.colors.dark = !state.colors.dark
      
    },
  
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
