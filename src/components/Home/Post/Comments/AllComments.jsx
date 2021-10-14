import React from "react";
import Comment from "./Comment";

const AllComments = ({comments}) => {
  return (
    <div className="flex flex-col space-y-3 mt-5">
      {comments?.map((comment, i) => {
        return <Comment key={i} comment={comment} />;
      })}

      <div className="flex justify-between w-full pt-5 text-xs">
        <p className="cursor-pointer hover:underline">View more comments...</p>
        <p>1 of 99</p>
      </div>
    </div>
  );
};

export default AllComments;
