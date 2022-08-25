import React, { useState } from "react";
import LabInstruments from "./LabInstruments";
import ClgGuidelines from "./ClgGuidelines";
import PhotoGallery from "./PhotoGallery";
import LabCalender from "./LabCalender";
import LabPerform from "./LabPerform";
import InstituteBanner from "../InstituteBanner";
import LabsetCalender from "./LabCalender/LabsetCalender";
import Amenities from "./Amenities";
import icon from "../../assets/nav_profile_icon.png";

export default function Index() {
  const [first, setfirst] = useState("");

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

          <div className="ml-14">
            <div className=" bg-gray flex-1 h-[1px] my-3  "></div>
            <div className="font-bold text-lg py-4">Amenities</div>
            <div className="grid grid-cols-3 ">
              <Amenities amenities="Free Wifi" Amenitiesicon={icon} />
              <Amenities amenities="Free Wifi" Amenitiesicon={icon} />
              <Amenities amenities="Free Wifi" Amenitiesicon={icon} />
              <Amenities amenities="Free Wifi" Amenitiesicon={icon} />
              <Amenities amenities="Free Wifi" Amenitiesicon={icon} />
              <Amenities amenities="Free Wifi" Amenitiesicon={icon} />
            </div>
            <div className=" bg-gray flex-1 h-[1px] mt-8 "></div>
          </div>

          <div className="mt-8">
            <ClgGuidelines />
          </div>
        </div>
        <div>
          {/* <LabCalender /> */}
          <LabsetCalender />
        </div>
      </div>
    </div>
  );
}
