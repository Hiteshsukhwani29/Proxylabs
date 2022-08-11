import React from "react";
import { X } from "heroicons-react";
import { Button, Rating, TextareaAutosize } from "@mui/material";

export default function Index() {
  return (
    <div
      className="flex flex-col w-[30rem] px-8 py-5 rounded-xl bg-white whitespace-nowrap m-auto drop-shadow-xl"
      style={{ border: "1px solid #eeeeee" }}
    >
      <div className="flex items-center">
        <X className="h-4 w-4 -px-6 flex-0 cursor-pointer" />
        <div className="text-lg font-semibold whitespace-nowrap flex-1 text-center">
          Review
        </div>
      </div>

      <div>
        <div className=" bg-gray flex-1 h-[1px] my-3 -mx-8 "></div>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Review"
          minRows={7}
          className=" w-full rounded-lg py-2 px-4"
          fullWidth
          style={{ border: "1px solid #eeeeee" }}
        />
      </div>

      <div>
        <div className="flex items-center justify-between py-1">
          <div className=" flex-1"> Instruments</div>
          <Rating className="flex-0" />
        </div>

        <div className="flex items-center justify-between py-1">
          <div className=" flex-1"> Safety</div>
          <Rating className="flex-0" />
        </div>

        <div className="flex items-center justify-between py-1">
          <div className=" flex-1">Cleanliness</div>
          <Rating className="flex-0" />
        </div>

        <div className="flex items-center justify-between py-1">
          <div className=" flex-1"> Faculty Support</div>
          <Rating className="flex-0" />
        </div>

        <div className="flex items-center justify-between py-1">
          <div className=" flex-1">
            {" "}
            Lorem ipsum dolor 
          </div>
          <Rating className="flex-0" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-16">
        <div>Close</div>
        <div>
          <Button
            className="!bg-accent !text-white !px-6  !py-1 !rounded-md"
            variant="outlined"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
