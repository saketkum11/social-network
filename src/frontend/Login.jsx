import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;
  const handleEvent = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="   m-auto w-72">
      <div className="  my-3 bg-white p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <span className="text-2xl text-indigo-800 font-bold">Login</span>
          </div>

          <div className="flex flex-col my-2">
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
              className=" border-indigo-800 border-2 p-2 rounded-md border-opacity-50"
            />
          </div>
          <div className="flex flex-col my-2  ">
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
              className=" border-indigo-800 border-2 p-2 rounded-md border-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full p-1 flex justify-center rounded-md bg-indigo-800 text-white text-lg items-center my-5"
          >
            Login
          </button>
        </form>
        <div>
          <button className="w-full p-1 flex justify-center rounded-md border-gray-300  border-2 text-gray-400 text-lg items-center my-5">
            Login as Guest
          </button>
          <NavLink to="/">Don't Have Account ?</NavLink>
        </div>
      </div>
    </section>
  );
};

export { Login };
