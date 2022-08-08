import React from "react";
import { Plus } from "heroicons-react";
import { TextField, Button } from "@mui/material";

function index() {
  return (
    <div className="flex flex-col border-r-[1px] border-gray">
      <div className="flex items-center flex-0 border-gray border-b-[1px] text-sm pl-3 py-2 pr-2">
        <div className="h-3 w-3 bg-temp mr-2 rounded-full"></div>
        Batch
      </div>

      <div className="flex flex-0 text-accent pl-2 py-2 pr-2 items-center">
        <Plus className="mr-2 w-5 h-5" />
        <div className="text-xs">Create Batch</div>
      </div>
        <input
          autoFocus
          className="outline-none bg-focus_color_1 px-9 py-1 font-medium"
          id="standard-basic"
          variant="standard"
        />
      <div className="flex-1"></div>
    </div>
  );
}

export default index;
