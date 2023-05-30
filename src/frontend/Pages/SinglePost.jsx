/*import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../services";
import { useSelector } from "react-redux";
import { CardComment } from "../Component/CardComment";

const SinglePost = () => {
  const { postId } = useParams();
  const [singlePost, setSinglePost] = useState(" ");
  const [comments, setComments] = useState();
  const state = useSelector((state) => state);

  const {
    auth: { user, token },
    user: { allUsers },
    bookmark: { bookmarks },
  } = state;

  const getPostById = async (postId) => {
    try {
      const {
        data: { post },
      } = await axios.get(`/api/posts/${postId}`);
      setSinglePost(post);
    } catch (error) {
      console.error(error);
    }
  };

  const getComment = async (postId) => {
    try {
      const { data: comments } = await axios.get(`/api/comments/${postId}`);
      setComments(comments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostById(postId);
    getComment(postId);
  }, [postId]);

  useTitle("SinglePost");

  const currentUser = [...allUsers].find(
    (user) => user.username === singlePost.username
  );
  const commentList = comments?.comments;
  console.log(singlePost, commentList);
  return (
    <main className="grid grid-cols-6 gap-8 w-10/12 place-content-center m-auto mt-14">
      <section className="col-start-2 col-end-5 ">
        <div className="bg-slate-800  rounded-2xl p-4 text-sm  text-white">
          <div className="flex flex-col  justify-between mb-4">
            <div className="flex items-center mb-4">
              <img
                className=" rounded-full overflow-hidden  w-12 h-12 mr-4"
                src={singlePost?.avatarURL}
                alt=""
              />
              <span
                className="flex gap-2 cursor-pointer hover:text-cyan-600"
                onClick={() => {}}
              >
                <span>{currentUser?.firstName}</span>
                <span>{currentUser?.lastName}</span>
              </span>
            </div>
            <div className="mt-4">
              <p>{singlePost?.content}</p>
            </div>
            <div className="mt-4">
              <span>comment</span>
            </div>
            <div>
              {[...commentList].map((comment) => (
                <CardComment comment={comment} />
              ))}
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export { SinglePost };
*/
