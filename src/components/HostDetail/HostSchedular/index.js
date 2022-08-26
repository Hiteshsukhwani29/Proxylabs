import React from "react";
import { Checkbox, Button } from "@mui/material";
import DateRange from "../../LabBookingComponent/LabCalender/daterangepicker"

export default function index({ IsSubmitClicked, setIsSubmitClicked }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="flex flex-col w-[34rem] h-fit overflow-x-clip px-8 py-5 rounded-xl bg-white  ml-6  drop-shadow-xl">
      <div className="font-semibold ">Assign lab dates and times</div>
      <div className="">
        <DateRange/>
      </div>
      <div>
        <div className="font-normal text-base">Preferred time slot</div>
        <div className="font-light text-sm">
          We suggest you to keep a standard time everyday for outside students
          for your own ease.
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <div className="flex my-1 ">
          <div className="border w-fit px-4 py-1  rounded-lg mr-1 ">
            10:00 - 11:00 am
          </div>
          <div className="border w-fit px-4 py-1  rounded-lg ml-1 ">
            10:00 - 11:00 am
          </div>
        </div>

        <div className="flex my-1">
          <div className="border w-fit px-4 py-1  rounded-lg mr-1 ">
            10:00 - 11:00 am
          </div>
          <div className="border w-fit px-4 py-1  rounded-lg ml-1">
            10:00 - 11:00 am
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 ">
        <div className="w-[22rem]">
          I agree with the college guidelines and promise to follow them.
        </div>
        <div>
          <Checkbox {...label} />
        </div>
      </div>
      <Button
        className="!bg-accent !text-white !px-6 !my-4  !py-2 !rounded-full"
        variant="outlined"
        onClick={()=>setIsSubmitClicked(true)}
      >
        Submit
      </Button>
      <div className="flex justify-between">
        <div className="text-base font-thin">Credit Price for 1 lab</div>
        <div className="text-base font-thin">50</div>
      </div>
      <div className="flex justify-between">
        <div className="text-base font-thin">Service fee</div>
        <div className="text-base font-thin">0</div>
      </div>
    </div>
  );
}
