import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EditCardModal, useTitle } from "../services";
import { deletePost, dislikePost, likePost } from "../Slice/postSlice";
import { addBookmark, removeBookmark } from "../Slice/bookmarkSlice";

const PostCard = ({ post }) => {
  const { content, username } = post;
  const state = useSelector((state) => state);
  const {
    auth: { user, token },
    user: { allUsers },
    bookmark: { bookmarks },
  } = state;

  const [modalFlag, setModalFlag] = useState(false);
  const navigate = useNavigate();

  useTitle(username);

  const dispatch = useDispatch();

  const handleUser = (username) => {
    if (user.username === username) {
      navigate("/profile");
    } else {
      navigate(`/profile/${username}`);
    }
  };

  const handleDeletePost = (id, token) => {
    dispatch(deletePost({ postId: id, token }));
  };

  const handleLike = (id, token) => {
    dispatch(likePost({ postId: id, token }));
  };

  const handleDislike = (id, token) => {
    dispatch(dislikePost({ postId: id, token }));
  };

  const handleBookmark = (id, token) => {
    dispatch(addBookmark({ postId: id, token }));
  };

  const handleRemoveBookmark = (id, token) => {
    dispatch(removeBookmark({ postId: id, token }));
  };
  const editUserPost = user?.username === username;

  const cardAvatar = [...allUsers].filter(
    (profile) => profile.username === username
  )[0];

  const postLiked = post?.likes?.likedBy?.find(
    (likePost) => likePost.username === user.username
  );

  const postBookmark = bookmarks?.find((bookmark) => bookmark === post._id);

  console.log(postBookmark);

  return (
    <div className="bg-slate-800  rounded-2xl p-4 text-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center mb-4">
          <img
            className=" rounded-full overflow-hidden  w-12 h-12 mr-4"
            src={cardAvatar?.avatarURL}
            alt={username}
          />
          <span
            className="flex gap-2 cursor-pointer hover:text-cyan-600"
            onClick={() => {
              handleUser(username);
            }}
          >
            <span>{cardAvatar?.firstName}</span>
            <span>{cardAvatar?.lastName}</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          {editUserPost && (
            <button
              className="hover:text-cyan-600"
              onClick={() => {
                handleDeletePost(post._id, token);
              }}
            >
              delete
            </button>
          )}

          {editUserPost && (
            <button
              className="hover:text-cyan-600"
              onClick={() => {
                setModalFlag((flag) => !flag);
              }}
            >
              Edit
            </button>
          )}
        </div>
      </div>
      {modalFlag && <EditCardModal setModalFlag={setModalFlag} post={post} />}
      <div className="mt-4">
        <p>{content}</p>
        <div className="text-cyan-500 flex justify-between mt-6">
          {postLiked ? (
            <button
              onClick={() => {
                handleDislike(post._id, token);
              }}
              className="text-red-400"
            >
              disLike {post.likes?.likeCount}
            </button>
          ) : (
            <button
              className="text-cyan-400"
              onClick={() => {
                handleLike(post._id, token);
              }}
            >
              Like {post.likes?.likeCount}
            </button>
          )}

          <button>Comment</button>
          {postBookmark ? (
            <button
              onClick={() => {
                handleRemoveBookmark(post._id, token);
              }}
              className="text-red-400"
            >
              remove Bookmark
            </button>
          ) : (
            <button
              onClick={() => {
                handleBookmark(post._id, token);
              }}
            >
              Bookmark
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { PostCard };
