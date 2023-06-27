import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
const initialState = {
  posts: [],
  loading: false,
  error: "",
  sort: "",
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
export const getPostById = createAsyncThunk(
  "/post/getPostById",
  async ({ postId }) => {
    try {
      const res = await axios.get(`/api/posts/${postId}`);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
);
export const createPost = createAsyncThunk(
  "/post/createPost",
  async ({ postData, token }) => {
    try {
      const {
        data: { posts },
        status,
      } = await axios.post(
        "/api/posts",
        { postData },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (status === 201) {
        toast.success("Created Post", {
          icon: " ✔",
        });
      }
      return { posts };
    } catch (error) {
      console.error(error);
    }
  }
);

export const updatePost = createAsyncThunk(
  "/post/updatePost",
  async ({ postData, postId, auth }) => {
    try {
      const {
        data: { posts },
        status,
      } = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData },
        {
          headers: {
            authorization: auth,
          },
        }
      );
      if (status === 201) {
        toast.success("Updated Post");
      }
      return { posts };
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
        status,
      } = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: token,
        },
      });
      if (status === 201) {
        toast.success("deleted post", {
          icon: " 🧁",
        });
      }
      return { posts };
    } catch (error) {
      console.error(error);
    }
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
      return { posts };
    } catch (error) {
      console.error(error);
    }
  }
);
export const addComment = createAsyncThunk(
  "/post/addComment",
  async ({ commentData, postId, token }) => {
    try {
      const {
        data: { posts },
        status,
      } = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (status === 201) {
        toast.success("added new comment", {
          icon: " ✅",
        });
      }
      return { posts };
    } catch (error) {
      console.error(error);
    }
  }
);
export const updateComment = createAsyncThunk(
  "/post/updateComment",
  async ({ commentData, postId, commentId, token }) => {
    try {
      const {
        data: { posts },
        status,
      } = await axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
        { commentData },
        { headers: { authorization: token } }
      );
      if (status === 201) {
        toast.success("successfull updated comment", {
          icon: " 🍧",
        });
      }
      return { posts };
    } catch (error) {
      console.error(error);
    }
  }
);

// not work ing api
export const deleteComment = createAsyncThunk(
  "/post/deleteComment",
  async ({ postId, commentId, token }) => {
    try {
      const {
        data: { posts },
        status,
      } = await axios.post(
        `/api/comments/delete/${postId}/${commentId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      if (status === 201) {
        toast.success("deleted comment", {
          icon: "😓",
        });
      }
      return { posts };
    } catch (error) {
      console.error(error);
    }
  }
);

// not work ing  this api
export const upvoteComment = createAsyncThunk(
  "/post/upvoteComment",
  async ({ postId, commentId, token }) => {
    try {
      const {
        data: { posts },
      } = await axios.post(
        `/api/comments/upvote/${postId}/${commentId}`,
        {},
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
export const downVoteComment = createAsyncThunk(
  "/post/downVoteComment",
  async ({ postId, commentId, token }) => {
    try {
      const {
        data: { posts },
      } = await axios.post(
        `/api/comments/downvote/${postId}/${commentId}`,
        {},
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

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getSortPost: (state, { payload }) => {
      state.sort = payload;
    },
  },
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
      .addCase(updatePost.fulfilled, (state, { payload }) => {
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
      })
      .addCase(addComment.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(updateComment.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(deleteComment.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(upvoteComment.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(downVoteComment.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      });
  },
});
export const { getSortPost } = postSlice.actions;
export default postSlice.reducer;
