import React, { useEffect, useState } from "react";
import LabDetailItem from "./LabDetailsItem";
import LabReview from "./LabReview";
import db from "../../firebase";
import { useSelector } from "react-redux";

export default function Index({ Course, SubjectCode }) {
  const [Items, setItems] = useState([]);

  const state = useSelector(state => state.t1);

  var index = 0;

  useEffect(() => {
    var TempList = [];

    console.log(Course,SubjectCode)
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
      s.docs.map((doc) => {
        var labcode = doc.id;
        var labname = doc.data().name;
        var maxmarks = doc.data().name;
        console.log(labcode);
        var Completed = null;
        // TempList.push({ labname, maxmarks, index, labcode, Completed:false });
        StudentMarksRef.doc(labcode).onSnapshot((snapshot)=>{
          if(snapshot.exists){
            TempList.push({ labname, maxmarks, index, labcode, Completed:true });

            // StudentMarksRef.doc(labcode).get().then((snapshot)=>{
            //   Completed = snapshot.data().completed;
            //   console.log(Completed)
            //   TempList.push({ labname, maxmarks, index, labcode, Completed:true });
            //   setItems(TempList);
            //   index++;          
            // })
          }
          else{
            TempList.push({ labname, maxmarks, index, labcode, Completed:false });
          }
          // else{
          //   console.log("False")
          //   TempList.push({ labname, maxmarks, index, labcode, Completed:false });
          //   setItems(TempList);
          //   index++;
          // }
        })
        
        setItems(TempList)
        index++;
      });
    });

    console.log(Items);
  }, [SubjectCode]);

  return (
    <>
      {Items.map(({ labcode, labname, maxmarks, Completed }) => {
        return (
          <div
            className="my-10 rounded-xl shadow-lg"
            style={{ border: "1px solid #eeeeee" }}
          >
            <LabDetailItem LabName={labname} Completed={Completed} LabCode={labcode} SubjectCode={SubjectCode} />
          </div>
        );
      })}
      <LabReview />
    </>
  );
}
