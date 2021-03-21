import React from "react";
import "./index.css";

const SelectedHireComp = ({ title }) => {
  return (
    <div className="comp fade1h">
      <div className="left">
        <div className="proPic">{title[0]}</div>
        <div className="name">{title}</div>
      </div>
      <div className="right">
        <div className="stats"></div>
        <div className="expand"></div>
      </div>
    </div>
  );
};

export default SelectedHireComp;
