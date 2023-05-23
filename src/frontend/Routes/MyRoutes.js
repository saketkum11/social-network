import { Route, Routes } from "react-router-dom";
import { Feed, Login, SignUp } from "../services";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};
export { MyRoutes };
