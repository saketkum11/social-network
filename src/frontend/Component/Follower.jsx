import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from "../Slice/userSlice";

const Follower = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    user: { allUsers },
    auth: { user, token },
  } = state;
  const followFilter = [...allUsers].filter(
    (currentUser) => currentUser.username !== user.username
  );

  const currentUser = allUsers?.find(
    (eachUser) => eachUser.username === user.username
  );
  const handleFollowing = (id, token) => {
    dispatch(follow({ followUserId: id, token }));
  };
  const handleUnFollowing = (id, token) => {
    dispatch(unfollow({ followUserId: id, token }));
  };
  return (
    <div className=" absolute top-0 text-white bg-cyan-800 p-6 m-auto">
      {[...currentUser.following]?.map((user) => {
        const currentFollowing = currentUser?.following?.find(
          (followUser) => followUser.username === user.username
        );
        return (
          <div
            key={user._id}
            className=" flex gap-6 items-center justify-center my-4"
          >
            <img
              src={user.avatarURL}
              className=" w-10 h-10 object-cover rounded-full"
              alt=""
            />
            <div className="flex-1 flex gap-2 flex-col">
              <span>
                {user.firstName}
                {user.lastName}
              </span>
              <span className=" text-slate-400">{user.username}</span>
            </div>
            {currentFollowing ? (
              <button
                onClick={() => {
                  handleUnFollowing(user._id, token);
                }}
                className=" border-red-400 border-2 py-2 px-3 rounded-2xl"
              >
                UnFollow
              </button>
            ) : (
              <button
                onClick={() => {
                  handleFollowing(user._id, token);
                }}
                className=" border-cyan-400 border-2 py-2 px-3 rounded-2xl"
              >
                Follow
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export { Follower };
