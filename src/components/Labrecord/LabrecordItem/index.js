import React from "react";

export default function index({status,marks,name}) {
  return (
    <>
      <div className="flex items-center bg-white rounded-lg mx-4 my-1 px-4 py-1 ">
        <div className="flex-1">
          {name}
        </div>
        <div className="text-semibold font-bold !w-52 text-center ">
          {status}
        </div>
        <div className=" bg-white mx-2 my-1  !w-52 flex items-center justify-center">
          <span className="bg-temp2 rounded-lg px-10 py-1 ">{marks}</span>
        </div>
      </div>
    </>
  );
}
