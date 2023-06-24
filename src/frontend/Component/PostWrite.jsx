import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../Slice/postSlice";
import { toast } from "react-toastify";

const PostWrite = () => {
  const [postData, setPostData] = useState({
    content: "",
  });
  const state = useSelector((state) => state);
  const {
    auth: { token },
  } = state;
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const handleSubmitPost = () => {
    dispatch(createPost({ postData, token }));
    setPostData({ ...postData, content: " " });
  };

  return (
    <form
      className=" rounded-xl text-white "
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitPost();
      }}
    >
      <textarea
        onChange={(e) => handleChange(e)}
        name="content"
        className="w-full outline-none rounded-xl  border-2 border-cyan-400 border-solid bg-slate-900 p-4"
        placeholder="write stories"
        rows="4"
        required
        value={postData.content}
      ></textarea>
      <button
        className="bg-cyan-600 px-4 py-2 rounded-lg  w-full"
        type="submit"
      >
        Post
      </button>
    </form>
  );
};

export { PostWrite };
