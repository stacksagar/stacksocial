import React, {useEffect, useState} from "react";
import {SearchIcon, UserIcon, UsersIcon} from "@heroicons/react/outline";
import {Link} from "react-router-dom";
import Button from "../utilities/Button";
import SearchInput from "../utilities/SearchInput";
import {useRootContext} from "../../context";
import ToggleUser from "./ToggleUser";
import SearchResults from "./SearchResults";
import keys from "../utilities/keys";

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
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!showSearchResults) {
      setSearchTerm("");
    }
  }, [showSearchResults]);

  const searchHandler = ({target: {value}}) => {
    setSearchTerm(value);
    if (value.length > 0) {
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }

    fetch(keys.BACKEND_URL + `/user/search/${value}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.users);
      })
      .catch(console.log);
  };

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

      <div className="flex relative">
        <SearchInput
          type="search"
          value={searchTerm}
          placeholder="Search"
          onChange={searchHandler}
        />
        <button className="py-1 ring-1 focus:ring px-2 ml-1 rounded-r bg-gray-600 ">
          <SearchIcon className="w-5 text-white" />
        </button>

        {showSearchResults && (
          <SearchResults
            setShowSearchResults={setShowSearchResults}
            searchUsers={searchResults}
          />
        )}
      </div>

      <div className="flex items-center space-x-2">
        {user ? (
          <>
            <Button
              Icon={<UsersIcon className="w-3 mr-1" />}
              text="Communities"
            />
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
