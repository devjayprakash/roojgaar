import React from "react";

const Profile = ({ setState }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div
        style={{
          backdropFilter: "blur(4px)",
        }}
        className="h-1/2 p-96 w-1/2 shadow-xl rounded-3xl"
      ></div>
    </div>
  );
};

export default Profile;
