import React from "react";

import Liked from "../Icons/Liked";
import {Disliked} from "../Icons/Disliked";
import {ChatAltIcon, ShareIcon} from "@heroicons/react/solid";

const ProfilePost = ({post}) => {
  return (
    <div className="w-full bg-gray-800 p-5">
      <p className="overflow-hidden ">{post.body}</p>
      <div className="flex justify-start space-x-5 mt-5">
        <div className="flex items-center space-x-1">
          <Liked w="w-4" />
          <small> {post?.likes?.length} </small>
        </div>
        <div className="flex items-center space-x-1">
          <Disliked w="w-4" />
          <small> {post?.dislikes?.length} </small>
        </div>
        <div className="flex items-center space-x-1">
          <ChatAltIcon className="w-4 text-blue-400" />
          <small> {post?.comments?.length} </small>
        </div>
        <div className="flex items-center space-x-1">
          <ShareIcon className="w-4 text-blue-400" />
          <small> {post?.share?.length || 0} </small>
        </div>
      </div>

      {/* <button className="w-28 text-xs block mt-5 py-2 focus:ring rounded outline-none mx-auto bg-blue-600">
        View Post
      </button> */}
    </div>
  );
};

export default ProfilePost;
