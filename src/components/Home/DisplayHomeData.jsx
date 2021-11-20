import React, {useEffect, useState} from "react";
import Post from "./Post";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import NewPost from "./NewPost";
import keys from "../utilities/keys";
import {useRootContext} from "../../context";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const {
    state: {fetchPosts},
  } = useRootContext();

  useEffect(() => {
    fetch(keys.BACKEND_URL + "/post/all", {
      method: "get",
      authorization: "Bearer " + localStorage.getItem("stackmedia_token"),
    })
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch((e) => console.log(e));
  }, [fetchPosts]);

  return (
    <>
      <LeftBar />
      <div className="w-full h-full flex flex-col space-y-10 overflow-y-auto p-10">
        <NewPost />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
      <RightBar />
    </>
  );
};

export default Home;
