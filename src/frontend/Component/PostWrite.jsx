import React from "react";

const PostWrite = () => {
  return (
    <form
      className=" rounded-xl text-white "
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <textarea
        className="w-full outline-none rounded-xl  border-2 border-cyan-400 border-solid bg-slate-900 p-4"
        placeholder="write stories"
        rows="4"
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
