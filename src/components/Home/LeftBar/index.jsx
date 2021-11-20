import React from "react";
import {useRootContext} from "../../../context";
import {Link} from "react-router-dom";

const LeftBar = () => {
  const {
    state: {user},
  } = useRootContext();
  return (
    <div
      className="w-96 hidden lg:block h-full overflow-y-auto p-10"
      style={{background: "#141214"}}
    >
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src={user?.photo}
          alt=""
        />
        <p>{user?.username}</p>
        <Link to={`/${user?.username}`}>
          <button className="outline-none focus:ring ring-1 px-5 my-4 py-1 hover:bg-blue-500 rounded-full">
            View Profile
          </button>
        </Link>
      </div>

      <div>
        <h1 className="text-gray-400 border-b-2 border-gray-400 py-1 text-center">
          Your Recent Activities
        </h1>
      </div>
    </div>
  );
};

export default LeftBar;
