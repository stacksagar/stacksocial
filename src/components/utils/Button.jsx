import React from "react";

const Button = ({ text, className, loading }) => {
  return (
    <button
      className={`relative p-2 bg-blue-500 text-white rounded outline-none focus:ring ${className}`}
    >
      {text}
      {loading && (
        <span
          style={{ borderBottomColor: "#222" }}
          className="w-6 absolute top-0 bottom-0 right-12 my-auto rounded-full block h-6 border-2 border-white animate-spin "
        />
      )}
    </button>
  );
};

export default Button;
