import React, {useState} from "react";
import Like from "../../Icons/Like";
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

  const [postSaved, setPostSaved] = useState(
    user.savedPosts.includes(post._id)
  );
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

  const savePostHandler = () => {
    fetch("/user/savePost", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("stackmedia_token"),
      },
      body: JSON.stringify({
        postID: post._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.doc.savedPosts.includes(post._id)) {
          setPostSaved(true);
          console.log("saved");
        } else {
          setPostSaved(false);
          console.log("unsaved");
        }
        dispatch({type: "FETCH_POSTS"});
      })
      .catch(console.log);
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

      <button
        onClick={savePostHandler}
        className={`flex space-x-1 items-center ${
          postSaved && "text-blue-300"
        }`}
      >
        <Save saved={postSaved} />
        <span>{postSaved ? "Saved" : "Save"}</span>
      </button>
    </div>
  );
};

export default PostReact;
