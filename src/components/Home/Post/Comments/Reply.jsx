import React from "react";
import {Link} from "react-router-dom";

const Reply = ({username, reply}) => {
  return (
    <div className="flex space-x-2 ml-8">
      <Link to={`/${username}`}>
        <img
          src={reply?.user?.photo}
          className="w-8 h-8 rounded-full ring-1"
          alt=""
        />
      </Link>
      <div className="w-44 h-auto bg-gray-700 px-2 py-1">
        <Link to={`/${username}`}>
          <p className="text-sm text-blue-300 hover:underline">
            {reply?.user?.username}
          </p>
        </Link>
        <p className="text-xs p-1">
          <span className="py-0.5 px-1 rounded bg-blue-600">@{username}</span>{" "}
          {reply?.body}
        </p>
      </div>
    </div>
  );
};

export default Reply;
