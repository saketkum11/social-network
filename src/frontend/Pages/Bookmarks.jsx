import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmark } from "../Slice/bookmarkSlice";
import { PostCard, useTitle } from "../services";

const Bookmarks = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    auth: { token },
    bookmark: { bookmarks },
    post: { posts },
  } = state;
  const bookmarkPost = bookmarks?.map((postId) =>
    posts?.find((post) => post._id === postId)
  );
  useEffect(() => {
    dispatch(getBookmark({ token }));
  }, [dispatch, token]);
  useTitle("bookmark");
  console.log(bookmarkPost);
  return (
    <div className="max-w-lg m-auto mt-10 text-white">
      {bookmarks.length === 0 ? (
        <div className="text-center">
          <span>There is no post added in bookmark {bookmarks.length}</span>
        </div>
      ) : (
        [...bookmarkPost].map((bookmark) => {
          return <PostCard post={bookmark} key={bookmark._id} />;
        })
      )}
    </div>
  );
};

export { Bookmarks };
