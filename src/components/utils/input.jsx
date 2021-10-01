import React from "react";

const Input = ({
  name,
  type,
  placeholder,
  optional,
  parentClass,
  error,
  ...all
}) => {
  return (
    <div className={parentClass}>
      <label className="text-sm font-semibold mb-1" htmlFor={name}>
        {placeholder} {!optional && "*"}
      </label>
      <div className="bg-black relative">
        <input
          {...all}
          className={`ring-1 focus:ring-2 ${
            error ? `ring-red-800` : `ring-green-500`
          } w-full box-border px-3 py-2 bg-gray-100 rounded ring-gray-400 outline-none`}
          type={type || "text"}
          id={name}
          name={name}
          placeholder={placeholder}
        />
        {error && (
          <p className="absolute right-2 text-red-800 top-0 bottom-0 my-auto text-2xl flex items-center">
            !
          </p>
        )}
      </div>
      <small className="text-red-600 m-0 p-0 font-semibold">{error}</small>
    </div>
  );
};

export default Input;
