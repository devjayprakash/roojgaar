import React from "react";
import { useParams } from "react-router";
import NavBar from "../../components/navbar";
import defsrc from "./logo192.png";

const StatsPage = () => {
  let { id } = useParams();
  return (
    <div className="min-h-screen h-full w-screen">
      <NavBar />
      <div className="p-20 flex">
        <img
          src={defsrc}
          alt=""
          style={{
            borderWidth: "1px",
          }}
          className="border-gray-400 mx-5 bg-white"
        />
        <div>
          <div className="text-2xl font-bold">50 Electricians Jamshedpur</div>
          <br />
          <div className="max-w-2xl">
            Some Descryption ghcgcfgcyj ghcgcfgcyj ghcgcfgcyj ghcgcfgcyj
            ghcgcfgcyj ghcgcfgcyj ghcgcfgcyj
          </div>
          <br />
          <div className="font-bold text-pink-600">$400/day</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default StatsPage;
