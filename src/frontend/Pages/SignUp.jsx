import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLogin } from "../Hooks/useLogin";
import { useTitle } from "../services";
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const { signupForm } = useLogin();
  useTitle("SignUp");
  const { firstName, lastName, username, password } = formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignUp = () => {
    signupForm(formData);
  };
  return (
    <section className=" m-auto w-full max-w-sm text-xs mt-24">
      <div className=" p-8  text-white border-cyan-400 border-2 rounded-lg ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <div>
            <span className=" text-cyan-500 font-bold">SignUp</span>
          </div>
          <div className="flex flex-col gap-3 my-2">
            <label htmlFor="firstName" className="flex">
              FirstName
            </label>
            <input
              autoComplete="on"
              onChange={(e) => handleChange(e)}
              type="text"
              name="firstName"
              required
              value={firstName}
              className=" focus:border-cyan-800 border-2 border-solid p-2 rounded-md  bg-zinc-900 "
            />
          </div>
          <div className="flex flex-col gap-3 my-2">
            <label htmlFor="lastName" className="flex">
              LastName
            </label>
            <input
              autoComplete="on"
              onChange={(e) => handleChange(e)}
              type="text"
              name="lastName"
              required
              value={lastName}
              className=" focus:border-cyan-800 border-2 border-solid p-2 rounded-md  bg-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-3 my-2">
            <label htmlFor="email" className="flex">
              Username
            </label>
            <input
              autoComplete="on"
              onChange={(e) => handleChange(e)}
              type="text"
              name="username"
              required
              value={username}
              className="focus:border-cyan-800 border-2 border-solid p-2 rounded-md  bg-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-3 my-2  ">
            <label htmlFor="password" className="flex">
              Password
            </label>
            <input
              autoComplete="on"
              onChange={(e) => handleChange(e)}
              type="password"
              required
              name="password"
              value={password}
              className="focus:border-cyan-800 border-2 border-solid p-2 rounded-md  bg-zinc-900"
            />
          </div>
          <button
            type="submit"
            className="w-full p-1 flex justify-center bg-cyan-800 text-white  items-center rounded-lg my-5"
          >
            Create Account
          </button>
        </form>
        <div>
          <NavLink to="/login">Already Have account ?</NavLink>
        </div>
      </div>
    </section>
  );
};

export { SignUp };
