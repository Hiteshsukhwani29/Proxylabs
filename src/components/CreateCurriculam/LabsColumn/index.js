import React, { useEffect, useState } from "react";
import { Plus, Minus } from "heroicons-react";
import db from "../../../firebase";
import ListItem from "../ListItem";
import { useSelector } from "react-redux";

function Index({ batchname, SubjectCode, LabCode, setLabCode, setSubjectCode }) {
  const state = useSelector(state => state.t1);
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
  console.log("from labs", SubjectCode);
  const SubjectRef = null;
  useEffect(() => {
    const SubjectRef = db
    .collection("curriculum")
    .doc(state.user.uid)
    .collection(batchname)
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
  }, [refresh, SubjectCode]);

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
    await SubjectRef.doc(randomSubjectCode).set({ name: InputText });
    setIsFocussed(false);
    setrefresh(!refresh);
  };

  return (
    <div className={`flex flex-col ${LabCode===null?'':'border-r-[1px]'} border-gray h-[100%]`}>
      <div className="flex items-center flex-0 border-gray border-b-[1px] text-sm pl-3 py-2 pr-2">
        <div
          className="flex group items-center justify-center h-3 w-3 bg-close mr-2 rounded-full z-0"
          onClick={() => setSubjectCode(null)}
        >
          <Minus className=" hidden group-hover:block p-[1.5px] group-hover:text-white duration-200 transition-transform z-10 " />
        </div>
        Labs
      </div>

      <div
        className="flex flex-0 text-accent pl-2 py-2 pr-2 items-center"
        onClick={() => {
          setShowInputBox(true);
          setIsFocussed(true);
          setActiveIndex(null);
        }}
      >
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
                setLabCode(value.labcode);
              }}
            >
              <ListItem text={value.labname} isEmpty={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
