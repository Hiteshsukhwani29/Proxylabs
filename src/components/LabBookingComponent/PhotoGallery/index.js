import React from "react";
import { Button } from "@mui/material";

export default function Index({imgurl,imgurl1,imgurl2,imgurl3,imgurl4}) {
  return (
    <div>
      <div className=" grid grid-flow-col  grid-cols-2 h-[12rem] md:h-[20rem] lg:h-[30rem]   p-12">
        <div className="bg-gray m-2 rounded-l-lg "><img src={imgurl} alt="" /></div>
        <div className="grid grid-flow-row ">
          <div className="grid grid-flow-col grid-cols-2 m-2">
            <div className="bg-gray mr-1"><img src={imgurl1} alt="" /></div>
            <div className="bg-gray ml-1 rounded-tr-lg"><img src={imgurl2} alt="" /></div>
          </div>
          <div className="grid grid-flow-col grid-cols-2 m-2">
            <div className="bg-gray mr-1"><img src={imgurl3} alt="" /></div>
            <div className="bg-gray ml-1 rounded-br-lg"><img src={imgurl4} alt="" /></div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
