import React from "react";

const BlogPost_Skelotan = () => {
  return (
    <section className="flex w-full sm:w-[390px] rounded-md max-h-max gap-2 mb-6 flex-col animate-pulse">
      {/* Image Skeleton */}
      <div className="overflow-hidden rounded-md shrink-0 h-[250px] lg:w-[390px] w-full sm:w-auto">
        <div className="skeloten_loading bg-gray-200 dark:bg-gray-700 h-full lg:h-[220px] lg:w-[390px] w-full sm:w-auto rounded-md"></div>
      </div>

      {/* Content Skeleton */}
      <div className="content w-full">
        {/* Date Skeleton */}
        <div className="flex items-center gap-3 mb-3">
          <div className="skeloten_loading w-16 h-3 rounded"></div>
          <div className="skeloten_loading w-20 h-3 rounded"></div>
        </div>

        {/* Title Skeleton */}
        <div className="skeloten_loading w-2/3 h-6 rounded mb-3"></div>

        {/* Paragraph Skeleton */}
        <div className="my-5 space-y-3">
          <div className="skeloten_loading w-5/6 h-4 rounded"></div>
          <div className="skeloten_loading w-5/6 h-4 rounded"></div>
          <div className="skeloten_loading w-5/6 h-4 rounded"></div>
        </div>

        {/* Tags Skeleton */}
        <div className="flex gap-2 mt-2 flex-wrap">
          <div className="skeloten_loading w-16 h-6 rounded-full"></div>
          <div className="skeloten_loading w-20 h-6 rounded-full"></div>
          <div className="skeloten_loading w-14 h-6 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost_Skelotan;
