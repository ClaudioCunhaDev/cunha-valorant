import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex gap-3 bg-slate-300 justify-center w-full p-5 fixed">
      <Link
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        to={"/"}
      >
        Agents
      </Link>
      <Link
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        to={"/maps"}
      >
        Maps
      </Link>
      <Link
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        to={"/weapons"}
      >
        Weapons
      </Link>
    </nav>
  );
};
