import React, { useEffect, useState } from "react";
import { Minus } from "heroicons-react";
import db from "../../../firebase";
import { TextField, Button, withStyles } from "@mui/material";
import { Refresh } from "heroicons-react";

function Index({ batchname, SubjectCode, LabCode, setLabCode }) {
  const [Items, setItems] = useState([]);
  const [ItemsEmptyList, setItemsEmptyList] = useState([]);
  var TempList = [];
  var TempList1 = [];
  var index = 0;
  const [ActiveIndex, setActiveIndex] = useState(null);
  const [ShowInputBox, setShowInputBox] = useState(false);
  const [InputText, setInputText] = useState("");
  const [IsFocussed, setIsFocussed] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [LabAim, setLabAim] = useState("");
  const [LabName, setLabName] = useState("")
  const [LabTitle, setLabTitle] = useState("")
  const [LabDescription, setLabDescription] = useState("");
  console.log("from lab info", LabCode);

  var LabRef;

  useEffect(() => {
    LabRef = db
      .collection("curriculum")
      .doc(" nfQv08nR0Eh0FeCZBLY3S0AXCID2")
      .collection(batchname)
      .doc(SubjectCode)
      .collection("Lab")
      .doc(LabCode);
    LabRef.get().then((snapshot) => {
      console.log(snapshot.data());
      setLabAim(snapshot.data().aim);
      setLabName(snapshot.data().name);
      setLabTitle(snapshot.data().title);
    });
    // SubjectRef.onSnapshot((s) => {
    //   s.docs.map((doc) => {
    //     var labname = doc.data().name;
    //     var maxmarks = doc.data().name;
    //     TempList.push({ labname, maxmarks, index });
    //     index++;
    //   });
    //   setItems(TempList);
    // });
  }, [refresh, LabCode]);

  const addLabDetails = () => {
    LabRef.get().then((snapshot) => {
      LabRef.update({labname:LabName, aim:LabAim, title:LabTitle, desc:LabDescription});
    })
  }

  useEffect(() => {
    if (IsFocussed === false) {
      setInputText("");
    }
  }, [IsFocussed]);

  const createLab = async (e) => {
    e.preventDefault();
    var randomSubjectCode = "";
    var numbers = "123456789";
    for (var i = 0; i < 7; i++) {
      randomSubjectCode += numbers.charAt(
        Math.floor(Math.random() * numbers.length)
      );
    }
    // await SubjectRef.doc(randomSubjectCode).set({ name: InputText });
    // await SubjectRef.doc(randomSubjectCode).collection("Lab").doc("-1").set({});
    setIsFocussed(false);
    setrefresh(!refresh);
  };

  return (
    <div className="flex flex-col border-gray h-[34rem] overflow-y-none">
      <div className="flex items-center flex-0 border-gray border-b-[1px] text-sm pl-3 py-2 pr-2">
        <div
          className="flex group items-center justify-center h-3 w-3 bg-close mr-2 rounded-full z-0"
          onClick={() => setLabCode(null)}
        >
          <Minus className=" hidden group-hover:block p-[1.5px] group-hover:text-white duration-200 transition-transform z-10 " />
        </div>
        Lab Info
      </div>
      <div
        className="flex-1 flex-col items-start justify-start overflow-y-scroll"
        onClick={() => setIsFocussed(false)}
      >
        <TextField
          multiline
          className="!w-96 !text-xs !m-4"
          variant="outlined"
          size="small"
          label="Lab Name"
          onChange={(e) => {
            setLabName(e.target.value);
          }}
          value={LabName}
        />

        <TextField
          multiline
          className="!w-96 !text-xs !m-4"
          variant="outlined"
          size="small"
          label="Title of experiment"
          onChange={(e) => {
            setLabTitle(e.target.value);
          }}
          value={LabTitle}
        />

        <TextField
          multiline
          className="!w-96 !text-xs !m-4"
          variant="outlined"
          size="small"
          label="Aim of experiment"
          onChange={(e) => {
            setLabAim(e.target.value);
          }}
          value={LabAim}
        />
        <TextField
          multiline
          minRows={7}
          className="!w-96 !text-xs !mt-0 !m-4"
          variant="outlined"
          size="small"
          label="Description"
          onChange={(e) => {
            setLabDescription(e.target.value);
          }}
          value={LabDescription}
        />
      </div>
      <div
        className="py-2 flex justify-end px-4 !border-b-0 !border-l-0 !border-r-0"
        style={{ border: "1px solid rgba(0,0,0,0.23)" }}
      >
        <Button
          variant="outlined"
          size="small"
          className="w-min text-xs !px-7 whitespace-nowrap"
          onClick={createLab}
        >
          Create Code/ Save Changes
        </Button>
      </div>
    </div>
  );
}

export default Index;
