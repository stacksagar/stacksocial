import React, {useState, useEffect} from "react";
import ProfilePost from "./ProfilePost";
const ProfilePosts = () => {
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    let isMount = true;
    fetch("/post/my-posts", {
      method: "get",
      headers: {
        authorization: "Bearer " + localStorage.getItem("stackmedia_token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (isMount) {
          setMyPosts(data.posts);
        }
      });

    return () => {
      isMount = false;
    };
  }, [myPosts]);

  return (
    <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 2xl:max-w-screen-xl mx-auto">
      {myPosts.reverse().map((p) => (
        <ProfilePost key={p._id} post={p} />
      ))}
    </div>
  );
};

export default ProfilePosts;
