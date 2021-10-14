import React from "react";
import Like from "../../Icons/Like";
import Share from "../../Icons/Share";
import Save from "../../Icons/Save";
import {Dislike} from "../../Icons/Dislike";
import Liked from "../../Icons/Liked";
import {Disliked} from "../../Icons/Disliked";
import {useRootContext} from "../../../context";

const PostReact = ({post}) => {
  const {
    dispatch,
    state: {user},
  } = useRootContext();

  const likeAndDislikeHandler = (action, _id) => {
    fetch(`/post/${action}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("stackmedia_token"),
      },
      body: JSON.stringify({
        _id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch({type: "FETCH_POSTS"});
      })

      .catch((error) => console.log(error));
  };

  return (
    <div className="flex space-x-5 transform text-xs text-gray-200">
      <button
        onClick={() => likeAndDislikeHandler("like", post?._id)}
        className="flex space-x-1 items-center"
      >
        {post?.likes.indexOf(user._id) > -1 ? <Liked /> : <Like />}
        <span>{post?.likes.length}</span>
      </button>

      <button
        onClick={() => likeAndDislikeHandler("dislike", post?._id)}
        className="flex space-x-1 items-center"
      >
        {post?.dislikes.indexOf(user._id) > -1 ? <Disliked /> : <Dislike />}
        <span>{post?.dislikes.length}</span>
      </button>

      <button className="flex space-x-1 items-center">
        <Share />
        <span>Share</span>
      </button>

      <button className="flex space-x-1 items-center">
        <Save />
        <span>Save</span>
      </button>
    </div>
  );
};

export default PostReact;
