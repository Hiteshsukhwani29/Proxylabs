import React from "react";

export default function index({ experiments }) {
  return (
    <div>
      <div className="flex flex-col w-[30rem] px-8 py-5 rounded-xl bg-white  m-auto drop-shadow-xl">
        <div className="font-bold text-lg py-4 ">
          Experiments you can perform in this lab
        </div>
        <div>{experiments}</div>
      </div>
    </div>
  );
}
