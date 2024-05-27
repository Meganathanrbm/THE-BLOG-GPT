const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  posts: null,
  loading: false,
  error: null,
};

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async (url) => {
    const response = await fetch(url,{ cache: 'no-store' });
    if (!response.ok) {
      throw new Error("Failed to fetch the all posts!");
    }
    const data = await response.json();
    console.log("All posts fetch successfully");
    return data;
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {}, // No reducers for direct state updates (use actions)
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch the all posts!";
      });
  },
});
export const postActions = postSlice.reducer;
export default postSlice;
