import { createSlice } from "@reduxjs/toolkit";

const userInfo = JSON.parse(localStorage.getItem("user")) || null;
const token = localStorage.getItem("token") || " ";

const initialState = {
  user: userInfo,
  token: token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.clear("user");
      localStorage.clear("token");
    },
    authUser: (state, action) => {
      state.user = action.payload.foundUser;
    },
    getToken: (state, action) => {
      state.token = action.payload.encodedToken;
    },
  },
  extraReducers: {},
});

export const { logout, authUser, getToken } = authSlice.actions;
export default authSlice.reducer;
