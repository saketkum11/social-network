import { useDispatch, useSelector } from "react-redux";
import { Loading, PostCard, PostWrite, useTitle } from "../services";
import { getPosts } from "../Slice/postSlice";
import { useEffect } from "react";
import { getUser } from "../Slice/userSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((store) => store.post);
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUser());
  }, [dispatch]);
  useTitle("Feed");
  const feeds = [...posts]?.reverse();
  return (
    <main className="grid grid-cols-6 gap-8 w-10/12 place-content-center m-auto mt-14">
      <section className="col-start-2 col-end-5 ">
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
      <section className="col-span-1 bg-cyan-400"></section>
    </main>
  );
};
export { Feed };
