import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userInfo = JSON.parse(localStorage.getItem("user")) || null;
const token = localStorage.getItem("token") || " ";

const initialState = {
  user: userInfo,
  token: token,
};
export const logout = createAsyncThunk("auth/logout", () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
});
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.user = action.payload;
    },
    getToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      state.user = "";
      state.token = "";
    });
  },
});

export const { authUser, getToken } = authSlice.actions;
export default authSlice.reducer;
