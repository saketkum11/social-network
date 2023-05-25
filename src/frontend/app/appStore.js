import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/authSlice";
import postReducer from "../Slice/postSlice";
import userReducer from "../Slice/userSlice";
const appStore = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    user: userReducer,
  },
});
export { appStore };
