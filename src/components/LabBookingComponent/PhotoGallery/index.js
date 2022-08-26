import React from "react";
import { Button } from "@mui/material";

export default function Index() {
  return (
    <div>
      <div className=" grid grid-flow-col  grid-cols-2 h-[12rem] md:h-[20rem] lg:h-[30rem]   p-12">
        <div className="bg-gray m-2 rounded-l-lg "></div>
        <div className="grid grid-flow-row ">
          <div className="grid grid-flow-col grid-cols-2 m-2">
            <div className="bg-gray mr-1"></div>
            <div className="bg-gray ml-1 rounded-tr-lg"></div>
          </div>
          <div className="grid grid-flow-col grid-cols-2 m-2">
            <div className="bg-gray mr-1"></div>
            <div className="bg-gray ml-1 rounded-br-lg"></div>
          </div>
        </div>
      </div>
      <Button className=" !bg-white !text-black relative -top-[100px] left-[986px] !py-1" variant="contained" component="label">
        Add Photos
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </div>
  );
}
