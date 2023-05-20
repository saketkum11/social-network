import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./Slice/authSlice";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const dispatch = useDispatch();

  const handleEvent = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const guestLogin = (data) => {
    setFormData({
      ...formData,
      username: data.username,
      password: data.password,
    });
    dispatch(login(data));
  };

  const handleSubmit = () => {
    dispatch(login(formData));
  };

  return (
    <section className=" m-auto w-1/4 mt-24">
      <div className=" p-8 text-white border-cyan-400 border-2 rounded-lg text-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <span className="text-2xl text-cyan-400 font-bold">Login</span>
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
              className=" border-cyan-800 border-2 p-2 rounded-md border-opacity-50 text-black"
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
              className=" border-cyan-800 border-2 p-2 rounded-md border-opacity-50 text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full p-1 flex justify-center rounded-md bg-cyan-800 text-white text-lg items-center my-5"
          >
            Login
          </button>
        </form>
        <div>
          <button
            onClick={() => {
              guestLogin({ username: "saket123", password: "saket147" });
            }}
            className="w-full p-1 flex justify-center rounded-md border-gray-300  border-2 text-gray-400 text-lg items-center my-5"
          >
            Login as Guest
          </button>
          <NavLink to="/">Don't Have Account ?</NavLink>
        </div>
      </div>
    </section>
  );
};

export { Login };
