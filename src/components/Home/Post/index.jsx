import React, {useState} from "react";
import PostReact from "./PostReact";
import Body from "./Body";
import PostHeader from "./PostHeader";
import UpdatePost from "./UpdatePost";
import Comments from "./Comments";

const Post = ({post}) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div
      style={{background: "#222222"}}
      className="mx-auto p-5 w-full relative"
    >
      <PostHeader setShowEdit={setShowEdit} post={post} />
      <Body post={post} />
      <PostReact post={post} />
      <UpdatePost post={post} showEdit={showEdit} setShowEdit={setShowEdit} />
      <Comments postID={post?._id} />
    </div>
  );
};

export default Post;
