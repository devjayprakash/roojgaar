import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "./notfound.png";

const NotFoundPage = ({ className }) => {
  if (!className) className = "";
  return (
    <div
      className={
        "w-full flex h-full justify-center items-center py-52 text-center px-16 " +
        className
      }
    >
      <div className="max-w-lg">
        <img
          className="rounded-2xl mb-10"
          draggable={false}
          src={NotFoundImg}
          alt=""
          srcset=""
        />
        <h1 className="text-6xl font-bold">Oops, an ERROR occured!</h1>
        <br />
        <h3 className="text-5xl">This is not the page You were looking for.</h3>
      </div>
      <br />
      <hr
        style={{
          borderWidth: "2px",
          height: "50vh",
        }}
        className="rounded-full mx-7"
      />
      <br />
      <div>
        <h4 className="text-xl">Here are some helpful pages instead:</h4>
        <ul className="">
          <li>
            <Link className="text-pink-600 text-lg" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-pink-600 text-lg" to="/signup">
              Sign Up
            </Link>
          </li>
          <li>
            <Link className="text-pink-600 text-lg" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotFoundPage;
