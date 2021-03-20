import React from "react";
import Card from "../../components/maincard";
import Navbar from "../../components/navbar";
import OurNav from "../../components/workernav";

const Order = () => {
  return (
    <div className=" w-screen">
      <Navbar withSearch />
      <OurNav link1="/employerhome" link2={"/order"} name="Orders" />
      <div className="flex justify-center flex-wrap mt-10 .fade">
        <Card accepted className="cursor-pointer" />
        <Card accepted className="cursor-pointer" />
        <Card accepted className="cursor-pointer" />
        <Card accepted className="cursor-pointer" />
        <Card accepted className="cursor-pointer" />
        <Card accepted className="cursor-pointer" />
        <Card accepted className="cursor-pointer" />
        <Card accepted className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Order;
