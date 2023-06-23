import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from "../Slice/userSlice";

const Follower = ({ setFollowModal }) => {
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
    <div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className=" fixed inset-0   text-white  max-w-md  m-auto rounded-lg ">
        <div className="flex flex-col justify-center min-h-full  text-sm">
          <div className="bg-slate-800 p-6">
            <div>
              <button
                onClick={() => setFollowModal((flag) => !flag)}
                className="inline-flex w-full justify-center rounded-md border-2 border-cyan-800  px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
              >
                Close
              </button>
            </div>
            {[...followFilter]?.map((user) => {
              const currentFollowing = currentUser?.following?.find(
                (followUser) => followUser.username === user.username
              );
              return (
                <div
                  key={user._id}
                  className=" flex gap-6 items-center  justify-center  my-4 rounded-lg px-4"
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
                  <div className="flex ">
                    {currentFollowing ? (
                      <button
                        onClick={() => {
                          handleUnFollowing(user._id, token);
                        }}
                        className="flex justify-center border-red-400 border-2 py-2 px-3 rounded-2xl"
                      >
                        UnFollow
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleFollowing(user._id, token);
                        }}
                        className="flex justify-center border-cyan-400 border-2 py-2 px-3 rounded-2xl"
                      >
                        Follow
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Follower };
