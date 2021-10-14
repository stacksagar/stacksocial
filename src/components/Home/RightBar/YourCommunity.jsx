import React from "react";

const YourCommunity = () => {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-300 text-center border-b-2 py-1 tracking-widest border-gray-500">
        Your Community
      </h2>
      <div className="flex items-start justify-start space-x-3 py-3">
        <div className="w-6 h-6 rounded-full bg-gray-500 ring"></div>
        <div className="relative">
          <p className="text-sm"> The Tech </p>
          <button className="text-xs absolute left-0 -bottom-4">View</button>
        </div>
      </div>

      <div className="flex items-start justify-start space-x-3 py-3">
        <div className="w-6 h-6 rounded-full bg-gray-500 ring"></div>
        <div className="relative">
          <p className="text-sm truncate overflow-ellipsis ">
            Programming Challenges
          </p>
          <button className="text-xs absolute left-0 -bottom-4">View</button>
        </div>
      </div>
    </div>
  );
};

export default YourCommunity;
