import axios from "axios";

const useLogin = () => {
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
      console.log(foundUser, encodedToken);
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
