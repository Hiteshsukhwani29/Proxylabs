import React from 'react'
import Landing_bg from "../../assets/Landing_bg.png";

import { Button } from "@mui/material";

export default function Index() {
  return (
    <div className="flex justify-between items-center my-24 p-4">
    <div className="m-14 flex-0 ">
      <div className="text-4xl font-bold  min-w-full ">
        Register your students. Host your college for other students and get
        going!
      </div>
      <div className="text-sm font-light my-2">
        Allow your location, select your field and dive into the list of
        colleges at your disposal Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Harum, minima.
      </div>
      <div className="flex items-center py-6 ">
        <Button
          className="!bg-white !text-black !px-6  !py-2 !rounded-3xl !mr-4 "
          variant="outlined"
        >
          Host My College
        </Button>

        <Button
          className="!bg-accent !text-white !px-6  !py-2 !rounded-3xl"
          variant="outlined"
        >
          Get Credits
        </Button>
      </div>
    </div>
    <div className="flex-0 mx-10">
      <img className="h-80 max-w-lg rounded-lg" src={Landing_bg} alt="" />
    </div>
  </div>
  )
}
