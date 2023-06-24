import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../Slice/userSlice";
import { EditProfileModal, Follower, PostCard } from "../services";
import { useState } from "react";
import { getPosts } from "../Slice/postSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const [listFollowing, setListFollowing] = useState([]);
  const [followModal, setFollowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const state = useSelector((state) => state);
  const {
    user: { allUsers },
    auth: { user },
    post: { posts },
  } = state;

  useEffect(() => {
    dispatch(getUser());
    dispatch(getPosts());
  }, [dispatch]);

  const currentProfile = allUsers?.find(
    (profile) => profile.username === user.username
  );
  const currentProfilePost = [...posts]?.filter(
    (profilePost) => profilePost.username === user.username
  );

  const showFollowings = () => {
    setListFollowing(() => [...currentProfile.following]);
    setFollowModal((prev) => !prev);
  };
  const handleEditProfile = () => {
    setEditModal((flag) => !flag);
  };
  return (
    <main className="mt-8 mx-8 text-xs">
      <section className="flex flex-col items-center justify-center  text-white ">
        <img
          src={currentProfile?.avatarURL}
          className="rounded-full w-28 h-28 object-cover my-5 "
          alt="usersImage"
        />
        <div className="flex flex-wrap justify-center items-center gap-4 ml-6">
          <div className="flex gap-4">
            <span className="text-2xl text-center font-bold">
              {currentProfile?.firstName}
            </span>
            <span className="text-2xl font-bold">
              {currentProfile?.lastName}
            </span>
          </div>

          <button
            onClick={() => handleEditProfile()}
            className="text-cyan-600 text-sm"
          >
            Edit
          </button>
          {editModal && (
            <EditProfileModal
              setEditModal={setEditModal}
              userProfile={currentProfile}
            />
          )}
        </div>
        <div className="flex flex-col line-height-2">
          <span className="text-slate-400 text-center">
            @{currentProfile?.username}
          </span>
          <p className="text-center text-lg text-cyan-600 mt-4 ">
            {currentProfile?.bio}
          </p>
          <Link className="hover:text-cyan-600 text-sm text-center">
            {currentProfile?.website}
          </Link>
        </div>
        <div className=" flex flex-wrap gap-3 mt-4 text-xs">
          <button className=" flex-1 rounded-3xl border-cyan-600 border-2 px-3 py-2">
            post<span className="ml-1">{currentProfilePost.length}</span>
          </button>
          <button
            onClick={() => showFollowings()}
            className=" flex-1  rounded-3xl border-cyan-600 border-2 px-3 py-2"
          >
            Following
            <span className="ml-1">{currentProfile?.following.length}</span>
          </button>
          <button className=" flex-1 rounded-3xl border-cyan-600 border-2 px-3 py-2">
            Followers
            <span className="ml-1">{currentProfile?.followers.length}</span>
          </button>
        </div>
      </section>
      <section className="my-10 md:col-start-2 md:col-end-6 lg:col-start-2 lg:col-end-5">
        <div className=" max-w-lg w-full m-auto my-10 md:col-start-2 md:col-end-6 lg:col-start-2 lg:col-end-5">
          {currentProfilePost.length === 0 ? (
            <p className="text-white text-center">
              There is no post that user has.
            </p>
          ) : (
            <div className="flex flex-col mt-6 text-white gap-2">
              {currentProfilePost?.reverse().map((post) => (
                <PostCard post={post} key={post._id} />
              ))}
            </div>
          )}
        </div>
      </section>
      {followModal && (
        <Follower
          listFollowing={listFollowing}
          setFollowModal={setFollowModal}
        />
      )}
    </main>
  );
};

export { Profile };
