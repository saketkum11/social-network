import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userInfo = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");
const initialState = {
  user: userInfo || null,
  token: token || "",
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const {
        status,
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
