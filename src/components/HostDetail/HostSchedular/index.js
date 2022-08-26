import React ,{useState} from "react";
import { Checkbox, Button, TextField } from "@mui/material";
import DateRange from "../../LabBookingComponent/LabCalender/daterangepicker";

export default function Index({ IsSubmitClicked, setIsSubmitClicked }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [ActiveIndex, setActiveIndex] = useState("");

  return (
    <div className="flex flex-col w-[34rem] h-fit overflow-x-clip px-8 py-5 rounded-xl bg-white  ml-6  drop-shadow-xl">
      <div className="font-semibold ">Assign lab dates and times</div>
      <div className="">
        <DateRange />
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
          <div className={`${
            ActiveIndex === "1" ? "bg-accent text-white" : "bg-white"
          } border w-fit px-4 py-1  rounded-lg mr-1 hover:bg-accent hover:text-white`}
          onClick={() => setActiveIndex("1")}
          >
            17:00 - 18:00 
          </div>
          <div className={`${
            ActiveIndex === "2" ? "bg-accent text-white" : "bg-white"
          } border w-fit px-4 py-1  rounded-lg mr-1 hover:bg-accent hover:text-white`}
          onClick={() => setActiveIndex("2")}
          >
            18:00 - 19:00 
          </div>
        </div>

        <div className="flex my-1">
        <div className={`${
            ActiveIndex === "3" ? "bg-accent text-white" : "bg-white"
          } border w-fit px-4 py-1  rounded-lg mr-1 hover:bg-accent hover:text-white`}
          onClick={() => setActiveIndex("3")}
          >
            19:00 - 20:00 
          </div>
          <div className={`${
            ActiveIndex === "4" ? "bg-accent text-white" : "bg-white"
          } border w-fit px-4 py-1  rounded-lg mr-1 hover:bg-accent hover:text-white`}
          onClick={() => setActiveIndex("4")}
          >
            21:00 - 22:00
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div>Maximum capacity per slot</div>
        <TextField
        size="small"
          className="w-24 "
          id="outlined-basic"
          variant="outlined"
        />
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
        onClick={() => setIsSubmitClicked(true)}
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
