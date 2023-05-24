import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useLogin } from "../Hooks/useLogin";
import { useTitle } from "../services";
const Login = () => {
  useTitle("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { login } = useLogin();

  const { username, password } = formData;

  const handleEvent = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const guestLogin = (data) => {
    setFormData({
      ...formData,
      username: data.username,
      password: data.password,
    });
  };

  const handleSubmit = () => {
    login(formData);
  };

  return (
    <section className=" m-auto w-full max-w-sm text-xs mt-24">
      <div className=" p-8  text-white border-cyan-400 border-2 rounded-3xl ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <span className=" text-cyan-400 font-bold">Login</span>
          </div>

          <div className="flex flex-col gap-2 my-2 ">
            <label htmlFor="email" className="flex">
              UserName
            </label>
            <input
              autoComplete="on"
              onChange={(e) => handleEvent(e)}
              type="text"
              name="username"
              required
              value={username}
              placeholder="eg.adam@gmail.com"
              className="  focus:border-cyan-800 border-2 border-solid p-2 rounded-md  bg-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-2 my-2  ">
            <label htmlFor="password" className="flex">
              Password
            </label>
            <input
              autoComplete="on"
              onChange={(e) => handleEvent(e)}
              type="password"
              required
              name="password"
              value={password}
              placeholder="eg.adgj180019"
              className="  focus:border-cyan-800 border-2 border-solid p-2 rounded-md  bg-zinc-900"
            />
          </div>
          <button
            type="submit"
            className="w-full p-1 flex justify-center rounded-md bg-cyan-800 text-white  items-center my-5"
          >
            Login
          </button>
        </form>
        <div>
          <button
            onClick={() => {
              guestLogin({ username: "saketkum11", password: "saket147" });
            }}
            className="w-full p-1 flex justify-center rounded-md border-gray-300  border-2 text-gray-400  items-center my-5"
          >
            Login as Guest
          </button>
          <NavLink to="/signup">Don't Have Account ?</NavLink>
        </div>
      </div>
    </section>
  );
};

export { Login };
