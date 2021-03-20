import React from "react";
import Card from "../../components/maincard";
import Navbar from "../../components/navbar";
import OurNav from "../../components/workernav";

const Order = () => {
  return (
    <div className="h-full">
      <Navbar withSearch />
      <OurNav link1="/employerhome" link2={"/order"} name="Orders" />
      <div className="flex justify-center flex-wrap mt-10 .fade h-full">
        <Card
          accepted
          head="Professional Web Dev"
          desc="I am a good Boy."
          name="Krishna Mahato"
          active
          rate="$200/day"
        />
        <Card accepted />
        <Card accepted />
        <Card accepted />
        <Card accepted />
        <Card accepted />
        <Card accepted />
        <Card accepted />
      </div>
    </div>
  );
};

export default Order;
