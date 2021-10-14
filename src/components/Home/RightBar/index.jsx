import React from "react";
import YourCommunity from "./YourCommunity";
import SuggestedCommunity from "./SuggestedCommunity";

const index = () => {
  return (
    <div
      className="w-80 hidden md:block h-full p-5"
      style={{background: "#14111b"}}
    >
      <YourCommunity />
      <br />
      <SuggestedCommunity />
    </div>
  );
};

export default index;
