import React from "react";

const Body = ({post: {thumbnail, body}}) => {
  return (
    <div className="py-6 flex flex-col space-y-3">
      <div>{body}</div>
      <img className="w-full rounded" src={thumbnail} alt="" />
    </div>
  );
};

export default Body;
