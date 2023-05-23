import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navColor = ({ isActive, isPending }) => {
    return {
      color: isActive ? "#22d3ee" : "",
      backgroundColor: isPending ? "#22d3ee" : "black",
    };
  };
  return (
    <header className="border-b-2 py-4 border-cyan-400 text-white text-xs ">
      <div className="flex justify-between items-center  w-10/12 m-auto">
        <NavLink className="text-lg text-cyan-400 font-bold" to="/">
          Social-Network
        </NavLink>
        <nav>
          <ul className="flex gap-x-4 ">
            <li>
              <NavLink to="/" style={navColor}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/explore" style={navColor}>
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink to="/bookmark" style={navColor}>
                Bookmarks
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" style={navColor}>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="login" style={navColor}>
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
