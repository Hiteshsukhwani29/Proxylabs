import React from 'react'
import { Button } from "@mui/material";
import { X } from "heroicons-react";

export default function index({  }) {
  return (
    <div className='flex flex-col w-[22rem] overflow-x-clip px-8 py-5 rounded-xl bg-white drop-shadow-xl absolute'>
        
        <Button
          className="!bg-white !text-black !px-4 !mb-2 !py-2 !rounded-3xl  "
          variant="outlined"
        >
          Get university curriculum
        </Button>

        <Button
          className="!bg-accent !text-white !px-6 !mt-2 !py-2 !rounded-3xl "
          variant="outlined"
        >
         Create own curriculum
        </Button>
      
    </div>
  )
}
