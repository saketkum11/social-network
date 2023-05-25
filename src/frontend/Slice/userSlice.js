import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allUsers: [],
  loading: false,
  error: "",
};

export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const {
      data: { users },
    } = await axios.get("/api/users");
    return { users };
  } catch (error) {
    console.error(error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload: { users } }) => {
        state.allUsers = users;
        state.loading = false;
      });
  },
});
export default userSlice.reducer;
