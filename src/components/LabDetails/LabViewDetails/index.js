import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import db from "../../../firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../state/index";

export default function Index({ LabCode, SubjectCode, refresh, setrefresh, setShowUploadModal,setshowReviewModel, uploadExperimentUrl, uploadPituresUrl, uploadBookingReceitUrl }) {
  const state = useSelector((state) => state.t1);

  const dispatch = useDispatch();

  const [TotalLabsCompleted, setTotalLabsCompleted] = useState();

  useEffect(() => {
    console.log(uploadExperimentUrl)
  }, [uploadExperimentUrl])
  

  const StudentMarksRef = db
    .collection("StudentsMarks")
    .doc(state.user.instituteuid)
    .collection(state.user.course)
    .doc(state.user.uid)
    .collection("subjects")
    .doc(SubjectCode)
    .collection("Lab")
    .doc(LabCode);

  const TotalLabsCompletedRef = db
    .collection("StudentsMarks")
    .doc(state.user.instituteuid)
    .collection(state.user.course)
    .doc(state.user.uid);

  // console.log(state.TotalLabsCompleted)

  const uploadAssignment = async () => {
    // setrefresh(!refresh);
    console.log(uploadExperimentUrl)
    await StudentMarksRef.set({
      completed: true,
      experimentUrl: uploadExperimentUrl,
      picturesUrl: uploadPituresUrl,
      bookingreceitUrl: uploadBookingReceitUrl
    });
    var i = 1;

    TotalLabsCompletedRef.onSnapshot((ss) => {
      if (ss.exists) {
        TotalLabsCompletedRef.get().then((s) => {
          console.log(s.data().totallabscompleted);
          while (i > 0) {
            TotalLabsCompletedRef.update({
              totallabscompleted: s.data().totallabscompleted + 1,
            });
            i--;
          }
          refreshPage();
        });
      } else {
        while (i > 0) {
          TotalLabsCompletedRef.set({
            totallabscompleted: 1,
          });
          i--;
        }
        refreshPage();
      }
    });
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <div className=" bg-gray flex-1 h-[1px] mt-3"></div>
      <div className=" my-6  py-4">
        <div className="font-semibold py-2">Requirements</div>
        <div className="text-sm py-2 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          exercitationem architecto perferendis qui ducimus deleniti saepe
          minima, tempore ea illum Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sit molestiae ratione odio quam. Odit voluptas,
          repellat delectus iure ea nobis doloribus quas quasi magni dicta porro
          dignissimos magnam debitis, harum voluptatum! Impedit natus ipsa
          explicabo ea illo recusandae odit iste numquam ipsum cum, quae
          voluptatem, ex aspernatur? Nostrum, vitae iusto?
        </div>
        <Button
          className="!bg-white !text-black !px-6  !py-1 !rounded-3xl !mt-6 "
          variant="outlined"
        >
          Download Exp PDF
        </Button>
      </div>
      <div className=" bg-gray flex-1 h-[1px] mt-3"></div>
      <div className="flex justify-between items-center pt-6">
        {/* <Button
          className="!bg-white !text-black !px-12  !py-2 !rounded-full "
          variant="outlined"
          onClick={uploadAssignment}
        >
          Upload Experiment
        </Button> */}
        <Button
          className="!bg-white !text-black !px-12  !py-2 !rounded-full "
          variant="outlined"
          onClick={() => {
            setShowUploadModal(true);
          }}
        >
          Upload Documents
        </Button>

        <div>
          <Button
            className="!bg-white !text-black !px-6  !py-2 !rounded-full !mr-4 "
            variant="outlined"
            onClick={() =>{
              setshowReviewModel(true);
              console.log("true")
            }}
          >
            Add Review
          </Button>

          <Button
            className="!bg-accent !text-white !px-6  !py-2 !rounded-full"
            variant="outlined"
            onClick={uploadAssignment}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
