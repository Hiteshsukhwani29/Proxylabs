import React from "react";

function index({ imgurl, name, prn, labsenrolled, labscompleted }) {
  return (
    <div className="bg-white rounded-lg p-6 grid grid-flow-col grid-cols-2 m-4" style={{ border: "1px solid #eeeeee" }}>
      <div className="flex items-center">
        {imgurl != "" ? (
          <img className="rounded-full h-14 w-14 mr-2 my-2 object-cover" src={imgurl} />
        ) : (
          <div className="bg-temp2 rounded-full h-14 w-14 mr-2 my-2"></div>
        )}
        <div className="flex flex-col m-2">
          <div className="text-md font-semibold">{name}</div>
          <div>{prn}</div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-temp2 rounded-lg p-2 m-2">
          <div className="text-xl font-bold px-1">{labsenrolled}</div>
          <div className="text-xs tracking-tight mt-1 p-1">
            LABS
            <br />
            ENROLLED
          </div>
        </div>
        <div className="bg-temp2 rounded-lg p-2 m-2">
          <div className="text-xl font-bold px-1">{labscompleted}</div>
          <div className="text-xs tracking-tight mt-1 p-1">
            LABS
            <br />
            COMPLETED
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
