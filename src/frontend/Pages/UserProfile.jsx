import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { PostCard } from "../services";

const UserProfile = () => {
  const { username } = useParams();
  const state = useSelector((state) => state);
  const {
    user: { allUsers },
    post: { posts },
  } = state;

  const currentProfile = allUsers?.find(
    (profile) => profile.username === username
  );
  const currentProfilePost = [...posts]?.filter(
    (profilePost) => profilePost.username === username
  );
  return (
    <div className="mt-8">
      <section className="flex flex-col items-center justify-center  text-white ">
        <img
          src={currentProfile?.avatarURL}
          className="rounded-full w-28 h-28 object-cover my-5 "
          alt="usersImage"
        />
        <div className="flex justify-center items-center gap-4 ml-6">
          <span className="text-2xl text-center font-bold">
            {currentProfile?.firstName}
          </span>
          <span className="text-2xl font-bold">{currentProfile?.lastName}</span>
          <button className="text-cyan-600 text-sm">Edit</button>
        </div>
        <div className="flex flex-col line-height-2">
          <span className="text-slate-400 text-center">
            @{currentProfile?.username}
          </span>
          <p className="text-lg text-cyan-600 mt-4 ">{currentProfile?.bio}</p>
          <Link className="hover:text-cyan-600 text-sm text-center">
            {currentProfile?.website}
          </Link>
        </div>
        <div className=" flex gap-3 mt-4 text-xs">
          <button className=" flex-1 rounded-3xl border-cyan-600 border-2 px-3 py-2">
            post<span className="ml-1">{2}</span>
          </button>
          <button className=" flex-1  rounded-3xl border-cyan-600 border-2 px-3 py-2">
            Following<span className="ml-1">{5}</span>
          </button>
          <button className=" flex-1 rounded-3xl border-cyan-600 border-2 px-3 py-2">
            Followers<span className="ml-1">{4}</span>
          </button>
        </div>
      </section>
      <section className="my-10">
        <div className=" max-w-lg w-full m-auto">
          {currentProfilePost.length === 0 ? (
            "There no post that users has."
          ) : (
            <div className="flex flex-col mt-6 text-white gap-2">
              {currentProfilePost?.reverse().map((post) => (
                <PostCard post={post} key={post._id} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export { UserProfile };
