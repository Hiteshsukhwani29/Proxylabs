import React from "react";
import { Button, TextareaAutosize, TextField } from "@mui/material";
import { PlusSm } from "heroicons-react";

export default function index({ LabName, setLabName, LabDescription, setLabDescription }) {
  return (
    <div className=" my-3">
      <TextField
      multiline
      label="Lab Name"
        className=" w-full !my-5"
        onChange={(e) => {
          setLabName(e.target.value);
        }}
        value={LabName}
        style={{ border: "1px solid #eeeeee" }}
      />

<TextField
      multiline
      minRows={5}
      label="Description"
        className=" w-full !my-3"
        onChange={(e) => {
          setLabDescription(e.target.value);
        }}
        value={LabDescription}
        style={{ border: "1px solid #eeeeee" }}
      />

      <Button
        style={{ border: "1px solid #eeeeee" }}
        component="label"
        className="w-full h-60 !bg-white !text-black !mt-16 hover:drop-shadow-xl"
      >
        <div className="flex items-center flex-col">
          <div>
            <PlusSm />
          </div>
          <div>Add Photos</div>
        </div>
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </div>
  );
}
