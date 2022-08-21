import React from 'react'
import { Button,TextareaAutosize } from "@mui/material";
import { PlusSm } from "heroicons-react"

export default function index() {
  return (
    <div className=" my-3">
        <div className=" bg-gray flex-1 h-[1px]  "></div>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Add Lab"
          className=" w-full rounded-lg py-2 px-4 my-5"
          fullWidth
          style={{ border: "1px solid #eeeeee" }}
        />

        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Lab Description"
          minRows={3}
          className=" w-full rounded-lg py-2 px-4"
          fullWidth
          style={{ border: "1px solid #eeeeee" }}
        />

<Button style={{ border: "1px solid #eeeeee" }}  component="label" className="w-full h-60 !bg-white !text-black !mt-16 hover:drop-shadow-xl">
  <div className="flex items-center flex-col">
    <div>
        <PlusSm/>
    </div>
    <div>
       Add Photos 
    </div>
  </div>
  <input hidden accept="image/*" multiple type="file" />
</Button>
      </div>
  )
}
