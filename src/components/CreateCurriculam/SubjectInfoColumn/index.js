import React, { useEffect, useState } from "react";
import { Plus } from "heroicons-react";
import db from "../../../firebase";
import ListItem from "../ListItem";

function Index({ batchname }) {
  const [Items, setItems] = useState([]);
  const [ItemsEmptyList, setItemsEmptyList] = useState([]);
  var TempList = [];
  var TempList1 = [];
  console.log("from subject info", batchname);
  useEffect(() => {
    const InstituteRef = db
      .collection("curriculum")
      .doc(" nfQv08nR0Eh0FeCZBLY3S0AXCID2")
      .collection(batchname);
    InstituteRef.onSnapshot((ss) => {
      console.log(ss.docs.map((doc) => doc.data()));
      ss.docs.map((doc) => {
        TempList.push(doc.data().name);
        console.log(TempList);
      });
      if (!ss.empty) {
        console.log(ss);
        TempList1.push(false);
        setItemsEmptyList(TempList1);
        setItems(TempList);
      }
      if (ss.empty) {
        TempList1.push(true);
        setItemsEmptyList(TempList1);
        setItems(TempList);
      }
    });
    setItems(TempList);
  }, [batchname]);

  return (
    <div className="flex flex-col border-r-[1px] border-gray">
      <div className="flex items-center flex-0 border-gray border-b-[1px] text-sm pl-3 py-2 pr-2">
        <div className="h-3 w-3 bg-temp mr-2 rounded-full"></div>
        Subject Info
      </div>

      <div className="flex flex-0 text-accent pl-2 py-2 pr-2 items-center">
        <Plus className="mr-2 w-5 h-5" />
        <div className="text-xs">Create Subject</div>
      </div>
      <input
        autoFocus
        className="outline-none bg-focus_color_1 px-9 py-1 font-medium"
        id="standard-basic"
        variant="standard"
      />
      <div className="flex-1">
        {Items.map((value) => {
          console.log(value);
          return <ListItem text={value} />;
        })}
      </div>
    </div>
  );
}

export default Index;
