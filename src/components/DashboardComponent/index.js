import React from "react";
import { PencilAltOutline } from "heroicons-react";
import { Button } from "@mui/material";
import clock from "../../assets/clock.png";
import calender from "../../assets/calendar.png";

export default function index() {
  return (
    <div
      className="flex flex-col w-[80%]  overflow-x-clip px-8 py-5 rounded-xl bg-white my-6  m-auto drop-shadow-xl"
      style={{ border: "1px solid #eeeeee" }}
    >
      <div className="flex items-center pt-3 justify-between">
        <div className="flex">
          <div className="h-12 w-12 bg-temp rounded-full mr-3 "></div>
          <div className=" ml-3">
            <div className="font-semibold text-xl">
              Bharati Vidyapeeth College Of Engineering Pune
            </div>
            <div className="font-light text-sm">Laboratory of Metrology</div>
          </div>
        </div>

        <div className="flex">
          <PencilAltOutline />
          <div className="font-light text-sm mx-1">Edit Booking</div>
        </div>
      </div>

      <div className="ml-[70px] mb-4 text-sm font-light">
        Some extra information or details, anything, something
      </div>

      <div className="flex items-center justify-between ml-[70px]">
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            <div>
              <img className="w-8 p-1" src={clock} alt="" />
            </div>
            <div>22/33/2000</div>
          </div>
          <div className="flex items-center ml-2">
            <div>
              <img className="w-8 p-1" src={calender} alt="" />
            </div>
            <div className="border w-fit px-2   rounded-lg mr-1 ">
              10:00 - 11:00 am
            </div>
          </div>
        </div>
        <Button
          className="!bg-white !text-black !px-6  !py-1 !rounded-full !mr-4"
          variant="outlined"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
