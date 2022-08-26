import React, { useEffect, useState } from "react";
import { Plus, Minus } from "heroicons-react";
import db from "../../../firebase";
import ListItem from "../ListItem";
import { useSelector } from "react-redux";

function Index({ batchname, setSubjectCode, setBatch }) {
  const [Items, setItems] = useState([]);
  const [ItemsEmptyList, setItemsEmptyList] = useState([]);

  const [ActiveIndex, setActiveIndex] = useState(null);
  const [ShowInputBox, setShowInputBox] = useState(false);
  const [InputText, setInputText] = useState("");
  const [IsFocussed, setIsFocussed] = useState(false);
  const [refresh, setrefresh] = useState(false);

  const state = useSelector(state => state.t1);

  var TempList = [];
  var TempList1 = [];
  var index = 0;
  var SubjectCode;

  const BatchRef = db
    .collection("curriculum")
    .doc(state.user.uid)
    .collection(batchname);

  console.log("from subject info", batchname);
  useEffect(() => {
    BatchRef.onSnapshot((ss) => {
      console.log(ss.docs.map((doc) => doc.data()));
      ss.docs.map((doc) => {
        BatchRef.doc(doc.id)
          .collection("Lab")
          .onSnapshot((s) => {
            if (!s.empty) {
              console.log(ss);
              TempList1.push(false);
              setItemsEmptyList(TempList1);
              setItems(TempList);
            }
            if (s.empty) {
              TempList1.push(true);
              setItemsEmptyList(TempList1);
              setItems(TempList);
            }
          });
        var name = doc.data().name;
        SubjectCode = doc.id;
        TempList.push({ name, index, SubjectCode });
        index++;
      });
    });
    setItems(TempList);
  }, [refresh]);

  useEffect(() => {
    if (IsFocussed === false) {
      setInputText("");
    }
  }, [IsFocussed]);

  const createSubject = async (e) => {
    e.preventDefault();
    var randomSubjectCode = "";
    var numbers = "123456789";
    for (var i = 0; i < 5; i++) {
      randomSubjectCode += numbers.charAt(
        Math.floor(Math.random() * numbers.length)
      );
    }
    await BatchRef.doc(randomSubjectCode).set({ name: InputText });
    await BatchRef.doc(randomSubjectCode).collection("Lab").doc("-1").set({});
    setIsFocussed(false);
    setrefresh(!refresh);
  };

  return (
    <div className="flex flex-col border-r-[1px] border-gray h-[100%]">
      <div className="flex items-center flex-0 border-gray border-b-[1px] text-sm pl-3 py-2 pr-2">
      <div
          className="flex group items-center justify-center h-3 w-3 bg-close mr-2 rounded-full z-0"
          onClick={() => setBatch(null)}
        >
          <Minus className=" hidden group-hover:block p-[1.5px] group-hover:text-white duration-200 transition-transform z-10 " />
        </div>        Subject Info
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
        <div className="text-xs">Create Subject</div>
      </div>
      {ShowInputBox && IsFocussed ? (
        <form className="bg-focus_color_1" onSubmit={createSubject}>
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
                setSubjectCode(value.SubjectCode);
                setActiveIndex(value.index);
              }}
            >
              <ListItem
                text={value.name}
                isEmpty={ItemsEmptyList[value.index]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
