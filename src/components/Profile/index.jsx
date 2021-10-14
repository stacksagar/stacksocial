import React, {useState} from "react";
import ProfileHead from "./ProfileHead";
import ProfilePosts from "./ProfilePosts";

const Profile = (props) => {
  console.log(props);
  const [view, setView] = useState("posts");
  const handleView = (e) => setView(e.target.innerText.toLowerCase());

  return (
    <div className="w-full pb-12 h-minus_header overflow-y-auto bg-gray-900">
      <ProfileHead />

      <div className="w-full h-16 border-t border-gray-500 flex items-center justify-center space-x-5">
        <button
          onClick={handleView}
          className={`px-2 py-0.5 rounded ${
            view === "posts" ? "ring" : ""
          } bg-blue-500`}
        >
          Posts
        </button>
        <button
          onClick={handleView}
          className={`px-2 py-0.5 rounded ${
            view === "saved" ? "ring" : ""
          } bg-blue-500`}
        >
          Saved
        </button>
      </div>

      <ProfilePosts />
    </div>
  );
};

export default Profile;
