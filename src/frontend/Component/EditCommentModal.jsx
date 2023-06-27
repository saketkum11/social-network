import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateComment } from "../Slice/postSlice";

const EditCommentModal = ({ comment, setCommentFlag, post }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const {
    auth: { token },
  } = state;

  const [editComment, setEditComment] = useState(comment);
  const handleChange = (e) => {
    setEditComment({ ...editComment, text: e.target.value });
  };

  const handleSubmitComment = (commentId, postId, token, commentData) => {
    dispatch(updateComment({ commentData, postId, commentId, token }));
    setCommentFlag((flag) => !flag);
  };
  return (
    <div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 text-xs   text-white sm:max-w-md  m-auto rounded-lg ">
        <div className="flex flex-col justify-center min-h-full  mx-6  sm:text-sm ">
          <div className="bg-slate-800 p-6">
            <div className="flex justify-between items-center border-b-2 border-solid border-cyan-400 leading-10">
              <button
                onClick={() => {
                  setCommentFlag((flag) => !flag);
                }}
              >
                Close
              </button>
              <span>Edit comment</span>
            </div>

            <div className=" flex flex-col  mt-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitComment(
                    editComment._id,
                    post._id,
                    token,
                    editComment
                  );
                }}
              >
                <textarea
                  rows="4"
                  name="content"
                  value={editComment.text}
                  required
                  className="bg-transparent w-full outline-none border-cyan-400 border-2 p-6 rounded-2xl "
                  onChange={(e) => handleChange(e)}
                ></textarea>
                <button
                  type="submit"
                  className="text-end border-cyan-400 border-2 px-4 py-2 rounded-2xl mt-4"
                >
                  Edit Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EditCommentModal };
