import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";

const SignupPage = ({ className }) => {
  if (!className) className = "";
  let [isEmployer, setIsEmployer] = useState(true);
  return (
    <div
      className={
        "bg-gradient-to-br from-purple-800 to-blue-500  h-screen w-screen " +
        className
      }
    >
      <Logo className="absolute p-10" />
      <div className="flex items-center justify-between">
        <div
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
          className="flex flex-col justify-around text-center"
        >
          <h1 className="text-5xl text-white mt-60 mb-20">Welcome</h1>
          <h3 className=" text-white text-xl mb-80">
            Login Now and get fascinated
          </h3>
          <Link
            style={{
              backgroundColor: "cyan",
            }}
            className="bg-gray-400 py-3 px-10 rounded-full font-bold text-xl select-none"
            to="/login"
          >
            Login
          </Link>
        </div>
        <div
          style={{
            borderRadius: "100px 0 0 100px",
          }}
          className="w-full bg-gray-50 px-3 py-20 items-center max-w-4xl"
        >
          <h1 className="text-center mb-10 text-3xl font-bold text-gray-700">
            Register
          </h1>
          <div className="w-full">
            <table className="w-full">
              <tr>
                <td className={"px-3 py-2"}>
                  <input
                    type={"text"}
                    placeholder={"Name"}
                    className={
                      "border-2 border-gray-400 px-3 py-2 rounded-lg w-full"
                    }
                  />
                </td>
                <td className={"px-3 py-2"}>
                  <input
                    type={"email"}
                    placeholder={"Email ID"}
                    className={
                      "border-2 border-gray-400 px-3 py-2 rounded-lg w-full"
                    }
                  />
                </td>
              </tr>
              <tr className={"mt-3"}>
                <td className={"px-3 py-2"}>
                  <input
                    type={"phone"}
                    placeholder={"Phone Number"}
                    className={
                      "border-2 border-gray-400 px-3 py-2 rounded-lg w-full"
                    }
                  />
                </td>
              </tr>
              <tr className={"mt-3"}>
                <td className={"px-3 py-2"}>
                  <select
                    onChange={(e) => {
                      setIsEmployer(e.target.value == "employer");
                      console.log(e.target.value == "employer");
                    }}
                    className={
                      "px-3 py-2 w-full bg-white border-2 border-gray-400 rounded-lg"
                    }
                    name="as"
                  >
                    <option value="employer">Employer</option>
                    <option value="employee">Employee</option>
                  </select>
                </td>
                {isEmployer && (
                  <td className={"px-3 py-2"}>
                    <input type={"radio"} name="as-detail" id={"indi"} />
                    <label htmlFor="indi"> Individual</label>
                    <input
                      className={"ml-3"}
                      name="as-detail"
                      type={"radio"}
                      id={"indi"}
                    />
                    <label htmlFor="indi"> Industry</label>
                  </td>
                )}
              </tr>
              <tr className={"mt-3"}>
                <td className={"px-3 py-2"}>
                  <input
                    type={"password"}
                    placeholder={"Password"}
                    className={
                      "border-2 border-gray-400 px-3 py-2 rounded-lg w-full"
                    }
                  />
                </td>
                <td className={"px-3 py-2"}>
                  <input
                    type={"password"}
                    placeholder={"Re-type Password"}
                    className={
                      "border-2 border-gray-400 px-3 py-2 rounded-lg w-full"
                    }
                  />
                </td>
              </tr>
            </table>
            <div className={"w-full flex justify-end"}>
              <div
                className={
                  "px-7 py-2 text-white bg-pink-500 font-bold rounded-full mt-4 mr-10 cursor-pointer select-none"
                }
              >
                Register
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
