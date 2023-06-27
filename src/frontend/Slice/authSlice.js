import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const userInfo = JSON.parse(localStorage.getItem("user")) || null;
const token = localStorage.getItem("token") || "";

const initialState = {
  user: userInfo,
  token: token,
};
export const logout = createAsyncThunk("auth/logout", () => {
  localStorage.clear("user");
  localStorage.clear("token");
  toast.success("logged Out");
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
