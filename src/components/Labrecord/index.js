import React from "react";
import LabrecordItem from "./LabrecordItem";

export default function index() {
  return (
    <>
      <div className="flex items-center bg-white rounded-lg mx-4 my-1 px-4 py-1 ">
        <div className=" flex-1 text-lg font-bold">#LABS</div>
        <div className="text-lg font-bold !w-52 text-center  ">Status</div>
        <div className=" text-lg font-bold py-1 my-1 mx-2 px-10 !w-52 text-center">
          Marks
        </div>
      </div>

      <LabrecordItem name="Fading Channels and Mobile Communications Lab" marks="22" status="Complete"/>
      <LabrecordItem name="Fading Channels and Mobile Communications Lab" marks="22" status="Complete"/>
      <LabrecordItem name="Fading Channels and Mobile Communications Lab" marks="22" status="Complete"/>
      <LabrecordItem name="Fading Channels and Mobile Communications Lab" marks="22" status="Complete"/>
      
    </>
  );
}
