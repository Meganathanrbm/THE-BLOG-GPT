"use client";

import LoadingSkeleton from "@/components/Loading";
import ViewPost from "@/components/ViewPost";

import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const [post, setPost] = useState(null);
  const postId = searchParams.get("postId");
  // alert(postId);
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(`/api/post/${postId}`);
        const data = await response.json();
        setPost(data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getPost();
  }, [searchParams]);

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ViewPost post={post} />
    </Suspense>
  );
}
