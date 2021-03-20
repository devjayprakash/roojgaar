import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";

const LoginPage = ({ className }) => {
  if (!className) className = "";
  return (
    <div
      className={
        "fade w-screen h-screen bg-gradient-to-br from-purple-700 to-blue-400 flex flex-col justify-center items-center " +
        className
      }
    >
      <Logo className="mb-32 fade1" />
      <div
        style={{
          background: "rgba( 255, 255, 255, 0.25 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
          borderRadius: "0px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
        className="p-10 flex flex-col items-center justify-center w-1/2 max-w-xl"
      >
        <input
          type={"email"}
          placeholder={"Email ID"}
          className={
            "border-2 border-gray-400 px-3 py-2 rounded-lg w-full my-2 fade2"
          }
        />
        <input
          type={"password"}
          placeholder={"Password"}
          className={
            "fade2 border-2 border-gray-400 px-3 py-2 rounded-lg w-full my-2"
          }
        />
        <div
          style={{
            backgroundColor: "cyan",
          }}
          className="rounded-full  fade2 w-full text-center up text-white font-bold text-xl my-2 py-2 hover:bg-blue-500 cursor-pointer"
        >
          Login
        </div>
        don't have an account yet?
        <Link
          className="text-white font-bold hover:text-red-400 duration-100"
          to="/signup"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
