import React, { useState } from "react";
import { TextareaAutosize, Chip, Stack, TextField } from "@mui/material";
import { XCircle } from "heroicons-react";

export default function Index({
  Experiments,
  setExperiments,
  Instruments,
  setInstruments,
  Amenities,
  setAmenities,
  CollegeGuidelines,
  setCollegeGuidelines,
}) {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  // const [Exp, setExp] = useState(['1','2']);

  // const [Temp, setTemp] = useState([]);
  // var Temp=[];
  const [text, settext] = useState([]);

  const addExperiment = (e) => {
    e.preventDefault();
    // Temp.push(text);
    // setExperiments(Temp);
    // setExp(...Exp,text);
  };

  return (
    <div className="flex flex-col w-[34rem] overflow-x-clip px-8 py-5 rounded-xl mr-6  ">
      <div>
        <div className="text-xl font-semibold mt-4">
          Experiments that can be performed in this lab
        </div>
        <div>
          <TextField
            className="!my-2 !w-[80%]"
            type="text"
            size="medium"
            placeholder="+ Add experiments"
            onChange={(e) => {
              setExperiments(e.target.value);
            }}
            value={Experiments}
          />
          {/* <div className="grid grid-rows grid-cols-2 w-[80%] ">
            
            <Chip
            className="w-fit !mb-2"
            label={res}
            onClick={handleClick}
            onDelete={handleDelete}
            deleteIcon={<XCircle />}
            />); */}

          {/* <Chip
              className="w-fit !mb-2"
              label="Custom delete icon"
              onClick={handleClick}
              onDelete={handleDelete}
              deleteIcon={<XCircle />}
            />
            <Chip
              className="w-fit !mb-2"
              label="Custom delete icon"
              onClick={handleClick}
              onDelete={handleDelete}
              deleteIcon={<XCircle />}
            />
            <Chip
              className="w-fit !mb-2"
              label="Custom delete icon"
              onClick={handleClick}
              onDelete={handleDelete}
              deleteIcon={<XCircle />}
            /> */}
          {/* </div> */}
        </div>
      </div>
      <div>
        <div>
          <div className="text-xl mt-4 font-semibold ">
            Instruments available
          </div>
          <div>
            <TextField
              className="!my-2 !w-[80%]"
              type="text"
              size="medium"
              placeholder="+ Add Instruments"
              onChange={(e) => {
                setInstruments(e.target.value);
              }}
              value={Instruments}
            />
            {/* <div className="grid grid-rows grid-cols-2 w-[80%] space-y-1  ">
              <Chip
                className="w-fit !mb-2"
                label="Custom delete icon"
                onClick={handleClick}
                onDelete={handleDelete}
                deleteIcon={<XCircle />}
              />
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="text-xl font-semibold mt-4">Add amenities</div>
        <div>
          <TextField
            className="!my-2 !w-[80%]"
            type="text"
            size="medium"
            placeholder="+ Add Amenities"
            onChange={(e) => {
              setAmenities(e.target.value);
            }}
            value={Amenities}
          />
          {/* <div className="grid grid-rows grid-cols-2 w-[80%]   ">
            <Chip
              className="w-fit !mb-2"
              label="Custom delete icon"
              onClick={handleClick}
              onDelete={handleDelete}
              deleteIcon={<XCircle />}
            />
          </div> */}
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
          <TextField
            multiline
            rows={5}
            className="!my-2 !w-[100%]"
            type="text"
            placeholder="Add college guidelines"
            onChange={(e) => {
              setAmenities(e.target.value);
            }}
            value={Amenities}
          />
        </div>
      </div>
    </div>
  );
}
