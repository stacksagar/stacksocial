import React from "react";
import {Link} from "react-router-dom";

const SearchResults = ({setShowSearchResults, searchUsers}) => {
  return (
    <div className="w-full flex flex-col space-y-7 p-5 z-50 bg-black ring-1 rounded-b text-white absolute  top-full mt-2 inset-x-0 mx-auto">
      {searchUsers?.map((user, i) => (
        <Link to={`/${user?.username}`} key={i}>
          <div
            onClick={() => setShowSearchResults(false)}
            className="flex space-x-2 items-center justify-start"
          >
            <img
              alt=""
              src={user?.photo}
              className="w-8 h-8 rounded-full bg-white"
            />
            <p>{user?.displayName || user?.username}</p>
          </div>
        </Link>
      ))}
      <button
        onClick={() => setShowSearchResults(false)}
        className="px-3 py-1 bg-red-500 rounded focus:ring"
      >
        Close
      </button>
    </div>
  );
};

export default SearchResults;
