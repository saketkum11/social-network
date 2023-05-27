import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/authSlice";
import postReducer from "../Slice/postSlice";
import userReducer from "../Slice/userSlice";
import bookmarkSlice from "../Slice/bookmarkSlice";
const appStore = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    user: userReducer,
    bookmark: bookmarkSlice,
  },
});
export { appStore };
