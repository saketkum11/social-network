import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userInfo = JSON.parse(localStorage.getItem("user")) || null;
const token = localStorage.getItem("token") || " ";

const initialState = {
  user: userInfo,
  token: token,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const {
        data: { encodedToken, foundUser },
      } = await axios.post("/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("user", JSON.stringify(foundUser));
      localStorage.setItem("token", encodedToken);

      return { encodedToken, foundUser };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ username, password, firstName, lastName }, thunkAPI) => {
    try {
      const {
        data: { createdUser, encodedToken },
      } = await axios.post("/api/auth/signup", {
        username,
        password,
        firstName,
        lastName,
      });

      localStorage.setItem("user", JSON.stringify(createdUser));
      localStorage.setItem("token", encodedToken);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
console.log(initialState);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.clear("user");
      localStorage.clear("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload.foundUser;
      state.token = payload.encodedToken;
    });
  },
});

export {};
export default authSlice.reducer;
