import React from "react";

function index({imgurl,text,marginY}) {
  return (
    <div
      className={`flex items-center rounded-full px-4 py-2 my-${marginY}`}
      style={{ border: "1px solid #eeeeee" }}
    >
      <img
        className="h-5 w-5 flex-0"
        src={imgurl}
      />
      <div className="text-lg whitespace-nowrap flex-1 text-center opacity-50">
        {text}
      </div>
    </div>
  );
}

export default index;
