import React, { useEffect, useState } from "react";
import { Plus } from "heroicons-react";
import db from "../../../firebase";
import ListItem from "../ListItem";

function Index({ batchname, SubjectCode }) {
  const [Items, setItems] = useState([]);
  const [ItemsEmptyList, setItemsEmptyList] = useState([]);
  var TempList = [];
  var TempList1 = [];
  var index=0;
  const [ActiveIndex, setActiveIndex] = useState(null);
  const [ShowInputBox, setShowInputBox] = useState(false);
  const [InputText, setInputText] = useState("");
  const [IsFocussed, setIsFocussed] = useState(false);
  const [refresh, setrefresh] = useState(false);
  console.log("from labs", SubjectCode);
  const SubjectRef = db
    .collection("curriculum")
    .doc(" nfQv08nR0Eh0FeCZBLY3S0AXCID2")
    .collection(batchname).doc(SubjectCode).collection("Lab");
  useEffect(() => {
        SubjectRef.onSnapshot((s)=>{
            s.docs.map((doc) => {
                var labname = doc.data().name;
                var maxmarks = doc.data().name;
                TempList.push({labname,maxmarks,index});
                index++;
            })
            setItems(TempList);
    });
  }, [refresh]);

  useEffect(() => {
    if (IsFocussed === false) {
      setInputText("");
    }
  }, [IsFocussed]);

  const createLab = async(e) => {
    e.preventDefault();
    var randomSubjectCode = "";
    var numbers = "123456789";
    for (var i = 0; i < 7; i++) {
      randomSubjectCode += numbers.charAt(
        Math.floor(Math.random() * numbers.length)
      );
    }
    await SubjectRef.doc(randomSubjectCode).set({ name: InputText });
    await SubjectRef.doc(randomSubjectCode).collection("Lab").doc("-1").set({});
    setIsFocussed(false);
    setrefresh(!refresh);
  }

  return (
    <div className="flex flex-col border-r-[1px] border-gray">
      <div className="flex items-center flex-0 border-gray border-b-[1px] text-sm pl-3 py-2 pr-2">
        <div className="h-3 w-3 bg-temp mr-2 rounded-full"></div>
        Labs
      </div>

      <div className="flex flex-0 text-accent pl-2 py-2 pr-2 items-center" onClick={() => {
          setShowInputBox(true);
          setIsFocussed(true);
          setActiveIndex(null);
        }}>
        <Plus className="mr-2 w-5 h-5" />
        <div className="text-xs">Create Lab</div>
      </div>
      {ShowInputBox && IsFocussed ? (
        <form className="bg-focus_color_1" onSubmit={createLab}>
          <input
            className="outline-none bg-focus_color_1 pr-2 pl-4 py-1 font-medium"
            autoFocus
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            value={InputText}
            onClick={(e) => {
              setIsFocussed(true);
              e.preventDefault();
            }}
            onKeyPress={(e) => e.key === "Enter"}
          />
        </form>
      ) : (
        <></>
      )}
      <div className="flex-1" onClick={() => setIsFocussed(false)}>
        {Items.map((value) => {
          return (
            <div
              className={`${
                value.index === ActiveIndex ? "bg-focus_color_1" : "bg-white"
              } cursor-pointer py-1`}
              onClick={() => {
                setActiveIndex(value.index);
              }}
            >
              <ListItem
                text={value.labname}
                isEmpty={true}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
