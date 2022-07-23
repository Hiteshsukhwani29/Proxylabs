import React from 'react'
import LabrecordItem from "./LabrecordItem"

export default function index() {
  return (
    <>
   {/* <div className='flex items-center bg-white rounded-lg mx-4 my-6 px-4 py-3 grid grid-flow-col grid-cols-3'>
      <div className='col-span-2 text-lg font-bold '>#LABS</div>
      <div className='text-lg font-bold max-w-xs text-center   '>Status</div>
      <div className='text-lg font-bold py-1 m-1 mx-2 px-10 max-w-xs text-center'>Marks</div>
    </div> */}

<div className='flex items-center bg-white rounded-lg mx-4 my-1 px-4 py-1 '>
      <div className='flex flex-1 text-lg font-bold'>#LABS</div>
      <div className='text-lg font-bold w-40  flex flex-0'>Status</div>
      <div className=' text-lg font-bold py-1 m-1 mx-2 px-10 w-30 flex flex-0'>
        <div>Marks</div>
      </div>
    </div>

    <LabrecordItem/>
    <LabrecordItem/>
    <LabrecordItem/>
    <LabrecordItem/>
    </>
  )
}
