import React from "react";
import { ChevronRight } from "heroicons-react";

function index({ imgurl, uid, username, email }) {
  return (
    <>
      <div
        className="flex items-center px-5 py-3 bg-white rounded-lg mx-4 my-2"
        style={{ border: "1px solid #eeeeee" }}
      >
        {/* Part1 */}
        <div className="flex flex-row items-center flex-1">
          {imgurl != "" ? (
            <img
              className="h-14 w-14 rounded-full m-2 object-cover"
              src={imgurl}
            />
          ) : (
            <div className="h-14 w-14 bg-temp rounded-full m-2"></div>
          )}
          <div className="flex flex-col justify-center m-2">
            <div className="text-sm font-semibold">{username}</div>
            <div className="text-xs font-light">{email}</div>
          </div>
        </div>
        {/* Part2 */}
        <div className="flex-1 flex items-center">
          <div className="h-14 w-[1px] opacity-40 m-2 bg-gray rounded-full"></div>
          <div className="font-semibold ml-3">Unique ID - </div>
          <div>{uid}</div>
        </div>
        {/* Part3 */}
        <div className="flex-0">
          <ChevronRight className="h-6 w-6" />
        </div>
      </div>
    </>
  );
}

export default index;