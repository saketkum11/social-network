import { Route, Routes } from "react-router-dom";
import {
  Bookmarks,
  Explore,
  Feed,
  Login,
  Profile,
  RequireAuth,
  SignUp,
  UserProfile,
} from "../services";
import { SinglePost } from "../Pages/SinglePost";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route
          path="/bookmark"
          element={
            <RequireAuth>
              <Bookmarks />
            </RequireAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequireAuth>
              <Explore />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <RequireAuth>
              <SinglePost />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};
export { MyRoutes };
