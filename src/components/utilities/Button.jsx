import React from "react";

const Button = ({text, bg, className, Icon, ...all}) => {
  return (
    <button
      {...all}
      className={` ${
        bg ? bg : "bg-purple-600"
      } text-white font-medium text-sm px-3 py-1 rounded focus:ring flex items-center ${className}`}
    >
      {Icon} {text}
    </button>
  );
};

export default Button;
