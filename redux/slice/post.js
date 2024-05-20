const { createSlice } = require("@reduxjs/toolkit");

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: null,
  },
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
    clearPost: (state, action) => {
      state.post = null;
    },
  },
});
export const postActions = postSlice.actions;
export default postSlice;
