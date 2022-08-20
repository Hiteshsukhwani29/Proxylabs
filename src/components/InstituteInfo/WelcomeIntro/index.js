import React from 'react'
import { Button } from '@mui/material'

export default function index() {
  return (
    <div className='flex flex-col w-[48rem] overflow-x-clip px-8 py-5 rounded-xl bg-white  m-auto drop-shadow-xl' >
        <div>
        <div className=" bg-gray flex-1 h-[1px] -mx-8 "></div>
        </div>
        <div className="flex justify-center">
        <div className="h-44 w-44 bg-temp rounded-full m-2"></div>
      </div>
      <div className="flex flex-col items-center justify-center py-6">
        <div className="font-semibold text-lg">Welcome Aboard!</div>
        <div className="font-light w-80 text-center">You are just a few steps away from completing your registration here :)</div>
      </div>

      <div className='flex justify-around items-center my-6'>
      <Button
        className=" !text-black !px-20 !my-4 !py-2 !rounded-full"
        variant="outlined"
        style={{ border: "1px solid #CBCBCB" }}
      >
        Later   
      </Button>
      <Button
        className="!bg-accent !text-white !px-16 !my-4 !py-2 !rounded-full"
        variant="outlined"
      >
        Continue
      </Button>
      </div>
    </div>
  )
}
