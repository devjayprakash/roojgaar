import React from "react";
import NavBar from "../../components/navbar";
import OurNav from "../../components/workernav";

const WorkerCompanies = () => {
  return (
    <div>
      <NavBar />
      <OurNav link1="/workerhome" link2="/workercompanies" name="Companies" />
    </div>
  );
};

export default WorkerCompanies;
