import React from "react";
import InstituteBanner from "../LabBooking/InstituteBanner";
import HostForm from "./HostForm";
import HostSchedular from "./HostSchedular";
import HostExperimentDetail from "./HostExpermentDetail";
import { TextareaAutosize } from "@mui/material";

export default function Index() {
  return (
    <div className="my-8 flex justify-center ">
      <div className="w-fit">
      <div >
      <InstituteBanner />
    <HostForm/>
      </div>

    <div className="grid grid-cols-2 mt-20 ">
    <HostExperimentDetail/>
    <HostSchedular />
    </div>

    <div className=" ">
    <div className=" my-10 bg-gray flex-1 h-[1px]  "></div>
    <TextareaAutosize
            aria-label="empty textarea"
            minRows={5}
            placeholder="Add Labs"
            className=" w-full rounded-lg py-2 px-4 my-5"
            fullWidth
            style={{ border: "1px solid #eeeeee" }}
          />
    </div>
      </div>
    </div>
  );
}
