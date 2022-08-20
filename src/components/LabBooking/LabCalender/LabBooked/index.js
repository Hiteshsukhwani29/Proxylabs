import React from "react";
import { Button } from "@mui/material";

export default function index() {
  return (
    <div className="flex flex-col w-[30rem] overflow-x-clip px-8 py-10 rounded-xl bg-white whitespace-normal m-auto drop-shadow-xl">
      <div className="flex justify-center">
        <div className="h-44 w-44 bg-temp rounded-full m-2"></div>
      </div>
      <div className="flex flex-col items-center justify-center py-6">
        <div className="font-semibold text-lg">Congratulations!</div>
        <div className="font-light">Your lab has been booked.</div>
      </div>
      <Button
        className="!bg-accent !text-white !px-6 !my-4 !py-2 !rounded-full"
        variant="outlined"
      >
        Download Recept
      </Button>
      <div className="flex justify-center items-center text-center mt-4 mx-16 ">You can also check for your booked labs in your profile</div>
    </div>
  );
}
