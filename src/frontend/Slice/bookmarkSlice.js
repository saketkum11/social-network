import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  bookmarks: [],
  loading: false,
  error: "",
};
export const getBookmark = createAsyncThunk(
  "/post/getBookmark",
  async ({ token }) => {
    try {
      const {
        data: { bookmarks },
      } = await axios.get("/api/users/bookmark", {
        headers: {
          authorization: token,
        },
      });
      return { bookmarks };
    } catch (error) {
      console.error(error);
    }
  }
);
export const addBookmark = createAsyncThunk(
  "/post/addBookmark",
  async ({ postId, token }) => {
    try {
      const {
        data: { bookmarks },
      } = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(bookmarks);
      return { bookmarks };
    } catch (error) {
      console.error(error);
    }
  }
);
export const removeBookmark = createAsyncThunk(
  "/post/removeBookmark",
  async ({ postId, token }) => {
    try {
      const {
        data: { bookmarks },
      } = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return { bookmarks };
    } catch (error) {
      console.error(error);
    }
  }
);
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookmark.fulfilled, (state, { payload }) => {
        state.bookmarks = payload.bookmarks;
      })
      .addCase(addBookmark.fulfilled, (state, { payload }) => {
        state.bookmarks = payload.bookmarks;
      })
      .addCase(removeBookmark.fulfilled, (state, { payload }) => {
        state.bookmarks = payload.bookmarks;
      });
  },
});
export default bookmarkSlice.reducer;
