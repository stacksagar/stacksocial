import React from "react";
import RegHead from "./RegHead";
import Signup from "./Signup";
import Signin from "./Signin";
import {useRootContext} from "../../context";
import {XCircleIcon} from "@heroicons/react/outline";

const RemoveRegBtn = ({dispatch}) => (
  <button
    className="absolute right-2 top-2 cursor-pointer hover:bg-red-500 rounded-full"
    onClick={() => dispatch({type: "TOGGLE_REG"})}
  >
    <XCircleIcon className="w-7" />
  </button>
);

const Registration = () => {
  const {
    state: {activeReg},
    dispatch,
  } = useRootContext();
  return (
    <div className="fixed z-50 inset-0 m-auto items-center overflow-y-auto justify-center bg-black bg-opacity-50">
      <div className="w-96 p-5 mx-auto my-10 rounded bg-gray-800 text-white relative">
        <RemoveRegBtn dispatch={dispatch} />

        <RegHead />

        {activeReg === "Sign Up" ? <Signup /> : <Signin />}
      </div>
    </div>
  );
};

export default Registration;
