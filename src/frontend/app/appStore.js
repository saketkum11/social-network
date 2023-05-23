import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/authSlice";
import postReducer from "../Slice/postSlice";
const appStore = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});
export { appStore };
