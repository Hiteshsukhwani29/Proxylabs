import React from 'react'
import { X } from "heroicons-react";

export default function Index() {
  return (
    <div className="flex flex-col w-min p-5 rounded-xl bg-white whitespace-nowrap m-auto drop-shadow-xl"
    style={{ border: "1px solid #eeeeee" }}>
        <div className='flex items-center'>
                <X
                  className="h-4 w-4 flex-0 cursor-pointer"
                />
            <div className="text-lg whitespace-nowrap flex-1 text-center">
                  Review
            </div>
        </div>
        <div>
        <TextField 
        label="Label" 
        placeholder="Type in here…" 
        fullWidth /> 
        </div>
        <div></div>
    </div>
  )
}
