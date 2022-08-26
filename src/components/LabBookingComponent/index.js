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

export default function Index({ LabIndex }) {

  const [clgname, setclgname] = useState("");
  const [labname, setlabname] = useState("");
  const [experiments, setexperiments] = useState("");
  const [instruments, setinstruments] = useState("");
  const [amenities, setamenities] = useState("");
  const [guidelines, setguidelines] = useState("");
  
  useEffect(() => {
    db.collection("RemoteLabs").doc("8oMBffsZwMONpHoz5GKtyMIhGD53").collection("Labs").doc("11111").onSnapshot((snapshot)=>{
      console.log(snapshot.data().clgname);
      
    })
  }, []);
  
  let splitedexperiment = experiments.split(',').map(item => item.trim());
    return splitedexperiment.join("\n &#8226;");

  return (
    <div className=" mx-24">
      <InstituteBanner clgname={clgname}/>

      <div className="bg-gray flex-1 h-[1px] my-3 "></div>

      <div classname="text-lg">{labname}</div>

      <PhotoGallery imgurl={imgurl} imgurl1={imgurl1} imgurl2={imgurl2} imgurl3={imgurl3} imgurl4={imgurl4}/>

      <div className="grid grid-cols-2 my-6 mt-16">
        <div>
          <div className="mb-12">
            <LabPerform experiments={experiments} />
          </div>
          <div className="my-12">
            <LabInstruments instruments={instruments}/>
          </div>

          <div className="ml-14">
            <div className=" bg-gray flex-1 h-[1px] my-3  "></div>
            <div className="font-bold text-lg py-4">Amenities</div>
            <div className="grid grid-cols-3 ">
              <Amenities amenities={amenities} />
            </div>
            <div className=" bg-gray flex-1 h-[1px] mt-8 "></div>
          </div>

          <div className="mt-8">
            <ClgGuidelines guidelines={guidelines} />
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
