// pages
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { Feed } from "./Pages/Feed";
import { Bookmarks } from "./Pages/Bookmarks";
import { Profile } from "./Pages/Profile";
import { UserProfile } from "./Pages/UserProfile";
import { Explore } from "./Pages/Explore";

//component
import { Header } from "./Component/Header";
import { PostCard } from "./Component/PostCard";
import { PostWrite } from "./Component/PostWrite";
import { Loading } from "./Component/Loading";
import { EditCardModal } from "./Component/EditCardModal";
import { CardComment } from "./Component/CardComment";
import { EditCommentModal } from "./Component/EditCommentModal";
import { Follower } from "./Component/Follower";
import { EditProfileModal } from "./Component/EditProfileModal";
// private route
import { MyRoutes } from "./Routes/MyRoutes";
import { RequireAuth } from "./Routes/RequireAuth";
// hoook
import { useTitle } from "./Hooks/useTitle";

//export

export {
  Login,
  SignUp,
  MyRoutes,
  useTitle,
  RequireAuth,
  Feed,
  Header,
  PostCard,
  PostWrite,
  Loading,
  Bookmarks,
  Profile,
  UserProfile,
  EditCardModal,
  EditCommentModal,
  CardComment,
  Follower,
  EditProfileModal,
  Explore,
};
