import React from 'react'
import { Button } from "@mui/material";

export default function Index() {
  return (
    <div className='flex flex-col w-[22rem] overflow-x-clip px-8 py-5 rounded-xl bg-white drop-shadow-xl absolute'>
        
        <Button
          className="!bg-white !text-black !px-4 !mb-2 !py-2 !rounded-3xl  "
          variant="outlined"
        >
          <input hidden accept="image/*" multiple type="file" />
          Upload Experiment
        </Button>

        <Button
          className="!bg-white !text-black !px-4 !mb-2 !py-2 !rounded-3xl  "
          variant="outlined"
        >
          <input hidden accept="image/*" multiple type="file" />
          Upload Pictures
        </Button>

        <Button
          className="!bg-white !text-black !px-4 !mb-2 !py-2 !rounded-3xl  "
          variant="outlined"
        >
          <input hidden accept="image/*" multiple type="file" />
          Upload Booking Receit
        </Button>

        <Button
          className="!bg-accent !text-white !px-6 !mt-2 !py-2 !rounded-3xl "
          variant="outlined"
        >
         Submit
        </Button>
      
    </div>
  )
}
