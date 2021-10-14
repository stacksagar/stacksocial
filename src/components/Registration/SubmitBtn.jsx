import React from "react";

const SubmitBtn = ({text, loading}) => (
  <button
    type="submit"
    className="w-full py-1 bg-gray-600 focus:ring rounded relative"
  >
    {text}
    {loading && (
      <span
        style={{borderTopColor: "transparent"}}
        className="border-4 w-5 h-5 rounded-full block animate-spin absolute inset-y-0 right-5 my-auto"
      />
    )}
  </button>
);

export default SubmitBtn;
