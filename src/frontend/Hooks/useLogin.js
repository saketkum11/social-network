import axios from "axios";
import { useDispatch } from "react-redux";
import { authUser, getToken } from "../Slice/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const useLogin = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.state?.from?.pathname || "/";

  const login = async ({ username, password }) => {
    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await axios.post("/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("user", JSON.stringify(foundUser));
      localStorage.setItem("token", encodedToken);
      dispatch(authUser(foundUser));
      dispatch(getToken(encodedToken));
      if (status === 200) {
        toast.custom(
          <div className="bg-white p-4 rounded-lg text-black">
            {foundUser.username} Logged In
          </div>
        );
      }
      navigate(redirect);
    } catch (error) {
      console.log(error);
    }
  };
  const signupForm = async ({ username, password, firstName, lastName }) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await axios.post("/api/auth/signup", {
        username,
        password,
        firstName,
        lastName,
      });
      localStorage.setItem("user", JSON.stringify(createdUser));
      localStorage.setItem("token", encodedToken);
      if (status === 201) {
        toast.custom(
          <div className="bg-white p-4 rounded-lg text-black">
            {createdUser.username} signedUp successfully
          </div>
        );
      }
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return { login, signupForm };
};

export { useLogin };
