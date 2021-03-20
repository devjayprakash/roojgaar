import Card from "../../components/maincard";
import Navbar from "../../components/navbar";
import OurNav from "../../components/workernav";

const Ehomepage = () => {
  return (
    <div className=" w-screen">
      <Navbar withSearch />
      <OurNav link1="/employerhome" link2={"/order"} name="Orders" />
      <div className="flex justify-center flex-wrap mt-10 ">
        <Card />
        <Card active />
      </div>
    </div>
  );
};

export default Ehomepage;
