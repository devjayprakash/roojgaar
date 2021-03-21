import React, { useState } from "react";
import close from "./close.png";

const Popup = ({ setState, className }) => {
  return (
    <div
      className={
        "h-screen w-screen flex justify-center items-center fade1h " + className
      }
    >
      <div className="h-2/3 w-2/3 shadow-xl rounded-3xl bg-white">
        <div className="flex justify-end w-full">
          <img
            onClick={() => {
              setState(false);
            }}
            src={close}
            width="40px"
            height="40px"
            alt="close"
            className="m-3 rounded-full hover:shadow-lg p-2"
          />
        </div>
        <div className="w-full h-2/3 flex flex-col justify-between items-center">
          <h1 className="text-4xl font-bold">Create New Hire</h1>
          <input
            style={{
              borderWidth: "1px",
            }}
            className="border-gray-400 rounded-md p-3"
            type="text"
            name="title"
            placeholder="Title"
            id=""
          />
          <input
            style={{
              borderWidth: "1px",
            }}
            className="border-gray-400 rounded-md p-3"
            type="text"
            name="desc"
            placeholder="Descryption"
            id=""
          />
          <input
            style={{
              borderWidth: "1px",
            }}
            className="border-gray-400 rounded-md p-3"
            type="text"
            name="rate"
            placeholder="Amount per Day"
            id=""
          />
          <input
            style={{
              borderWidth: "1px",
            }}
            className="border-gray-400 rounded-md p-3"
            type="number"
            name="amount"
            min="1"
            defaultValue={1}
          />
          <div className="bg-pink-500 font-bold py-2 px-3 rounded-md text-white cursor-pointer upd">
            Create Hire
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
