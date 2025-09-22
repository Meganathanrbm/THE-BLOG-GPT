const { createSlice } = require("@reduxjs/toolkit");

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    isDarkMode: window.matchMedia?.("(prefers-color-scheme: dark)")?.matches,
  },
  reducers: {
    toggleDarkMode: (state, actions) => {
      //check if check payload is not here , it toggle
      state.isDarkMode = actions.payload ? actions.payload : !state.isDarkMode;
    },
  },
});

export const darkModeActions = darkModeSlice.actions;
export default darkModeSlice;
