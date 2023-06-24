import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../Slice/authSlice";
import { MdLogout, MdExplore, MdLogin } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { FaBookmark } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
const Header = () => {
  const navColor = ({ isActive, isPending }) => {
    return {
      color: isActive ? "#22d3ee" : "",
    };
  };
  const { token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="border-b-2 py-4 border-cyan-400 text-white text-xs ">
      <div className="flex justify-between items-center  w-10/12 m-auto">
        <NavLink to="/" className="text-md sm:text-lg text-cyan-400 font-bold">
          Social-Network
        </NavLink>
        <nav>
          <ul className="flex gap-x-4 text-md sm:text-lg">
            <li>
              <NavLink to="/" style={navColor}>
                <AiFillHome />
              </NavLink>
            </li>
            <li>
              <NavLink to="/explore" style={navColor}>
                <MdExplore />
              </NavLink>
            </li>
            <li>
              <NavLink to="/bookmark" style={navColor}>
                <FaBookmark />
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" style={navColor}>
                <RxAvatar />
              </NavLink>
            </li>
            {token ? (
              <li
                onClick={() => {
                  handleLogout();
                }}
              >
                <button>
                  <MdLogout />
                </button>
              </li>
            ) : (
              <li>
                <NavLink to="/login" style={navColor}>
                  <MdLogin />
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
