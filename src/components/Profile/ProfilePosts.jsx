import React, {useState, useEffect} from "react";
import ProfilePost from "./ProfilePost";
const ProfilePosts = ({showPosts, savedPosts, profileUser}) => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    let isMount = true;
    fetch(`/post/userPosts/${profileUser._id}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        if (isMount) {
          setposts(data.posts);
          setTimeout(() => {
            isMount = false;
          }, 100);
        }
      });

    return () => {
      isMount = false;
    };
  }, [posts, profileUser]);

  return (
    <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 2xl:max-w-screen-xl mx-auto">
      {showPosts === "Posts" &&
        posts?.map((p) => <ProfilePost key={p._id} post={p} />)}

      {showPosts === "Saved" &&
        savedPosts?.map((p) => <ProfilePost key={p._id} post={p} />)}
    </div>
  );
};

export default ProfilePosts;
