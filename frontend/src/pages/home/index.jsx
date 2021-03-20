import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";

const HomePage = ({ className }) => {
  if (!className) className = "";
  return (
    <div className={"flex w-screen h-screen  fade" + className}>
      <div
        style={{
          borderRadius: "0 0 10rem 0",
        }}
        className="w-2/3 h-5/6  bg-gradient-to-br from-purple-700 to-blue-400"
      >
        <Logo className="m-10 mb-20 fade 2" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="w-full text-center text-white text-7xl font-bold fade2h">
            X Curiosity
          </h1>
          <br />
          <h3 className="w-full text-center text-gray-300 px-5 text-2xl fade2h">
            One stop solution for all majdurs here.!
          </h3>
          <Link
            to="signup"
            style={{
              backgroundColor: "cyan",
            }}
            className="w-40 py-3 shad text-white my-20 text-center rounded-full fade upd font-bold"
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
            className="rounded-full shad px-14 py-3 m-10 text-white cursor-pointere up  font-bold"
          >
            Login
          </Link>
        </div>
      </div>
      <div
        style={{
          marginLeft: "60%",
          marginTop: "30vh",
          zIndex: 0,
          opacity: 0.8,
        }}
        className="fixed"
      >
        <div className="flex">
          <div
            style={{
              borderWidth: "0px",
            }}
            className="w-36 h-36 bg-white rounded-3xl shadow-2xl border-gray-500 boxes"
          ></div>
          <div
            style={{
              borderWidth: "0px",
            }}
            className="w-32 h-32 mb-4 ml-4 bg-purple-700 rounded-3xl shadow-2xl border-gray-500 boxes"
          ></div>
        </div>
        <div className="flex">
          <div
            style={{
              backgroundColor: "#ff6767",
              borderWidth: "0px",
            }}
            className="w-32 h-32 rounded-3xl shadow-2xl border-gray-500 boxes mt-4 mr-4"
          ></div>
          <div
            style={{
              backgroundColor: "cyan",
              borderWidth: "0px",
            }}
            className="w-36 h-36 bg-purple-700 rounded-3xl shadow-2xl border-gray-500 boxes"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
