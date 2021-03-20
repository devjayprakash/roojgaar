import React from "react";
import NavBar from "../../components/navbar";
import WorkerNav from "../../components/workernav";

const WorkerCompanies = () => {
  return (
    <div>
      <NavBar />
      <WorkerNav
        link1="/workerhome"
        link2="/workercompanies"
        name="Companies"
      />
    </div>
  );
};

export default WorkerCompanies;
