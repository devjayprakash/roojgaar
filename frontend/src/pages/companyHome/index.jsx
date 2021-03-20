import { useState } from "react";
import Profile from "../../components/profile";
import Card from "../../components/maincard";
import Navbar from "../../components/navbar";
import OurNav from "../../components/workernav";
import add from "./plus.svg";
import { useHistory } from "react-router";

const Chome = () => {
  let [detailed, setDetailed] = useState(false);
  let his = useHistory();
  let statid = 1234;
  return (
    <div className=" w-screen">
      <Navbar />
      {detailed ? (
        <div>
          <Profile setState={setDetailed} />
        </div>
      ) : (
        <div className="flex justify-center flex-wrap m-10 ">
          <Card
            onBtnClick={() => {
              his.push(`/stats/${statid}`);
            }}
            name="Jotish pappu"
            desc="i aha s dfwkfkweb fyugwbfh wgf"
            active
            btntxt="See stats"
          />
          <Card
            onBtnClick={() => {
              his.push(`/stats/${statid}`);
            }}
            head="Professional Web Developer"
            name="Jotish pappu"
            desc="i aha s dfwkfkweb fyugwbfh wgfi aha s dfwkfkweb fyugwbfh wgfi aha s dfwkfkweb fyugwbfh wgf"
            active
            btntxt="See stats"
          />
          <div
            onClick={() => {
              setDetailed(true);
            }}
            style={{
              borderWidth: "2px",
            }}
            className="mx-2 my-3 w-64 rounded-2xl bg-white p-10 text-center text-gray-600 hover:shadow-xl cursor-pointer"
          >
            <img
              src={add}
              style={{
                maxHeight: "6rem",
              }}
              alt="image"
              className="w-full h-sm rounded-2xl"
            />
            <br />
            <br />
            Create New Hire
          </div>
        </div>
      )}
    </div>
  );
};

export default Chome;
