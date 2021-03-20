import React from "react";
import Logo from "../logo";
import searchlogo from "./search.png";

const NavBar = ({ withSearch, className }) => {
  if (!className) className = "";
  return (
    <nav
      className={
        "flex bg-gradient-to-br from-purple-700 to-blue-400 py-3 justify-between " +
        className
      }
    >
      <Logo className="ml-10" />
      {withSearch && (
        <div className="rounded-full flex w-1/2 outline-none">
          <input
            className="px-10 w-full h-full rounded-full outline-none"
            type="search"
            placeholder={"Search for Services"}
          />
          <div className="ml-3 rounded-full cursor-pointer hover:shadow-xl hover:bg-gray-100 p-3 duration-300">
            <img
              src={searchlogo}
              style={{
                maxHeight: "2rem",
              }}
              alt=""
            />
          </div>
        </div>
      )}
      <div className="rounded-xl h-10 px-5 py-2 cursor-pointer text-center mt-1 font-bold text-white mr-10 hover:shadow-xl bg-pink-500 duration-200">
        Logout
      </div>
    </nav>
  );
};

export default NavBar;
