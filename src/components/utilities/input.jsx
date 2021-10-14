import React from "react";

const Input = ({type, placeholder, name, notLabel, error, ...all}) => (
  <div className="w-full">
    {!notLabel && (
      <label
        className="capitalize mb-1 text-xs font-medium mt-3 inline-block"
        htmlFor={name}
      >
        {name}
      </label>
    )}
    <input
      {...all}
      className="rounded px-3 w-full py-1 bg-gray-700 text-white ring-1 focus:ring outline-none focus:bg-black"
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
    />
    <small className="text-red-400 text-xs">{error}</small>
  </div>
);
export default Input;
