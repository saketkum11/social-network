import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/authSlice";
const appStore = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export { appStore };
