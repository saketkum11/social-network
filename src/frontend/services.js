// pages
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { Feed } from "./Pages/Feed";

//component
import { Header } from "./Component/Header";
// private route
import { MyRoutes } from "./Routes/MyRoutes";
import { RequireAuth } from "./Routes/RequireAuth";
// hoook
import { useTitle } from "./Hooks/useTitle";

//export

export { Login, SignUp, MyRoutes, useTitle, RequireAuth, Feed, Header };
