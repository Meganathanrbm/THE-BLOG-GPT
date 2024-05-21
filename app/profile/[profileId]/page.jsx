"use client";

import ViewProfile from "@/components/ViewProfile";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { data: session } = useSession();
  const params = useParams();
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState(null);

  useEffect(() => {
    const loginUser = session?.user.id;
    const profileUser = params.profileId;
    let isUser = false;
    if (loginUser === profileUser) {
      isUser = true;
    }
    setIsMyProfile(isUser);
  }, [session]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/user/${params.profileId}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    const getPost = async () => {
      try {
        const response = await fetch(`/api/post`);
        const data = await response.json();
        const filteredPost = data.filter(
          (post) => post.creator._id === params.profileId
        );
        setUserPosts(filteredPost);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    getPost();
  }, []);
  return (
    <ViewProfile
      userData={userData}
      userPosts={userPosts}
      isMyProfile={isMyProfile}
    />
  );
};

export default Page;
