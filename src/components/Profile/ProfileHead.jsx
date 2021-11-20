import React, {useEffect, useState} from "react";
import Button from "../utilities/Button";
import {PencilAltIcon} from "@heroicons/react/outline";
import {Link} from "react-router-dom";
import keys from "../utilities/keys";

const ProfileHead = ({authUser, profileUser, isLoggedInUser, dispatch}) => {
  const [isFollwing, setIsFollowing] = useState(false);
  useEffect(() => {
    if (!isLoggedInUser) {
      setIsFollowing(profileUser?.followers.includes(authUser?._id));
    }
  }, [profileUser, isLoggedInUser, authUser]);

  const followHandler = () => {
    fetch(keys.BACKEND_URL + "/user/follow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("stackmedia_token"),
      },
      body: JSON.stringify({
        followID: profileUser._id,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        dispatch({type: "FETCH_POSTS"});
      })
      .catch(console.log);
  };

  const unfollowHandler = () => {
    fetch(keys.BACKEND_URL + "/user/unfollow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("stackmedia_token"),
      },
      body: JSON.stringify({
        followID: profileUser._id,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        dispatch({type: "FETCH_POSTS"});
      })
      .catch(console.log);
  };

  return (
    <div className="flex items-start justify-center space-x-5 bg-gray-800 p-8 rounded-b-lg">
      <div className="w-10 h-10 ring-4 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover object-center "
          src={profileUser?.photo}
          alt=""
        />
      </div>

      <div className="flex flex-col space-y-5 w-80">
        <div className="flex justify-between space-x-5">
          <h3 className="font-semibold">
            {profileUser?.displayName || profileUser?.username}
          </h3>
          {isLoggedInUser ? (
            <Link to="/profile/edit">
              <Button bg="bg-pink-500" text="Edit Profile" />
            </Link>
          ) : isFollwing ? (
            <Button
              bg="bg-blue-500"
              onClick={unfollowHandler}
              text="Unfollow"
            />
          ) : (
            <Button bg="bg-blue-500" onClick={followHandler} text="Follow" />
          )}
        </div>

        <div className="flex justify-between space-x-5 ">
          <p className="flex">
            Posts
            <b className="ml-1 font-medium text-blue-300 cursor-pointer">
              {profileUser?.posts.length}
            </b>
          </p>
          <p className="flex">
            Followers
            <b className="ml-1 font-medium text-blue-300 cursor-pointer">
              {profileUser?.followers.length}
            </b>
          </p>
          <p className="flex">
            Following
            <b className="ml-1 font-medium text-blue-300 cursor-pointer">
              {profileUser?.following.length}
            </b>
          </p>
        </div>

        <p className="text-sm font-normal flex">
          {profileUser?.bio || "Biodata"}
          {isLoggedInUser && (
            <Link to="/profile/edit">
              <PencilAltIcon className="ml-1 w-3" />
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProfileHead;
