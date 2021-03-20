import React from "react";
import { useParams } from "react-router";
import NavBar from "../../components/navbar";
import defsrc from "./logo192.png";

let Person = ({ name, src }) => {
  return (
    <div className="comp">
      <div className="left">
        <img
          src={src}
          style={{
            borderWidth: "1px",
          }}
          className="h-11 mr-1 rounded-full"
        />
        <div className="name">{name}</div>
      </div>
      <div className="right">
        <div className="stats" />
        <div className="rounded-full p-3 mr-3 bg-red-500" />
        <div className="expand" />
      </div>
    </div>
  );
};

const StatsPage = () => {
  let { id } = useParams();
  return (
    <div className="min-h-screen h-full w-screen bg-gray-100  flex-col justify-center items-center">
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
      <div className="w-4/5 bg-white mx-20">
        <div className="p-5 flex flex-wrap justify-between">
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
          <Person src={defsrc} name="Ram Das Prasad" />
        </div>
        <div className="flex w-full justify-center">
          <div className="bg-green-500 h-10 px-3 rounded-md text-center py-2 mr-2">
            Hire All
          </div>
          <div className="bg-red-500 h-10 px-3 rounded-md text-center py-2">
            Decline All
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
