"use client";

import Feed from "@/components/Feed";
import { darkModeActions } from "@/redux/slice/DarkMode";
import { fetchAllPosts } from "@/redux/slice/post";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    //check for device default theme dark or light
    //if it is dark set theme dark
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatch(darkModeActions.toggleDarkMode(true));
    }
  }, []);
  useEffect(() => {
    dispatch(fetchAllPosts("/api/post"));
  }, [dispatch]);
  return (
    <section className="app center bg-white dark:bg-dark-100">
      <h1 className="text-5xl sm:text-7xl primary text-center md:text-9xl mt-6 uppercase font-bold text-black dark:text-white">
        The blog GPT
      </h1>
      <p className="my-2 mb-3 capitalize text-black dark:text-white text-center text-sm sm:text-md font-medium">
        We smash you with the information that will make your life easier
        Really.
      </p>
      <input
        type="text"
        name="search"
        placeholder="Search for a Blogs..."
        className="mb-8 text-sm  font-medium focus:ring-0 border-black dark:border-white dark:text-white  
        border bg-transparent shadow-lg 
        rounded-md sm:w-96 focus:outline-none mt-2 focus:border-black pl-4 pr-12 py-2"
        id=""
      />
      <hr className="hr" />
      <Feed />
    </section>
  );
}
