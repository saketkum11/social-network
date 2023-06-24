import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard, useTitle } from "../services";
import { useEffect } from "react";
import { getPosts, getSortPost } from "../Slice/postSlice";
import { getUser } from "../Slice/userSlice";
import { sortPost } from "../utils/sortByLikes";

const Explore = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    post: { posts, sort },
  } = state;

  useTitle("explore");

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUser());
  }, [dispatch]);

  const sortedPost = sortPost(posts, sort);
  return (
    <main className="lg:grid lg:grid-cols-6 gap-8 w-10/12 place-content-center m-auto mt-14">
      <section className="max-w-lg m-auto lg:col-start-2 lg:col-end-5 text-white">
        <div className="flex gap-2 text-xs">
          <span className="flex-1">Sort by Likes : -</span>
          <button
            className="flex-1  border-2 border-cyan-400 rounded-sm"
            onClick={() => dispatch(getSortPost("HIGH_TO_LOW"))}
          >
            High to Low
          </button>
          <button
            onClick={() => dispatch(getSortPost("LOW_TO_HIGH"))}
            className="flex-1  border-2 border-cyan-400 rounded-sm"
          >
            Low to High
          </button>
        </div>
        <div className="flex flex-col gap-4 my-10">
          {sortedPost.map((post) => {
            return <PostCard post={post} key={post._id} />;
          })}
        </div>
      </section>
    </main>
  );
};

export { Explore };
