import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../Slice/postSlice";

const EditCardModal = ({ setModalFlag, post }) => {
  const [updateContent, setUpdateContent] = useState(post);
  const dispatch = useDispatch();

  const { token } = useSelector((store) => store.auth);
  const handleChange = (e) => {
    setUpdateContent({ ...updateContent, [e.target.name]: e.target.value });
  };
  const handleUpdateContent = () => {
    dispatch(updatePost({ updateContent: updateContent, auth: token }));
  };
  console.log(updateContent);
  return (
    <div>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-cyan-400 opacity-20 z-10"></div>
      <div className="fixed top-48  m-auto w-full p-6 bg-slate-800 rounded-2xl max-w-md z-40 shadow-lg ">
        <div className="flex flex-col justify-center  ">
          <div className="flex justify-between items-center border-b-2 border-solid border-cyan-400 leading-10">
            <button
              onClick={() => {
                setModalFlag((flag) => !flag);
              }}
            >
              Close
            </button>
            <span>Edit Modal</span>
          </div>
          <div className=" flex flex-col  mt-6">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateContent();
              }}
            >
              <textarea
                rows="4"
                name="content"
                className="bg-transparent w-full outline-none border-cyan-400 border-2 p-6 rounded-2xl "
                value={updateContent.content}
                onChange={(e) => handleChange(e)}
              ></textarea>
              <button
                type="submit"
                className="text-end border-cyan-400 border-2 px-4 py-2 rounded-2xl mt-4"
              >
                Update Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EditCardModal };
