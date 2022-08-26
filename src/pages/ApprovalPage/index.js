import React from 'react'
import ApprovalCard from "../../smallcomponents/ApprovalCard"

export default function index() {
  return (
    <div className='mx-12 my-6'>
        <div className='font-bold text-2xl my-6'>Lab Bookings</div>
        <div className='font-semibold '>28/ Aug/ 2022</div>
        <div className=" bg-gray flex-1 h-[1px] my-3  "></div>
        <div className="border w-fit px-4 py-1  rounded-lg mt-6 ">
            10:00 - 11:00 am
          </div>

        <div className='grid grid-cols-3'>
            <ApprovalCard />
            <ApprovalCard/>
            <ApprovalCard/>
            <ApprovalCard/>
            <ApprovalCard/>
            <ApprovalCard/>
            <ApprovalCard/>
            <ApprovalCard/>
            <ApprovalCard/>
        </div>
    </div>
  )
}
