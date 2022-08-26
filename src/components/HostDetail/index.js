import React, { useEffect, useState } from "react";
import InstituteBanner from "../InstituteBanner";
import HostForm from "./HostForm";
import HostSchedular from "./HostSchedular";
import HostExperimentDetail from "./HostExpermentDetail";
import db from "../../firebase";

export default function Index() {
  const [Items, setItems] = useState([]);
  const [ActiveIndex, setActiveIndex] = useState(0);
  const [ActiveDoc, setActiveDoc] = useState();
  const [LabCode, setLabCode] = useState("-1");

  const [ShowHostForm, setShowHostForm] = useState(false);

  const [LabName, setLabName] = useState("");
  const [LabDescription, setLabDescription] = useState("");
  const [Experiments, setExperiments] = useState([]);
  const [Instruments, setInstruments] = useState([]);
  const [Amenities, setAmenities] = useState([]);
  const [CollegeGuidelines, setCollegeGuidelines] = useState("");
  const [IsSubmitClicked, setIsSubmitClicked] = useState(false);
  const [Dates, setDates] = useState([]);
  const [Time, setTime] = useState([]);

  var TempList = [];
  var index = 0;

  const RemoteLabsRef = db
    .collection("RemoteLabs")
    .doc(" nfQv08nR0Eh0FeCZBLY3S0AXCID2")
    .collection("Labs");

  useEffect(() => {
    RemoteLabsRef.get().then((snapshot) => {
      if (!snapshot.empty) {
        snapshot.docs.map((doc) => console.log(doc.data()));
      }
      snapshot.docs.map((doc) => {
        var labname = doc.data().labname;
        var labcode = doc.id;
        setLabName(labname);
        setLabDescription(doc.data().labdesc);
        setExperiments(doc.data().experiments);
        setInstruments(doc.data().instruments);
        setAmenities(doc.data().amenities);
        setCollegeGuidelines(doc.data().guidelines);
        TempList.push({ labname, index, labcode });
        index++;
      });
      setItems(TempList);
    });
  }, []);

  useEffect(() => {
    if(IsSubmitClicked===true){
    if (ActiveIndex === "-1") {
      console.log("working")
      var randomLabCode = "";
      var numbers = "123456789";
      for (var i = 0; i < 7; i++) {
        randomLabCode += numbers.charAt(
          Math.floor(Math.random() * numbers.length)
        );
      }
      RemoteLabsRef.doc(randomLabCode).set({labname:LabName, labdesc:LabDescription, experiments:Experiments, instruments: Instruments, amenities: Amenities, guidelines: CollegeGuidelines})
    }
    else{
      RemoteLabsRef.doc(ActiveDoc).set({labname:LabName, labdesc:LabDescription, experiments:Experiments, instruments: Instruments, amenities: Amenities, guidelines: CollegeGuidelines})
    }
  }

  }, [IsSubmitClicked]);

  const getData = () => {
    RemoteLabsRef.get().then((snapshot) => {
      if (!snapshot.empty) {
        snapshot.docs.map((doc) => console.log(doc.data()));
      }
      var labname = snapshot.docs[ActiveIndex].data().labname;
      setLabName(labname);
      setLabDescription(snapshot.docs[ActiveIndex].data().labdesc);
      setExperiments(snapshot.docs[ActiveIndex].data().experiments);
      setInstruments(snapshot.docs[ActiveIndex].data().instruments);
      setAmenities(snapshot.docs[ActiveIndex].data().amenities);
      setCollegeGuidelines(snapshot.docs[ActiveIndex].data().guidelines);
    });
  };

  return (
    <div className="my-8 flex justify-center ">
      <div className="w-fit">
        <div>
          <InstituteBanner />
          <div className=" bg-gray flex-1 h-[1px]  "></div>

          <div className="flex flex-col mx-5 mt-5">
            <div className="font-semibold font-montserrat">My Labs</div>

            <div className="flex mt-4">
              <div
                className="px-2 rounded-full border mr-7"
                onClick={() => {
                  setShowHostForm(true);
                  setLabName("");
                  setLabDescription("");
                  setExperiments([]);
                  setInstruments([]);
                  setAmenities([]);
                  setCollegeGuidelines("");
                  setActiveIndex("-1");
                }}
              >
                + Add Lab
              </div>
              <div className="flex flex-1">
                {Items.map(({ labname, index, labCode }) => {
                  return (
                    <div
                      className={`mr-7 ${
                        ActiveIndex === index ? "font-medium" : "font-light"
                      } hover:font-medium`}
                      onClick={() => {
                        setActiveIndex(index);
                        setActiveDoc(labCode);
                        setLabCode(labCode);
                        setShowHostForm(true);
                        getData();
                      }}
                    >
                      {labname}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {ShowHostForm ? (
          <>
            <HostForm
              LabName={LabName}
              setLabName={setLabName}
              LabDescription={LabDescription}
              setLabDescription={setLabDescription}
            />

            <div className="grid grid-cols-2 mt-20 ">
              <HostExperimentDetail
                Experiments={Experiments}
                setExperiments={setExperiments}
                Instruments={Instruments}
                setInstruments={setInstruments}
                Amenities={Amenities}
                setAmenities={setAmenities}
                CollegeGuidelines={CollegeGuidelines}
                setCollegeGuidelines={setCollegeGuidelines}
              />
              <HostSchedular
                IsSubmitClicked={IsSubmitClicked}
                setIsSubmitClicked={setIsSubmitClicked}
              />
            </div>

            <div className=" ">
              <div className=" my-10 bg-gray flex-1 h-[1px]  "></div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
