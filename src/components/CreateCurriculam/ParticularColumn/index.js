import React, { useEffect, useState } from "react";
import { Plus } from "heroicons-react";
import db from "../../../firebase";
import ListItem from "../ListItem";
import { useSelector } from "react-redux";

function Index({ setIndex }) {
  const state = useSelector((state) => state.t1);

  const [Items, setItems] = useState([]);
  const [ItemsEmptyList, setItemsEmptyList] = useState([]);
  const [ActiveIndex, setActiveIndex] = useState(null);
  const [ShowInputBox, setShowInputBox] = useState(false);
  const [InputText, setInputText] = useState("");
  const [IsFocussed, setIsFocussed] = useState(false);
  const [Batches, setBatches] = useState(null);
  const [refresh, setrefresh] = useState(false);

  var TempList = [];
  var TempList1 = [];
  var index = 0;

  const InstituteRef = db.collection("curriculum").doc(state.user.uid);

  useEffect(() => {
    InstituteRef.onSnapshot((s) => {
      if (s.exists) {
        InstituteRef.get().then((snapshot) => {
          console.log("Main is called");
          console.log(snapshot.data().Batches);
          setBatches(snapshot.data().Batches);
          snapshot.data().Batches.map((res) => {
            console.log(index, res.name);
            TempList.push({
              index: index,
              name: res.name,
            });
            index++;
            InstituteRef.collection(res.name).onSnapshot((ss) => {
              if (ss.size == 1) {
                TempList1.push(true);
                setItemsEmptyList(TempList1);
              } else {
                TempList1.push(false);
                setItemsEmptyList(TempList1);
              }
            });
            setItems(TempList);
          });
        });
      }
    });
  }, [refresh]);

  useEffect(() => {
    if (IsFocussed === false) {
      setInputText("");
    }
  }, [IsFocussed]);

  const createBatch = async (e) => {
    e.preventDefault();
    await InstituteRef.collection(InputText).doc("-1").set({});
    if (Batches !== null) {
      await InstituteRef.set({
        Batches: [...Batches, { name: InputText, totalstudents: 0 }],
      });
    }
    else{
      await InstituteRef.set({
        Batches: [{ name: InputText, totalstudents: 0 }]
      });
    }
    setIsFocussed(false);
    setrefresh(!refresh);
  };

  return (
    <div className="flex flex-col border-r-[1px] border-gray h-[33.88rem] overflow-y-none">
      <div className="flex items-center flex-0 border-gray border-b-[1px] text-sm pl-3 py-2 pr-2">
        <div className="h-3 w-3 bg-temp mr-2 rounded-full"></div>
        Batch
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
        <div className="text-xs">Create Batch</div>
      </div>
      {ShowInputBox && IsFocussed ? (
        <form className="bg-focus_color_1" onSubmit={createBatch}>
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
      <div
        className="flex-1 overflow-y-scroll"
        onClick={() => setIsFocussed(false)}
      >
        {Items.map(({ index, name }) => {
          return (
            <div
              className={`${
                index === ActiveIndex ? "bg-focus_color_1" : "bg-white"
              } cursor-pointer py-1`}
              onClick={() => {
                setIndex(index);
                setActiveIndex(index);
              }}
            >
              <ListItem text={name} isEmpty={ItemsEmptyList[index]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
