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
export const createPost = createAsyncThunk(
  "/post/createPost",
  async ({ postData, token }) => {
    try {
      const {
        data: { posts },
      } = await axios.post(
        "/api/posts",
        { postData },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return { posts };
    } catch (error) {
      console.error(error);
    }
  }
);
export const updatePost = createAsyncThunk(
  "/post/updatePost",
  async ({ updateContent, auth }) => {
    try {
      const res = await axios.post(
        `/api/posts/edit/${updateContent._id}`,
        { updateContent },
        {
          headers: {
            authorization: auth,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
);
export const deletePost = createAsyncThunk(
  "/post/deletePost",
  async ({ postId, token }) => {
    try {
      const {
        data: { posts },
      } = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: token,
        },
      });
      return { posts };
    } catch (error) {}
  }
);

export const likePost = createAsyncThunk(
  "/post/likePost",
  async ({ postId, token }) => {
    try {
      const {
        data: { posts },
      } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(posts);
      return { posts };
    } catch (error) {}
  }
);
export const dislikePost = createAsyncThunk(
  "/post/dislikePost",
  async ({ postId, token }) => {
    try {
      const {
        data: { posts },
      } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(posts);
      return { posts };
    } catch (error) {
      console.error(error);
    }
  }
);

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
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(likePost.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(dislikePost.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      });
  },
});

export default postSlice.reducer;
