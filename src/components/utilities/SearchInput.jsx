import React from "react";

const Input = ({type, placeholder}) => (
  <input
    className="rounded-l px-3 py-1 bg-gray-700 text-white ring-1 focus:ring outline-none focus:bg-black"
    type={type}
    placeholder={placeholder}
  />
);
export default Input;
