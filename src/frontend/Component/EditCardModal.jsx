import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../Slice/postSlice";

const EditCardModal = ({ setModalFlag, post }) => {
  const [updateContent, setUpdateContent] = useState(post);
  const dispatch = useDispatch();

  const { token } = useSelector((store) => store.auth);

  const handleChange = (e) => {
    setUpdateContent({ ...updateContent, content: e.target.value });
  };

  const handleUpdateContent = (contentData, id, token) => {
    dispatch(
      updatePost({
        postData: contentData,
        postId: id,
        auth: token,
      })
    );
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
                  handleUpdateContent(updateContent, updateContent._id, token);
                }}
              >
                <textarea
                  rows="4"
                  name="content"
                  value={updateContent.content}
                  className="bg-transparent w-full outline-none border-cyan-400 border-2 p-6 rounded-2xl "
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
    </div>
  );
};

export { EditCardModal };
