import React from "react";
import {useRootContext} from "../../context";

const Button = ({text, activeReg, dispatch}) => (
  <button
    onClick={() => dispatch({type: "SET_ACTIVE_REG", payload: text})}
    style={{marginBottom: "-1.5px"}}
    className={`${
      activeReg === text ? "" : "border-transparent"
    } border-b-2 pb-1`}
  >
    {text}
  </button>
);

const RegHead = () => {
  const {
    state: {activeReg},
    dispatch,
  } = useRootContext();

  return (
    <header>
      <h1 className="text-center text-lg font-semibold py-5">
        {activeReg === "Sign Up" ? (
          <>
            Join
            <span className="bg-white text-black mx-1 px-2 rounded">
              <span className="text-blue-500">stack</span>media
            </span>
            Today
          </>
        ) : (
          <>
            Signin
            <span className="bg-white text-black mx-1 px-2 rounded">
              <span className="text-blue-500">stack</span>media
            </span>
          </>
        )}
      </h1>

      <div className="border-b text-sm font-semibold border-gray-500 flex justify-start space-x-5">
        <Button activeReg={activeReg} dispatch={dispatch} text="Sign In" />
        <Button activeReg={activeReg} dispatch={dispatch} text="Sign Up" />
      </div>
    </header>
  );
};

export default RegHead;
