import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmark } from "../Slice/bookmarkSlice";
import { PostCard, useTitle } from "../services";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  useEffect(() => {
    if (token === " ") {
      navigate("/login");
    } else {
      dispatch(getBookmark({ token }));
    }
  }, [dispatch, token, navigate]);

  useTitle("bookmark");
  return (
    <main className="md:grid md:grid-cols-6 gap-8 w-10/12 place-content-center m-auto mt-14">
      <section className="md:col-start-2 md:col-end-6 lg:col-start-2 lg:col-end-5  text-white">
        {bookmarks.length === 0 ? (
          <div className="text-center">
            <span>There is no post added in bookmark {bookmarks.length}</span>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {[...bookmarkPost].map((bookmark) => {
              return <PostCard post={bookmark} key={bookmark._id} />;
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export { Bookmarks };
