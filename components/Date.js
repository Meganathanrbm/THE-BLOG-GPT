import { formattedDate } from "@/utils/dataFormat";
import React from "react";

const Date = ({ date, creator }) => {
  return (
    <p
      className={`${
        !date ? "skeloten_loading w-52 h-4" : ""
      } font-semibold capitalize  text-[15px] mb-4 text-light-purple `}
    >
      <span className="">{creator?.username}</span>
      {" - "}
      {date && formattedDate(date)}
    </p>
  );
};

export default Date;
