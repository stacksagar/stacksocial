import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-100 flex justify-between px-12 h-header items-center">
      <div className="transform scale-125">
        <Link to="/">
          <span className="text-green-500">stack</span>
          <span className="text-blue-800 text-xs font-semibold">BLOG</span>
        </Link>
      </div>

      <nav className="flex space-x-3 list-none items-center">
        <li>
          <Link to="/"> Dashboard </Link>
        </li>
        <li>
          <Link to="/signup"> Signup </Link>
        </li>
        <li>
          <Link to="/signin"> Signin </Link>
        </li>

        <li className="flex items-center">
          <Link to="/profile">
            <span className="w-8 h-8 block bg-gray-500 rounded-full"></span>
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
