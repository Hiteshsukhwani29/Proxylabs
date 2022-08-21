import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import LabViewDetails from "../LabViewDetails";
import CompletedIcon from "../../../assets/completed_icon.png";
import UploadDocuments from "../../UploadDocuments";

export default function Index({
  LabName,
  Completed,
  LabCode,
  SubjectCode,
  refresh,
  setrefresh,
  setTotalLabsCompleted,
}) {
  const [TitleDesc, setTitleDesc] = useState(
    "Title of the experiment that student has to perform."
  );

  const [uploadExperimentUrl, setuploadExperimentUrl] = useState("");
  const [uploadPituresUrl, setuploadPituresUrl] = useState("");
  const [uploadBookingReceitUrl, setuploadBookingReceitUrl] = useState("");

  const [ViewDetails, setViewDetails] = useState(false);

  const [ShowUploadModal, setShowUploadModal] = useState(false);

  useEffect(() => {
    console.log("working",uploadExperimentUrl)
  }, [uploadExperimentUrl])
  

  return (
    <div className={`bg-white rounded-lg px-16 py-6 mx-8 my-2 flex flex-col`}>
            {ShowUploadModal?
        <div className="relative z-20">
        <UploadDocuments setuploadExperimentUrl={setuploadExperimentUrl} setuploadPituresUrl={setuploadPituresUrl} setuploadBookingReceitUrl={setuploadBookingReceitUrl} setShowUploadModal={setShowUploadModal}/>
        </div>:<></>}
      <div className="my-6 py-4">
        <div>
          <div className="flex flex-1">
            <div className="flex-col justify-around">
              <div className="font-semibold text-xl">{LabName}</div>
              <div className="font-semibold text-base">{TitleDesc},</div>
              <div className="text-base py-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                totam delectus hic quod culpa id tenetur libero similique velit
                numquam Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Earum autem nisi similique, debitis quibusdam minus?
              </div>
            </div>
            <div className="flex ml-6 mt-3">
              <div className="flex flex-col items-start justify-start">
                {!Completed ? (
                  <div className="leading-7">Incomplete</div>
                ) : (
                  <div className="leading-7">Completed</div>
                )}
                <div className="leading-7 mt-3">Evaluation</div>
              </div>
              <div className="flex flex-col ml-3 items-center justify-start">
                {!Completed ? (
                  <div
                    className="h-7 w-7 rounded-full"
                    style={{ border: "1px solid #eeeeee" }}
                  ></div>
                ) : (
                  <img className="h-6 w-6 rounded-full" src={CompletedIcon} />
                )}
                <div
                  className="mt-3 h-7 w-20 rounded-md"
                  style={{ border: "1px solid #eeeeee" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>Remarks</div>
          <div>
            <Button
              className="!bg-white !text-black !px-6  !py-2 !rounded-full !mr-4"
              variant="outlined"
              onClick={() => setViewDetails(!ViewDetails)}
            >
              View Details
            </Button>
            <Button
              className="!bg-accent !text-white !px-6  !py-2 !rounded-3xl"
              variant="outlined"
            >
              Search Labs
            </Button>
          </div>
        </div>
      </div>
      {ViewDetails ? (
        <LabViewDetails
          LabCode={LabCode}
          SubjectCode={SubjectCode}
          refresh={refresh}
          setrefresh={setrefresh}
          setTotalLabsCompleted={setTotalLabsCompleted}
          setShowUploadModal={setShowUploadModal}
          uploadExperimentUrl={uploadExperimentUrl}
          uploadPituresUrl={uploadPituresUrl}
          uploadBookingReceitUrl={uploadBookingReceitUrl}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
