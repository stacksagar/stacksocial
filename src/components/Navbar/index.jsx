import React, {useState} from "react";
import {SearchIcon, UserIcon} from "@heroicons/react/outline";
import {Link} from "react-router-dom";
import Button from "../utilities/Button";
import SearchInput from "../utilities/SearchInput";
import {useRootContext} from "../../context";
import ToggleUser from "./ToggleUser";

const Navbar = () => {
  const {
    dispatch,
    state: {user},
  } = useRootContext();

  const clickHandler = (e) => {
    dispatch({type: "TOGGLE_REG"});
    dispatch({type: "SET_ACTIVE_REG", payload: e.target.innerText});
  };

  const [showUserToggle, setShowUserToggle] = useState(false);

  return (
    <header className="relative h-header  border-b-2 border-black border-opacity-20 bg-gray-900 flex items-center justify-between px-10">
      <Link
        to="/"
        className="bg-white px-2 py-0.5 rounded flex items-center justify-center"
      >
        <span className="text-lg font-semibold text-blue-700">stack</span>
        <span
          style={{marginTop: "2.5px"}}
          className="text-sm font-semibold text-black"
        >
          MEDIA
        </span>
      </Link>

      <div className="flex">
        <SearchInput type="search" placeholder="Search" />
        <button className="py-1 ring-1 focus:ring px-2 ml-1 rounded-r bg-gray-600 ">
          <SearchIcon className="w-5 text-white" />
        </button>
      </div>

      <div className="flex items-center space-x-2">
        {user ? (
          <>
            <Button text=" Friends " />
            <button
              onClick={() => setShowUserToggle((prev) => !prev)}
              className="p-1 rounded-full hover:bg-gray-800"
            >
              <UserIcon className="w-5 text-white" />
            </button>
          </>
        ) : (
          <>
            <Button onClick={clickHandler} text="Sign In" bg="bg-gray-500" />
            <Button onClick={clickHandler} text="Sign Up" />
          </>
        )}
      </div>

      {showUserToggle && <ToggleUser setShowUserToggle={setShowUserToggle} />}
    </header>
  );
};

export default Navbar;

// unkown.mail.0001@gmail.com
// thisismysecureaccountWith#$
// thisismy9$%
