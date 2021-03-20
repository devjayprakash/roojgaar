import React from "react";
import NavBar from "../../components/navbar";
import WorkerHomeCardCompany from "../../components/workerHomeCardCompany";
import WorkerHomeCardIndividual from "../../components/workerHomeCardIndividual";
import WorkerNav from "../../components/workernav";
import "./index.css";
const WorkerHomePage = () => {
  return (
    <div className="h-fulls bg-gray-100">
      <NavBar />
      <WorkerNav
        link1="/workerhome"
        link2="/workercompanies"
        name="Companies"
      />
      <div className="status-space">
        <div className="head ">Company Hiring</div>
        <WorkerHomeCardCompany className="fade" />
        <div className="head ">Individual Hiring</div>
        <WorkerHomeCardIndividual className="fade" />
      </div>
    </div>
  );
};

export default WorkerHomePage;
