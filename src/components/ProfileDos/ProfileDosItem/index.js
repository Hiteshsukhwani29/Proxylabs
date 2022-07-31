import { TextField, Button } from "@mui/material";
import React from "react";

export default function Index() {
  return (
    <>
      <div className="bg-white rounded-lg mt-4 px-8 py-6">
        <div>
          <div className="text-semibold font-semibold pb-2">Work</div>
          <div className="bg-temp2 rounded-lg h-12 block">
            {/* <TextField className='w-3/4' id="outlined-basic" label="Marks" variant="outlined" /> */}
          </div>
        </div>
        <div className="mt-6">
          <div className="text-semibold font-semibold  py-2">Marks</div>
          <div className="bg-temp2 rounded-lg  h-12 block">
            {/* <TextField className='w-3/4' id="outlined-basic" label="Marks" variant="outlined" /> */}
          </div>
        </div>

        <div className="pt-10">
          <Button
            className="!bg-accent !text-white !px-10  !py-2"
            variant="outlined"
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
