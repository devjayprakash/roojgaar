import Card from "../../components/maincard";
import Navbar from "../../components/navbar";
import OurNav from "../../components/workernav";
import add from "./plus.svg";

const Chome = () => {
  return (
    <div className=" w-screen">
      <Navbar />
      <div className="flex justify-center flex-wrap m-10 ">
        <Card
          name="Jotish pappu"
          desc="i aha s dfwkfkweb fyugwbfh wgf"
          active
          btntxt="See stats"
        />
        <Card
          head="Professional Web Developer"
          name="Jotish pappu"
          desc="i aha s dfwkfkweb fyugwbfh wgfi aha s dfwkfkweb fyugwbfh wgfi aha s dfwkfkweb fyugwbfh wgf"
          active
          btntxt="See stats"
        />
        <div
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
    </div>
  );
};

export default Chome;
