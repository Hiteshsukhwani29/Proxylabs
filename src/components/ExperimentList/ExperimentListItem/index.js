import React from "react";

function index({ expno, expname }) {
  return (
    <div className="flex flex-col ml-6 my-3 mr-11">
      <div className="font-semibold text-lg">Experiment {expno} :</div>
      <div className="mt-1 text-md tracking-wider font-normal">{expname}</div>
    </div>
  );
}

export default index;
