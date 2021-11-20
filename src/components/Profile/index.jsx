import React, {useEffect, useState} from "react";
import ProfileHead from "./ProfileHead";
import ProfilePosts from "./ProfilePosts";
import {useParams} from "react-router-dom";
import {useRootContext} from "../../context";

const Profile = (props) => {
  const {
    dispatch,
    state: {user, fetchPosts},
  } = useRootContext();
  const {username} = useParams();
  const [profileUser, setProfileUser] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);
  const [showPosts, setShowPosts] = useState("Posts");
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    if (user?._id === profileUser?._id) {
      setIsLoggedInUser(true);
    } else {
      setIsLoggedInUser(false);
    }
  }, [user, profileUser]);

  useEffect(() => {
    fetch(`/user/${username}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then(({user}) => {
        setSavedPosts(user.savedPosts);
        setIsFetching(false);
        setProfileUser(user);
      })
      .catch(console.log);
  }, [username, fetchPosts]);

  const [view, setView] = useState("posts");
  const handleView = (e) => setView(e.target.innerText.toLowerCase());

  if (isFetching) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading
      </div>
    );
  }

  if (!profileUser) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        User Doesn't exist!
      </div>
    );
  }

  return (
    <div className="w-full pb-12 h-minus_header overflow-y-auto bg-gray-900">
      <ProfileHead
        dispatch={dispatch}
        authUser={user}
        profileUser={profileUser}
        isLoggedInUser={isLoggedInUser}
      />

      <div className="w-full h-16 border-t border-gray-500 flex items-center justify-center space-x-5">
        <button
          onClick={(e) => {
            handleView(e);
            setShowPosts("Posts");
          }}
          className={`px-2 py-0.5 rounded ${
            view === "posts" ? "ring" : ""
          } bg-blue-500`}
        >
          Posts
        </button>
        {isLoggedInUser && (
          <button
            onClick={(e) => {
              handleView(e);
              setShowPosts("Saved");
            }}
            className={`px-2 py-0.5 rounded ${
              view === "saved" ? "ring" : ""
            } bg-blue-500`}
          >
            Saved
          </button>
        )}
      </div>

      <ProfilePosts
        savedPosts={savedPosts}
        showPosts={showPosts}
        profileUser={profileUser}
      />
    </div>
  );
};

export default Profile;
