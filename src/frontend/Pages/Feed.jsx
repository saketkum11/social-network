import { useDispatch, useSelector } from "react-redux";
import { Loading, PostCard, PostWrite, useTitle } from "../services";
import { getPosts } from "../Slice/postSlice";
import { useEffect } from "react";
import { getUser, follow, unfollow } from "../Slice/userSlice";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    user: { allUsers },
    post: { posts, loading },
    auth: { user, token },
  } = state;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUser());
  }, [dispatch]);

  useTitle("Feed");

  const feeds = [...posts]?.reverse();

  const handleFollowing = (id, token) => {
    if (token === " ") {
      navigate("/login");
    } else {
      dispatch(follow({ followUserId: id, token }));
    }
  };
  const followFilter = [...allUsers].filter(
    (currentUser) => currentUser?.username !== user?.username
  );

  const currentUser = allUsers?.find(
    (eachUser) => eachUser?.username === user?.username
  );
  const handleUnFollowing = (id, token) => {
    dispatch(unfollow({ followUserId: id, token }));
  };

  return (
    <main className="md:grid md:grid-cols-6 gap-8 w-10/12 place-content-center m-auto my-14">
      <section className="md:col-start-2 md:col-end-6 lg:col-start-2 lg:col-end-5">
        <PostWrite />
        <div className="flex justify-center mt-14">
          {loading ? (
            <Loading />
          ) : (
            <div className="flex flex-col gap-y-3 text-white">
              {feeds.map((post) => (
                <PostCard post={post} key={post._id} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="hidden lg:block lg:col-span-2 text-white text-sm ">
        <div className="border-2 border-cyan-400 rounded-2xl p-6">
          {[...followFilter]?.map((user) => {
            const currentFollowing = currentUser?.following?.find(
              (followUser) => followUser.username === user.username
            );
            return (
              <div
                key={user._id}
                className=" flex gap-6 items-center justify-center my-4"
              >
                <img
                  src={user.avatarURL}
                  className=" w-10 h-10 object-cover rounded-full"
                  alt=""
                />
                <div className="flex-1 flex gap-2 flex-col">
                  <span>
                    {user.firstName}
                    {user.lastName}
                  </span>
                  <span className=" text-slate-400">{user.username}</span>
                </div>
                {currentFollowing ? (
                  <button
                    onClick={() => {
                      handleUnFollowing(user._id, token);
                    }}
                    className=" border-red-400 border-2 py-2 px-3 rounded-2xl"
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleFollowing(user._id, token);
                    }}
                    className=" border-cyan-400 border-2 py-2 px-3 rounded-2xl"
                  >
                    Follow
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
export { Feed };
