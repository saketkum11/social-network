import React from "react";

const PostCard = ({ post }) => {
  const { _id, avatarURL, content, username, firstName, lastName } = post;
  return (
    <div
      className="bg-slate-800  rounded-2xl p-4 text-sm"
      onClick={() => {
        console.log(username, _id);
      }}
    >
      <div className="flex items-center mb-4">
        <img
          className=" rounded-full overflow-hidden  w-12 h-12 mr-4"
          src={avatarURL}
          alt={firstName + lastName}
        />
        <span className="flex gap-2">
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
