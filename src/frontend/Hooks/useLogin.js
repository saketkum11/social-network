import axios from "axios";
import { useDispatch } from "react-redux";
import { authUser, getToken } from "../Slice/authSlice";
import { useLocation, useNavigate } from "react-router-dom";

const useLogin = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.state?.from?.pathname || "/";
  console.log(redirect);
  const login = async ({ username, password }) => {
    try {
      const {
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("user", JSON.stringify(foundUser));
      localStorage.setItem("token", encodedToken);
      dispatch(authUser(foundUser));
      dispatch(getToken(encodedToken));
      navigate(redirect);
    } catch (error) {
      console.log(error);
    }
  };
  const signupForm = async ({ username, password, firstName, lastName }) => {
    try {
      const {
        data: { createdUser, encodedToken },
      } = await axios.post("/api/auth/signup", {
        username,
        password,
        firstName,
        lastName,
      });
      localStorage.setItem("user", JSON.stringify(createdUser));
      localStorage.setItem("token", encodedToken);
    } catch (error) {}
  };
  return { login, signupForm };
};

export { useLogin };
