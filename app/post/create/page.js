"use client";
import Form from "@/components/Form";
import { generatePostAction } from "@/redux/slice/generatePost";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const generatePost = useSelector((state) => state.generatePost.post);
  const router = useRouter();
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    content: "",
    slug: "",
    image: "",
    tag: "",
  });

  //for ai generated post
  useEffect(() => {
    {
      generatePost &&
        setPost({
          ...post,
          title: generatePost.title,
          content: generatePost.content,
        });
    }
  }, [generatePost]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/post/create", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          title: post.title,
          content: post.content,
          slug: post.slug,
          image: post.image,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        dispatch(generatePostAction.setPost(null));
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      name="Create"
      post={post}
      setPost={setPost}
      handleSubmit={handleSubmit}
      submitting={submitting}
    />
  );
};

export default page;
