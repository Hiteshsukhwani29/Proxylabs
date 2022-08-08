import React from "react";
import ParticularColumn from "./ParticularColumn";

function index() {
  return (
    <div className="grid grid-cols-4 h-96 m-20 border-[1px] border-gray rounded-xl bg-white shadow-[0_16px_33px_rgba(89,163,201,0.35)]">
        <ParticularColumn/>
        <ParticularColumn/>
        <ParticularColumn/>
        <ParticularColumn/>
    </div>
  );
}

export default index;
