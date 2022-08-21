import React from "react";
import LabInstruments from "./LabInstruments";
import ClgGuidelines from "./ClgGuidelines";
import PhotoGallery from "./PhotoGallery";
import LabCalender from "./LabCalender";
import LabPerform from "./LabPerform";
import InstituteBanner from "./InstituteBanner";
import LabsetCalender from "./LabCalender/LabsetCalender";
export default function Index() {
  return (
    <div className=" mx-24">
      <InstituteBanner />

      <div className=" bg-gray flex-1 h-[1px] my-3 "></div>

      <PhotoGallery />

      <div className="grid grid-cols-2 my-6 mt-16">
        <div>
          <div className="mb-12">
            <LabPerform />
          </div>
          <div className="my-12">
            <LabInstruments />
          </div>
          <div className="mt-12">
            <ClgGuidelines />
          </div>
        </div>
        <div>
          {/* <LabCalender /> */}
          <LabsetCalender/>
        </div>
      </div>
    </div>
  );
}
