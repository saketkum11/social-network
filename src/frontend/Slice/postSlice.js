import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  loading: false,
  error: "",
};

export const getPosts = createAsyncThunk("/post/getPosts", async () => {
  try {
    const {
      data: { posts },
    } = await axios.get("/api/posts");
    return { posts };
  } catch (error) {
    console.log(error);
  }
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        state.loading = false;
      });
  },
});

export default postSlice.reducer;
