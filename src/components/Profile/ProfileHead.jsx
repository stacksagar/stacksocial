import React from "react";
import Button from "../utilities/Button";
import {Link} from "react-router-dom";
import {useRootContext} from "../../context";

const ProfileHead = () => {
  const {
    state: {user},
  } = useRootContext();
  return (
    <div className="flex items-start justify-center space-x-5 bg-gray-800 p-8 rounded-b-lg">
      <div className="w-28 h-28 ring-4 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover object-center "
          src={user?.photo}
          alt=""
        />
      </div>

      <div className="flex flex-col space-y-5 w-80">
        <div className="flex justify-between space-x-5">
          <h3 className="font-semibold">{user?.username}</h3>
          <Link to="/profile/edit">
            <Button bg="bg-pink-500" text="Edit Profile" />
          </Link>
        </div>

        <div className="flex justify-between space-x-5 ">
          <p className="flex">
            Posts
            <b className="ml-1 font-medium text-blue-300 cursor-pointer">199</b>
          </p>
          <p className="flex">
            Followers
            <b className="ml-1 font-medium text-blue-300 cursor-pointer">
              9.2k
            </b>
          </p>
          <p className="flex">
            Following
            <b className="ml-1 font-medium text-blue-300 cursor-pointer">22</b>
          </p>
        </div>

        <p className="text-sm font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          provident accusantium velit id dolores, repellat quos non neque nam
          vitae perferendis nulla!
        </p>

        <div className="text-blue-300 flex space-x-5">
          <a href="/">Website</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
