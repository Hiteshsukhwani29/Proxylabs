import React from "react";
import { Button } from "@mui/material";

function index() {
  const img = null;
  return (
    <div className="flex flex-col w-[20rem] overflow-x-clip px-8 py-5 rounded-xl bg-white drop-shadow-xl absolute border-gray1 items-center justify-center">
      {img ? (
        <img className="h-24 w-24 rounded-full bg-cover m-4" src="" />
      ) : (
        <div className=" bg-temp2 h-24 w-24 rounded-full m-4"></div>
      )}

      <div className="font-montserrat-semibold text-lg text-center">
        Bharati Vidyapeeth (Deemed to be University) College of Engineering,
        Pune
      </div>

      <Button
        className="!bg-accent !text-white !px-6 !mt-2 !py-2 !rounded-md !border-none !w-[100%]"
        variant="outlined"
      >
        00 Coins
      </Button>

      <div className="flex flex-col !w-[100%]">
        <div className="font-montserrat-regular pt-4 cursor-pointer">
          My Profile
        </div>
        <div className="font-montserrat-regular pt-2 cursor-pointer">
          Lab Bookings
        </div>
        <div className="font-montserrat-regular pt-2 cursor-pointer">
          Curriculum
        </div>
        <div className="font-montserrat-regular pt-2 cursor-pointer">
          Sign Out
        </div>
      </div>
    </div>
  );
}

export default index;
