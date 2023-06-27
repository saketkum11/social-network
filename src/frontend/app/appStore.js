import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/authSlice";
import postReducer from "../Slice/postSlice";
import userReducer from "../Slice/userSlice";
import bookmarkSlice from "../Slice/bookmarkSlice";
import commentSlice from "../Slice/commentSlice";
const appStore = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    user: userReducer,
    bookmark: bookmarkSlice,
    comment: commentSlice,
  },
});
export { appStore };
