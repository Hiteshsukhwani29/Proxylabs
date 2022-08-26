import React, { useState } from "react";
import { Button } from "@mui/material";

export default function Index() {
  const [name, setname] = useState("Abhishant Mallick");
  const [ClgName, setClgName] = useState(
    "Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune"
  );
  const [uid, setuid] = useState("");

  return (
    <div className="flex flex-col w-[24rem] overflow-x-clip px-8 py-5 my-6 rounded-xl bg-white  m-auto drop-shadow-xl">
      <div className=" font-semibold">{name}</div>
      <div className=" font-light">{ClgName}</div>
      <div className="flex items-center my-1">
        <div className="font-bold">ID No. -</div>
        <div className="font-bold mx-1">{uid}</div>
      </div>
      <div className="border py-1 rounded-lg px-2 my-2 text-center font-semibold">
        Lab of Fluid Mechanics
      </div>

      <div className="flex justify-around">
        <Button
          className="!bg-accent !text-white !px-6 !my-4  !py-[6px] !rounded-full"
          variant="outlined"
        >
          Accept
        </Button>
        <Button
          className=" !text-black !px-6 !my-4  !py-[6px] !rounded-full"
          variant="outlined"
        >
          Decline
        </Button>
      </div>
    </div>
  );
}
