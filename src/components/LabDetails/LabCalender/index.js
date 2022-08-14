import React, { useState ,useEffect } from "react";
import { Checkbox, Button } from "@mui/material";
import DatePicker from "../datePicker"

import "react-dates/initialize";

export default function Index() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [dates, setdates] = useState(new Date());

  const [ActiveIndex, setActiveIndex] = useState(false);

  var monthList = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  var dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  console.log(dates.getDay())

  useEffect(() => {
    console.log(ActiveIndex);
    if(ActiveIndex==='2'){
      console.log("im working")
    }
  }, [ActiveIndex])
  

  return (
    <div className="flex flex-col w-[32rem] overflow-x-clip px-8 py-5 rounded-xl bg-white whitespace-normal m-auto drop-shadow-xl">
      <div className="">
        <div className="font-semibold text-lg whitespace-normal">Prebook a lab</div>
        <div>Dropdown</div>
      </div>
      {/* Calender */}

      <div className="flex items-center my-4">
        <div className={`${ActiveIndex==="1"?'text-2xl':'text-xs'} flex flex-col w-fit px-4 py-2 rounded-lg text-white mr-2`} onClick={() => setActiveIndex("")}>
          <div>{dayList[dates.getDay()]}</div>
          <div>{dates.getDate()}</div>
          <div>{monthList[dates.getMonth()]}</div>
        </div>

        <div className={`${ActiveIndex?"!text-2xl":"!text-xs"}flex flex-col w-fit px-4 py-2 rounded-lg  mx-1`} onClick={() => setActiveIndex(true)}>
          <div>{dayList[dates.getDay() + 1 >6?dates.getDay()-6:dates.getDay()+1]}</div>
          <div>{dates.getDate() + 1}</div>
          <div>{monthList[dates.getMonth()]}</div>
        </div>

        <div className={`bg-${ActiveIndex==='2'?'accent':'white'}flex flex-col w-fit px-4 py-2 rounded-lg hover:bg-accent hover:text-white mx-1`} onClick={() => setActiveIndex('2')}>
          <div>{dayList[dates.getDay() + 2 >6?dates.getDay()-6:dates.getDay()+2]}</div>
          <div>{dates.getDate() + 2}</div>
          <div>{monthList[dates.getMonth()]}</div>
        </div>

        <div className={`${ActiveIndex===3?'bg-accent':'bg-white'}flex flex-col w-fit px-4 py-2 rounded-lg hover:bg-accent hover:text-white mx-1`} onClick={() => setActiveIndex(3)}>
          <div>{dayList[dates.getDay() + 3 >6?dates.getDay()-6:dates.getDay()+3]}</div>
          <div>{dates.getDate() + 3}</div>
          <div>{monthList[dates.getMonth()]}</div>
        </div>

        <div className={`bg-${ActiveIndex===4?'accent':'white'}flex flex-col w-fit px-4 py-2 rounded-lg hover:bg-accent hover:text-white mx-1`} onClick={() => setActiveIndex(4)}>
          <div>{dayList[dates.getDay() + 4 >6?dates.getDay()-6:dates.getDay()+4]}</div>
          <div>{dates.getDate() + 4}</div>
          <div>{monthList[dates.getMonth()]}</div>
        </div>

        

        <div className="">
          <div>
            <DatePicker/>
          </div>
        </div>
      </div>

      <div className="text-sm font-thin py-1">Preferred time slot.</div>

      {/* Time */}

      <div className="flex flex-col">
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

      {/* Book Button */}

      <Button
        className="!bg-accent !text-white !px-6 !my-4  !py-2 !rounded-full"
        variant="outlined"
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

      <div>
        <div className=" bg-gray flex-1 h-[1px] my-3 -mx-8 "></div>
        <div className="flex items-center justify-between">
          <div className="font-bold text-lg">Total credits deducted</div>
          <div className="font-bold text-lg">50</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
