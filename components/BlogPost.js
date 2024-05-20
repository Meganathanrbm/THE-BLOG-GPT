import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tags from "./Tags";
import Date from "./Date";

const BlogPost = ({ title, _id, creator, content, tag, image, date }) => {
  return (
    <section
      className={`flex sm:gap-12 gap-8 my-4 lg:flex-row flex-col ${
        !title && "animate-pulse"
      }`}
    >
      <div className="image center  h-[250px]  md:h-[320px]  shrink-0 lg:max-w-[480px] w-auto">
        <Image
          src={image ? image : ""}
          width={1080}
          height={520}
          alt="post-image"
          className={`${
            image ? "" : "bg-gray-200 dark:bg-gray-700 "
          } h-auto w-auto`}
        />
      </div>
      <div className="content w-full">
        {/* Date */}
        <Date date={date} creator={creator} />
        <Link
          href={`/post?postId=${_id}`}
          className={`${
            title ? " " : "skeloten_loading w-2/3 h-6"
          }  text-[24px] cursor-pointer line-clamp-1 capitalize mb-3 text-black dark:text-white font-semibold`}
        >
          {title}
        </Link>
        {content ? (
          <p className="para line-clamp-5"> {content} </p>
        ) : (
          <div className="my-5">
            <p className="skeloten_loading w-5/6 my-4 h-4"></p>
            <p className="skeloten_loading w-5/6 my-4 h-4"></p>
            <p className="skeloten_loading w-5/6 my-4 h-4"></p>
            <p className="skeloten_loading w-5/6 my-4 h-4"></p>
            <p className="skeloten_loading w-3/6 my-4 h-4"></p>
          </div>
        )}
        <Tags tag={tag} />
      </div>
    </section>
  );
};

export default BlogPost;
