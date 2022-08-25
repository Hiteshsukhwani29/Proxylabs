import React, { useEffect, useState } from "react";
import LabDetails from "../../components/LabDetails";
import db from "../../firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state/index";

function Index() {
  const [Items, setItems] = useState([]);
  const [ActiveIndex, setActiveIndex] = useState(0);
  const [SubjectCode, setSubjectCode] = useState("-1");
  const [TotalLabs, setTotalLabs] = useState(0);
  const [TotalLabsCompleted, setTotalLabsCompleted] = useState(0);

  const state = useSelector((state) => state.t1);

  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem("token"));
  const type = JSON.parse(localStorage.getItem("type"));

   const [loaded, setloaded] = useState(false);

   useEffect(() => {
   if (token) {
     if(type==="Institute"){
       var userRef = db.collection("Institutes").doc(token).get();
       userRef.then((docSnapshot) => {
         if (docSnapshot.exists) {
          userRef.then((snapshot) => {
             dispatch(actionCreators.setUser(snapshot.data()));
             setloaded(true);
           });
         }
       });
      }
      if(type==="Student"){
        var userRef = db.collection("users").doc(token).get();
        userRef.then((docSnapshot) => {
          if (docSnapshot.exists) {
           userRef.then((snapshot) => {
              dispatch(actionCreators.setUser(snapshot.data()));
              setloaded(true);
            });
          }
        });
       }
     } else {
       setloaded(true);
    }
   }, []);

  var TempList = [];
  var index = 0;

  const BatchRef = db
    .collection("curriculum")
    .doc(" nfQv08nR0Eh0FeCZBLY3S0AXCID2")
    .collection(state.user.course);

  const StudentMarksRef = db
    .collection("StudentsMarks")
    .doc(" nfQv08nR0Eh0FeCZBLY3S0AXCID2")
    .collection(state.user.course)
    .doc(state.user.uid);

  console.log("from subject info", state.user.course);
  console.log(state.user.uid);
  useEffect(() => {
    StudentMarksRef.onSnapshot((ss) => {
      if (ss.exists) {
        StudentMarksRef.get().then((s) => {
          setTotalLabsCompleted(s.data().totallabscompleted);
          dispatch(actionCreators.setLabsCompleted(TotalLabsCompleted));
          console.log("total labs completed", TotalLabsCompleted);
        });
      }
      else{
        dispatch(actionCreators.setLabsCompleted(0));
      }
    });
    BatchRef.doc("-1")
      .get()
      .then((snapshot) => {
        setTotalLabs(snapshot.data().totallabs);
      });
    BatchRef.onSnapshot((ss) => {
      console.log(ss.docs.map((doc) => doc.data()));
      ss.docs.map((doc) => {
        // TempList.push(doc.data().name);
        // BatchRef.doc(doc.id)
        //   .collection("Lab")
        //   .onSnapshot((s) => {
        //     console.log(s.docs.map((doc) => doc.data()));
        //   });
        var name = doc.data().name;
        var subjectCode = doc.id;
        TempList.push({ name, index, subjectCode });
        index++;
      });
      TempList.shift();
      setItems(TempList);
    });
    console.log(Items);
  }, []);

  return (
    <div className="flex flex-col mx-48">
      <div className="font-semibold font-montserrat">My Curriculum</div>

      <div className="flex mt-4">
        <div className="flex flex-1">
          {Items.map(({ name, index, subjectCode }) => {
            return (
              <div
                className={`mr-7 ${
                  ActiveIndex === index ? "font-medium" : "font-light"
                } hover:font-medium`}
                onClick={() => {
                  setActiveIndex(index);
                  setSubjectCode(subjectCode);
                }}
              >
                {name}
              </div>
            );
          })}
        </div>
        <div className="flex-0">
          {TotalLabsCompleted}/{TotalLabs}
        </div>
      </div>
      <LabDetails
        Course={state.user.course}
        SubjectCode={SubjectCode}
        setTotalLabsCompleted={setTotalLabsCompleted}
      />
    </div>
  );
}

export default Index;
