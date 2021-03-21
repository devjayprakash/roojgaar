import React from "react";
import NavBar from "../../components/navbar";
import WorkerHomeCardCompany from "../../components/workerHomeCardCompany";
import WorkerHomeCardIndividual from "../../components/workerHomeCardIndividual";
import WorkerNav from "../../components/workernav";
import "./index.css";

const Details = () => {
  return (
    <div className="editDetailsSpace">
      <div className="top">
        <h1>Details Edit</h1>
      </div>
      <div className="inputArea">
        <input type="text" placeholder="Skills" name="Skills" id="skills" />
        <textarea
          type="text"
          placeholder="Description"
          name="Description"
          id="description"
        />
      </div>
      <div className="btn">Edit</div>
    </div>
  );
};

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
        <div className="head">Company Hiring</div>
        <WorkerHomeCardCompany />
        <div className="head">Individual Hiring</div>
        <WorkerHomeCardIndividual />
        <hr
          style={{
            width: "80%",
          }}
        />
        <div className="editDetails">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default WorkerHomePage;
