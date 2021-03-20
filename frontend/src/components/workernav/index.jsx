import React from "react";
import { NavLink } from "react-router-dom";

const WorkerNav = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex justify-between w-52 m-3">
          <NavLink
            style={{
              textUnderlineOffset: ".5rem",
            }}
            activeClassName="underline"
            to="/workerhome"
            className="text-xl text-purple-700"
          >
            Home
          </NavLink>
          <NavLink
            style={{
              textUnderlineOffset: ".5rem",
            }}
            activeClassName="underline"
            to="/workercompanies"
            className="text-xl text-purple-700"
          >
            Companies
          </NavLink>
        </div>
      </div>
      <hr
        style={{
          width: "90%",
          marginLeft: "5%",
          marginTop: "-.57rem",
        }}
      />
    </>
  );
};

export default WorkerNav;
