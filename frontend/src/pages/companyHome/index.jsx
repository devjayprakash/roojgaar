import { useContext, useEffect, useState } from "react";
import Profile from "../../components/profile";
import Card from "../../components/maincard";
import Navbar from "../../components/navbar";
import OurNav from "../../components/workernav";
import add from "./plus.svg";
import NewHirePopup from "../newhirepopup";
import Loader from "../../components/loader";
import axios from "axios";
import { AuthContext } from "../../App";

const Chome = () => {
  let [detailed, setDetailed] = useState(false);

  let [showPopup, setShowPopup] = useState(false);

  let [allhires, setAllHires] = useState(null)

  let auth = useContext(AuthContext)

  let fetchAllData = async () => {
    let res = await axios.get('http://localhost:8080/api/v1/hire/getHires/' + auth.userDetail._id)
    if (res.data.res) {
      setAllHires(res.data.hires)
    } else {
      setAllHires([])
    }
  }

  useEffect(() => {
    fetchAllData()
  }, [])

  if (allhires == null) return <Loader />

  return (
    <div className=" w-screen">
      <Navbar />
      {detailed ? (
        <div>
          <Profile setState={setDetailed} />
        </div>
      ) : (
        <div className="flex justify-center flex-wrap m-10 ">
          {allhires.map(hire => {
            return (
              <Card
                onClick={() => {
                  setDetailed(true);
                }}
                name={hire.title}
                desc={hire.description}
                active
                btntxt="See stats"
              />
            )
          })}
          <div
            onClick={() => [
              setShowPopup(true)
            ]}
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
          <NewHirePopup setShow={setShowPopup} show={showPopup} fetchHires={fetchAllData} />
        </div>
      )}
    </div>
  );
};

export default Chome;
