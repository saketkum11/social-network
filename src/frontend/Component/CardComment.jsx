import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, deleteComment, upvoteComment } from "../Slice/postSlice";
import { EditCommentModal } from "./EditCommentModal";

const CardComment = ({ post }) => {
  const state = useSelector((state) => state);
  const {
    auth: { token },
  } = state;

  const comments = post.comments;
  const [commentFlag, setCommentFlag] = useState(false);

  const [newComment, setComment] = useState({ text: " " });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setComment({ ...newComment, text: e.target.value });
  };

  const handleComment = (id, token, comment) => {
    dispatch(addComment({ commentData: comment, postId: id, token }));
  };

  const handleUpdateComment = () => {
    setCommentFlag((flag) => !flag);
  };

  const handleDeleteComment = (commentId, postId, token) => {
    dispatch(deleteComment({ postId: postId, commentId: commentId, token }));
  };
  const handleUpVote = (pId, cId, token) => {
    console.log("click");
    dispatch(upvoteComment({ postId: pId, commentId: cId, token }));
    console.log("253");
  };

  return (
    <div className="flex flex-col gap-4">
      {comments?.map((comment) => {
        return (
          <section key={comment._id}>
            <div className="flex gap-6 items-center justify-between">
              <div className="flex items-center gap-6">
                <img
                  src={comment?.avatarURL}
                  alt={comment?.username}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="flex gap-2">
                  <span>{comment?.firstName}</span>
                  <span>{comment?.lastName}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      handleUpVote(post._id, comment._id, token);
                    }}
                  >
                    upvote
                  </button>
                  <button>downvote</button>
                </div>
              </div>
              <button
                onClick={() =>
                  handleDeleteComment(comment._id, post._id, token)
                }
              >
                Delete
              </button>
            </div>
            <div className="my-4 flex gap-5">
              <p>{comment?.text}</p>
              <button onClick={() => handleUpdateComment()}>Edit</button>
            </div>
            {commentFlag && (
              <EditCommentModal
                comment={comment}
                setCommentFlag={setCommentFlag}
                post={post}
              />
            )}
          </section>
        );
      })}
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleComment(post._id, token, newComment);
          }}
        >
          <div className="flex justify-between items-center gap-4">
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              type="text"
              required
              value={newComment.text}
              className="bg-slate-900 border-2 border-cyan-800 w-full py-2 rounded-2xl px-4"
            />
            <button
              type="submit"
              className="border-cyan-800 border-2 rounded-xl text-xs py-2 px-2"
            >
              add comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { CardComment };
