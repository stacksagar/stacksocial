import React from "react";
import {useRootContext} from "../../context";

const UnauthUser = () => {
  const {dispatch} = useRootContext();

  const clickHandler = () => {
    dispatch({type: "TOGGLE_REG"});
  };
  return (
    <div className="flex flex-col items-center space-y-5 justify-center">
      <p>
        Please
        <button
          className="mx-1 font-semibold underline text-blue-300"
          onClick={() => {
            clickHandler();
            dispatch({type: "SET_ACTIVE_REG", payload: "Sign Up"});
          }}
        >
          Join
        </button>
        or
        <button
          className="mx-1 font-semibold underline text-blue-300"
          onClick={() => {
            clickHandler();
            dispatch({type: "SET_ACTIVE_REG", payload: "Sign In"});
          }}
        >
          Signin
        </button>
        to explore <b>NewsFeed</b>
      </p>
      <button
        onClick={clickHandler}
        className="text-white border-2 border-white bg-gray-800 hover:bg-gray-200 px-4 py-2 rounded focus:ring hover:text-black"
      >
        Join Now
      </button>
    </div>
  );
};

export default UnauthUser;
