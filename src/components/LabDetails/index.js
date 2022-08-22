import React, { useEffect, useState } from "react";
import LabDetailItem from "./LabDetailsItem";
import LabReview from "./LabReview";
import db from "../../firebase";
import { useSelector } from "react-redux";
import { Refresh } from "heroicons-react";

export default function Index({ Course, SubjectCode, setTotalLabsCompleted }) {
  const [Items, setItems] = useState([]);

  const [refresh, setrefresh] = useState(false);

  const [counter, setcounter] = useState(0);

  const state = useSelector((state) => state.t1);

  var index = 0;

  useEffect(() => {
    var TempList = [];

    console.log(Course, SubjectCode);
    const SubjectRef = db
      .collection("curriculum")
      .doc(" nfQv08nR0Eh0FeCZBLY3S0AXCID2")
      .collection(Course)
      .doc(SubjectCode)
      .collection("Lab");

    const StudentMarksRef = db
      .collection("StudentsMarks")
      .doc(" nfQv08nR0Eh0FeCZBLY3S0AXCID2")
      .collection(Course)
      .doc(state.user.uid)
      .collection("subjects")
      .doc(SubjectCode)
      .collection("Lab");

    SubjectRef.onSnapshot((s) => {
      if (!s.empty) {
        s.docs.map((doc) => {
          var labcode = doc.id;
          var labname = doc.data().name;
          var maxmarks = doc.data().name;
          console.log(labcode);
          StudentMarksRef.doc(labcode).onSnapshot((snapshot) => {
            if (snapshot.exists) {
              TempList.push({
                labname,
                maxmarks,
                index,
                labcode,
                Completed: true,
              });
            } else {
              TempList.push({
                labname,
                maxmarks,
                index,
                labcode,
                Completed: false,
              });
              TempList.shift();

            }
            setItems(TempList);
          });
          index++;
        });
      } else {
        setItems([]);
      }
    });
    console.log(Items);
  }, [SubjectCode, refresh]);

  return (
    <>
      {Items.map(({ labcode, labname, maxmarks, Completed }) => {
        return (
          <div
            className="my-10 rounded-xl shadow-lg"
            style={{ border: "1px solid #eeeeee" }}
          >
            <LabDetailItem
              refresh={refresh}
              setrefresh={setrefresh}
              LabName={labname}
              Completed={Completed}
              LabCode={labcode}
              SubjectCode={SubjectCode}
              setTotalLabsCompleted={setTotalLabsCompleted}
            />
          </div>
        );
      })}
      <LabReview />
    </>
  );
}
