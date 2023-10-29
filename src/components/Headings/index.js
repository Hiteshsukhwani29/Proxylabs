import React from "react";

function index({Head, detail}) {
  return (
    <div className="my-6 flex-0">
      <div className="text-5xl font-bold  min-w-full text-montserrat-semibold">
        {Head}
      </div>
      <div className="text-2xl mt-4 font-light my-2 text-montserrat-regular">
        {detail}
      </div>
    </div>
  );
}

export default index;
