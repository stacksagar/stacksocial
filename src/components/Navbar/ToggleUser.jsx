import React from "react";
import {
  CogIcon,
  UsersIcon,
  LogoutIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {useRootContext} from "../../context";
import {Link} from "react-router-dom";

const ToggleUser = ({setShowUserToggle}) => {
  const {
    dispatch,
    state: {user},
  } = useRootContext();

  const hideToggleBar = () => setShowUserToggle(false);

  const logout = () => {
    hideToggleBar();
    dispatch({type: "SET_USER", payload: null});
    localStorage.removeItem("stackmedia_token");
  };

  return (
    <div className="absolute top-full right-2 w-60 border-2 border-t-0 border-black border-opacity-20 z-40 bg-gray-900 p-5 rounded-b-lg">
      <Link to="/profile">
        <div className="flex justify-start space-x-3 items-center">
          <img className="w-11 h117 rounded" src={user?.photo} alt="" />
          <div>
            <p className="text-sm font-semibold">
              {user?.displayName || "John Doe"}
            </p>
            <p className="text-xs font-light">@{user?.username}</p>
          </div>
        </div>
      </Link>

      <div className="w-full h-0.5 bg-gray-500 my-7" />

      <Link to="/profile/edit">
        <button className="flex p-2 hover:bg-gray-800 w-full rounded justify-start items-center space-x-2">
          <CogIcon className="w-6" />
          <span>Settings</span>
        </button>
      </Link>

      <Link to="/friends">
        <button className="flex p-2 hover:bg-gray-800 w-full rounded justify-start items-center space-x-2">
          <UsersIcon className="w-6" />
          <span>Friends</span>
        </button>
      </Link>

      <Link to="/communities">
        <button className="flex p-2 hover:bg-gray-800 w-full rounded justify-start items-center space-x-2">
          <UserGroupIcon className="w-6" />
          <span>Communities</span>
        </button>
      </Link>

      <div className="w-full h-0.5 bg-gray-500 my-7" />

      <button
        onClick={logout}
        className="flex p-2 hover:bg-gray-800 w-full rounded justify-start items-center space-x-2"
      >
        <LogoutIcon className="w-6" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default ToggleUser;
