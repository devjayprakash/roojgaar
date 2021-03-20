import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";

const HomePage = ({ className }) => {
  if (!className) className = "";
  return (
    <div className={"flex w-screen h-screen " + className}>
      <div
        style={{
          borderRadius: "0 0 10rem 0",
        }}
        className="w-2/3 h-4/5 bg-gradient-to-br from-purple-700 to-blue-400"
      >
        <Logo className="m-20" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="w-full text-center text-white text-7xl font-bold">
            X Curiosity
          </h1>
          <br />
          <h3 className="w-full text-center text-white text-3xl">
            One stop solution for all majdurs here.!
          </h3>
          <Link
            to="signup"
            style={{
              backgroundColor: "cyan",
            }}
            className="w-40 py-3 my-20 text-center rounded-full font-bold"
          >
            Register Now
          </Link>
        </div>
      </div>
      <div className="w-1/3">
        <div className="w-full flex justify-center">
          <Link
            to="/login"
            style={{
              backgroundColor: "#ff6767",
            }}
            className="rounded-full px-14 py-3 m-10 text-white cursor-pointere font-bold"
          >
            Login
          </Link>
        </div>
      </div>
      <div
        style={{
          marginLeft: "66%",
          marginTop: "40vh",
        }}
        className="fixed"
      >
        <div className="flex">
          <div
            style={{
              borderWidth: "1px",
            }}
            className="w-36 h-36 bg-white rounded-3xl shadow-2xl border-gray-500 boxes"
          ></div>
          <div
            style={{
              borderWidth: "1px",
            }}
            className="w-32 h-32 mb-4 ml-4 bg-purple-700 rounded-3xl shadow-2xl border-gray-500 boxes"
          ></div>
        </div>
        <div className="flex">
          <div
            style={{
              backgroundColor: "#ff6767",
              borderWidth: "1px",
            }}
            className="w-32 h-32 rounded-3xl shadow-2xl border-gray-500 boxes mt-4 mr-4"
          ></div>
          <div
            style={{
              backgroundColor: "cyan",
              borderWidth: "1px",
            }}
            className="w-36 h-36 bg-purple-700 rounded-3xl shadow-2xl border-gray-500 boxes"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
