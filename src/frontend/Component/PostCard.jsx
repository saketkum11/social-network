import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EditCardModal, useTitle } from "../services";
import { deletePost, dislikePost, likePost } from "../Slice/postSlice";
import { addBookmark, removeBookmark } from "../Slice/bookmarkSlice";
import { CardComment } from "./CardComment";
import { FcLike, FcDislike } from "react-icons/fc";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { MdDelete, MdEditDocument } from "react-icons/md";
import { toast } from "react-hot-toast";
const PostCard = ({ post }) => {
  const [comment, setComment] = useState(false);
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
    if (token === " ") {
      navigate("/login");
      toast.error("you must login or signUp");
    } else {
      if (user.username === username) {
        navigate("/profile");
      } else {
        navigate(`/profile/${username}`);
      }
    }
  };

  const handleDeletePost = (id, token) => {
    dispatch(deletePost({ postId: id, token }));
  };

  const handleLike = (id, token) => {
    if (token === " ") {
      navigate("/login");
    } else {
      dispatch(likePost({ postId: id, token }));
    }
  };

  const handleDislike = (id, token) => {
    dispatch(dislikePost({ postId: id, token }));
  };

  const handleBookmark = (id, token) => {
    if (token === " ") {
      navigate("/login");
    } else {
      dispatch(addBookmark({ postId: id, token }));
    }
  };

  const handleRemoveBookmark = (id, token) => {
    dispatch(removeBookmark({ postId: id, token }));
  };

  const handleComment = () => {
    if (token === " ") {
      navigate("/login");
    } else {
      setComment((flag) => !flag);
    }
  };

  const editUserPost = user?.username === username;

  const cardAvatar = [...allUsers].filter(
    (profile) => profile.username === username
  )[0];

  const postLiked = post?.likes?.likedBy?.find(
    (likePost) => likePost.username === user.username
  );

  const postBookmark = bookmarks?.find((bookmark) => bookmark === post._id);

  return (
    <div className="bg-slate-800  rounded-2xl p-4 text-xs md:text-sm  ">
      <div className="flex items-center justify-between mb-4">
        <div className="gap-2 flex justify-between w-full items-center">
          <div className="flex items-center ">
            <img
              className=" rounded-full overflow-hidden w-6 h-6 sm:w-12 sm:h-12 mr-4"
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
          <div className="flex items-center justify-center gap-4">
            {editUserPost && (
              <button
                className="hover:text-cyan-600 text-lg"
                onClick={() => {
                  handleDeletePost(post._id, token);
                }}
              >
                <MdDelete />
              </button>
            )}

            {editUserPost && (
              <button
                className="hover:text-cyan-600 text-lg"
                onClick={() => {
                  setModalFlag((flag) => !flag);
                }}
              >
                <MdEditDocument />
              </button>
            )}
          </div>
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
              className="text-red-400 text-md"
            >
              <FcDislike />
              {post.likes?.likeCount}
            </button>
          ) : (
            <button
              className="text-cyan-400 text-md"
              onClick={() => {
                handleLike(post._id, token);
              }}
            >
              <FcLike />
              {post.likes?.likeCount}
            </button>
          )}
          <button
            className="text-2xl"
            onClick={() => {
              handleComment();
            }}
          >
            <TfiCommentsSmiley />
          </button>
          {postBookmark ? (
            <button
              onClick={() => {
                handleRemoveBookmark(post._id, token);
              }}
              className="text-lg"
            >
              <FaBookmark />
            </button>
          ) : (
            <button
              className="text-lg"
              onClick={() => {
                handleBookmark(post._id, token);
              }}
            >
              <FaRegBookmark />
            </button>
          )}
        </div>
      </div>
      <div className=" text-white mt-6 ">
        {comment && <CardComment post={post} />}
      </div>
    </div>
  );
};

export { PostCard };
