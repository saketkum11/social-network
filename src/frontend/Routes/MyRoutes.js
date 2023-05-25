import { Route, Routes } from "react-router-dom";
import {
  Bookmarks,
  Feed,
  Login,
  Profile,
  RequireAuth,
  SignUp,
  UserProfile,
} from "../services";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};
export { MyRoutes };
