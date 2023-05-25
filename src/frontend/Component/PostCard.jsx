import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../services";

const PostCard = ({ post }) => {
  const { avatarURL, content, username, firstName, lastName } = post;
  const state = useSelector((state) => state);
  const {
    auth: { user },
  } = state;

  const navigate = useNavigate();
  useTitle(username);
  const handleUser = (username) => {
    if (user.username === username) {
      navigate("/profile");
    } else {
      navigate(`/profile/${username}`);
    }
  };

  return (
    <div className="bg-slate-800  rounded-2xl p-4 text-sm">
      <div className="flex items-center mb-4">
        <img
          className=" rounded-full overflow-hidden  w-12 h-12 mr-4"
          src={avatarURL}
          alt={firstName + lastName}
        />
        <span
          className="flex gap-2 cursor-pointer hover:text-cyan-600"
          onClick={() => {
            handleUser(username);
          }}
        >
          <span>{firstName}</span>
          <span>{lastName}</span>
        </span>
      </div>

      <div className="mt-4">
        <p>{content}</p>
        <div className="text-cyan-500 flex justify-between mt-6">
          <button>Like</button>
          <button>Comment</button>
          <button>Bookmark</button>
        </div>
      </div>
    </div>
  );
};

export { PostCard };
