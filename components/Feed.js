"use clinet";

import React, { useEffect } from "react";
import BlogPost from "./BlogPost";
import { useSelector } from "react-redux";

import Loading from "@/app/loading";

const Feed = () => {
  // get from the redux store
  const loading = useSelector((state) => state.posts.loading);
  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);

  error && console.log(error);

  useEffect(() => {
    const handleScrollEvent = () => {
      const { clientHeight, scrollHeight, scrollTop } =
        document.documentElement;

      if (clientHeight + scrollTop + 20 > scrollHeight) {
        console.log(clientHeight, scrollHeight, scrollTop);
      }
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);
  return (
    <section className="w-full mt-4 min-h-screen md:my-10 sm:my-8 bg-white dark:bg-dark-100">
      <h2 className="sub_heading my-4 text-left">All blog posts</h2>
      <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap gap-6 ">
        {loading && <Loading />}
        {posts?.map((post, i) => (
          <BlogPost key={i} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Feed;
