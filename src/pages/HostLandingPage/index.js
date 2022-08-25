import React from 'react'
import { Button } from "@mui/material";

export default function index() {
  return (
    <div className="flex justify-between items-center my-24 p-4">
      <div className="m-14 flex-0 ">
        <div className="text-4xl font-bold  min-w-full ">Host your college labs and workshops for all students.</div>
        <Button
              className="!bg-accent !text-white !px-6  !py-2 !rounded-3xl"
              variant="outlined"
            >
              Get Credits
            </Button>

      
        
      </div>
      <div className="flex-0 mx-10">
        <img className="h-80 max-w-lg rounded-lg" src={imgUrl} alt="" />
      </div>
    </div>
  )
}
