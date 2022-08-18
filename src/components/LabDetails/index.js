import React, { useEffect, useState } from "react";
import LabDetailItem from "./LabDetailsItem";
import LabReview from "./LabReview";
import db from "../../firebase";

export default function Index({ Course, SubjectCode }) {
  const [Items, setItems] = useState([]);

  var TempList = [];
  var index = 0;

  useEffect(() => {
    const SubjectRef = db
      .collection("curriculum")
      .doc(" nfQv08nR0Eh0FeCZBLY3S0AXCID2")
      .collection(Course)
      .doc(SubjectCode)
      .collection("Lab");
    SubjectRef.onSnapshot((s) => {
      s.docs.map((doc) => {
        var labcode = doc.id;
        var labname = doc.data().name;
        var maxmarks = doc.data().name;
        TempList.push({ labname, maxmarks, index, labcode });
        index++;
      });
      setItems(TempList);
    });
    console.log(Items);
  }, [SubjectCode]);

  return (
    <>
      {Items.map(({ labcode, labname, maxmarks }) => {
        return (
          <div
            className="my-10 rounded-xl shadow-lg"
            style={{ border: "1px solid #eeeeee" }}
          >
            <LabDetailItem LabName={labname} />
          </div>
        );
      })}
      <LabReview />
    </>
  );
}
