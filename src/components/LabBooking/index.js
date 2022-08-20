import React from "react";
import LabInstruments from "./LabInstruments";
import ClgGuidelines from "./ClgGuidelines";
import PhotoGallery from "./PhotoGallery";
import LabCalender from "./LabCalender";
import LabPerform from "./LabPerform"
import LabsetCalender from "./LabCalender/LabsetCalender"
export default function Index() {
  return (
    <div className=" mx-24">

    <div className="flex items-center px-12  py-6">
      <div>
      <div className="h-16 w-16 bg-temp rounded-full "></div>
      </div>
      <div className="mx-6 w-full">
        <div className="font-bold text-xl pb-2 ">Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune</div>
        <div className="flex justify-between items-center">
          <div>Distance : 0.5 km</div>
          <div className="border px-4 py-1 rounded-lg">Distance : 0.5 km</div>
        </div>
      </div>
    </div>

    <div className=" bg-gray flex-1 h-[1px] my-3 "></div>






      <PhotoGallery />

      <div className="grid grid-cols-2 my-6 mt-16">
        <div>
          <div className="mb-12"><LabPerform/></div>
          <div className="my-12"><LabInstruments/></div>
          <div className="mt-12"><ClgGuidelines/></div>
          
        </div>
        <div>
          {/* <LabCalender /> */}
          <LabsetCalender/>
        </div>
      </div>
    </div>
  );
}
