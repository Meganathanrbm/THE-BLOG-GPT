import Image from "next/image";
import React from "react";
import BlogPost from "./BlogPost";

const ViewProfile = ({ isMyProfile, userData, userPosts }) => {
  return (
    <section className="padding min-h-screen px-6 sm:px-16 md:px-20 lg:px-28 py-3 sm:py-4 bg-white dark:bg-dark-100">
      {/* Title */}
      <h2 className="title_heading ">Profile</h2>
      <p className="text-lg text-slate-500 mt-0">
        Welcome to {isMyProfile ? "Your Personalized " : ""} Profile Page
      </p>
      {/* Profile card */}
      <div className="sm:my-10 my-6 flex sm:gap-20 gap-6 items-start  sm:items-center lg:w-[50%]">
        {/* Profile photo */}
        <Image
          src={userData?.image}
          width={100}
          height={100}
          alt="profile image"
          className=" md:h-[150px] sm:h-[75px]  md:w-[150px] p-1  sm:w-[75px] h-[50px] w-[50px] mt-4 sm:mt-0 rounded-full"
        />
        <div className="">
          <h2 className="capitalize dark:text-white w-full sm:whitespace-nowrap font-semibold mb-2 text-3xl">
            {userData?.username}
          </h2>
          <p className="font-semibold text-gray-500">
            {userData &&
              (isMyProfile
                ? userData?.email
                : userData?.email.slice(0, 3) +
                  "*".repeat(10) +
                  userData?.email.slice(userData?.email.length - 4))}
          </p>
          <p className="capitalize dark:text-white font-semibold my-2 text-2xl">
            {userPosts?.length} <span>Posts</span>
          </p>
        </div>
      </div>
      <hr className="hr" />
      {/* Users Posts */}
      <div className="">
        <h2 className="sub_heading my-4 text-left">All blog posts</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap gap-6 ">
          {userPosts && userPosts.length < 1 && (
            <div className="center h-full w-full">
              <h2 className="text-xl text-slate-500">No Posts</h2>
            </div>
          )}
          {userPosts?.map((post, i) => (
            <BlogPost key={i} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewProfile;
