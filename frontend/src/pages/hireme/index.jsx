import NavBar from "../../components/navbar";
import Avtar from "./download.png";

const Hire = () => {
  return (
    <div>
      <NavBar withSearch />

      <div className="flex justify-around items-center p-10 box-border m-5 rounded-xl bg-white">
        <div className="mr-10">
          <img
            style={{
              borderWidth: "2px",
            }}
            src={Avtar}
            width={200}
            alt=""
            className="rounded-full border-black p-1"
          />
        </div>
        <div className="w-4/5">
          <h1 className="text-2xl font-semibold ">Best Coder In Jamshedpur</h1>
          <p className="font-normal opacity-80 ">
            I am jayprakash pathak here and you know what we are the best coder
            here best of best
          </p>
          <p className="text-pink-600 font-bold">$50 / Day</p>
          <p className="font-extrabold flex items-center">
            Jay Prakasjj Pathak
            <div className=" gola ml-5"> </div>
          </p>
        </div>
      </div>
      <div className="bg-blue-600 m-10 p-10 rounded-md">
        <input
          type={"text"}
          placeholder={"Name"}
          className={"border-2 border-gray-400 px-3 py-2 rounded-lg w-1/2"}
        />
        <br />
        <br />
        <textarea
          type={"textarea"}
          placeholder={"Detailed description"}
          className={"border-2 border-gray-400 px-3 py-2 rounded-lg w-3/4 h-32"}
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="rounded-md my-20 text-center h-10 px-10 py-2 cursor-pointer mt-1 font-bold text-white mr-10 hover:shadow-xl bg-pink-500 duration-200 up">
          Hire Me
        </div>
      </div>
    </div>
  );
};

export default Hire;
