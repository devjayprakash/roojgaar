import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  if (!className) className = "";
  return (
    <Link to="/" className={"flex " + className}>
      <div
        style={{
          color: "cyan",
        }}
        className="text-4xl font-bold"
      >
        रोज़
      </div>
      <div className="text-4xl font-bold text-white">Gaar</div>
    </Link>
  );
};

export default Logo;
