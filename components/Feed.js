"use clinet";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("/api/post");
      const data = await response.json();
      setPosts(data);
    };
    getPosts();
  }, []);
  return (
    <section className="w-full mt-4 min-h-svh md:my-10 sm:my-8 bg-white dark:bg-dark-100">
      <h2 className="sub_heading my-4 text-left">All blog posts</h2>
      <div className="flex flex-col gap-6">
        {posts?.map((post, i) => (
          <BlogPost key={i} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Feed;
