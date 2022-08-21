import React from "react";
import { TextareaAutosize, Chip } from "@mui/material";
import { XCircle } from "heroicons-react";

export default function index() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <div className="flex flex-col w-[34rem] overflow-x-clip px-8 py-5 rounded-xl mr-6  ">
      <div>
        <div className="text-xl font-semibold mt-4">
          Experiments that can be performed in this lab
        </div>
        <div>
          <input
            className="w-[80%] h-12 px-5 my-3 border rounded-lg "
            type="text"
            placeholder="+ Add experiments"
            style={{ border: "1px solid #CBCBCB" }}
          />
          <div className="grid grid-rows grid-cols-2 w-[80%] s  ">
            <Chip
              className="w-fit !mb-2"
              label="Custom delete icon"
              onClick={handleClick}
              onDelete={handleDelete}
              deleteIcon={<XCircle />}
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xl mt-4 font-semibold ">
            Instruments available
          </div>
          <div>
            <input
              className="w-[80%] h-12 px-5 my-3 border rounded-lg "
              type="text"
              placeholder="+ Add instruments"
              style={{ border: "1px solid #CBCBCB" }}
            />
            <div className="grid grid-rows grid-cols-2 w-[80%] space-y-1  ">
              <Chip
                className="w-fit !mb-2"
                label="Custom delete icon"
                onClick={handleClick}
                onDelete={handleDelete}
                deleteIcon={<XCircle />}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-xl font-semibold mt-4">Add amenities</div>
        <div>
          <input
            className="w-[80%] h-12 px-5 my-3 border rounded-lg "
            type="text"
            placeholder="+ Add amenities"
            style={{ border: "1px solid #CBCBCB" }}
          />
          <div className="grid grid-rows grid-cols-2 w-[80%]   ">
            <Chip
              className="w-fit !mb-2"
              label="Custom delete icon"
              onClick={handleClick}
              onDelete={handleDelete}
              deleteIcon={<XCircle />}
            />
          </div>
        </div>
        <div className=" bg-gray flex-1 h-[1px]  "></div>
        <div className=" my-4 text-sm font-medium">or select from here</div>

        <div className="grid   grid-rows-2 grid-cols-3">
          <div
            className="rounded-lg h-10 mb-4 w-32 px-4"
            style={{ border: "1px solid #CBCBCB" }}
          >
            Free Wifi
          </div>
          <div
            className="rounded-lg h-10 mb-4 w-32 px-4"
            style={{ border: "1px solid #CBCBCB" }}
          >
            Free Wifi
          </div>
          <div
            className="rounded-lg h-10 mb-4 w-32 px-4"
            style={{ border: "1px solid #CBCBCB" }}
          >
            Free Wifi
          </div>
          <div
            className="rounded-lg h-10 w-32 px-4"
            style={{ border: "1px solid #CBCBCB" }}
          >
            Free Wifi
          </div>
          <div
            className="rounded-lg h-10 w-32 px-4"
            style={{ border: "1px solid #CBCBCB" }}
          >
            Free Wifi
          </div>
          <div
            className="rounded-lg h-10 w-32 px-4"
            style={{ border: "1px solid #CBCBCB" }}
          >
            Free Wifi
          </div>
        </div>
        <div className=" bg-gray flex-1 h-[1px]  "></div>
        <div>
          <div className="text-xl font-semibold mt-4">College Guidelines</div>
          <TextareaAutosize
            aria-label="empty textarea"
            minRows={5}
            placeholder="Add college guidelines"
            className=" w-full rounded-lg py-2 px-4 my-5"
            fullWidth
            style={{ border: "1px solid #eeeeee" }}
          />
        </div>
      </div>
    </div>
  );
}
