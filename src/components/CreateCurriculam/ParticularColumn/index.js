import React, { useEffect, useState } from "react";
import { Plus } from "heroicons-react";
import db from "../../../firebase";
import ListItem from "../ListItem";

function Index({ setIndex }) {
  const [Items, setItems] = useState([]);
  const [ItemsEmptyList, setItemsEmptyList] = useState([]);
  const [counter, setcounter] = useState(0);
  const [ActiveItem, setActiveItem] = useState(null);
  var TempList = [];
  var TempList1 = [];
  var index = 0;

  useEffect(() => {
    if (counter == 0) {
      const InstituteRef = db
        .collection("curriculum")
        .doc(" nfQv08nR0Eh0FeCZBLY3S0AXCID2");
      InstituteRef.get().then((snapshot) => {
        console.log("Main is called");
        console.log(snapshot.data().Batches);
        snapshot.data().Batches.map((res) => {
          console.log(index, res.name, res.totalstudents);
          TempList.push({
            index: index,
            name: res.name,
            totalstudents: res.totalstudents,
          });
          index++;
          InstituteRef.collection(res.name).onSnapshot((ss) => {
            if (!ss.empty) {
              TempList1.push(false);
              setItemsEmptyList(TempList1);
            } else {
              TempList1.push(true);
              setItemsEmptyList(TempList1);
            }
          });
          setItems(TempList);
          setcounter(counter + 1);
        });
      });
    }
  }, [Items]);

  return (
    <div className="flex flex-col border-r-[1px] border-gray">
      <div className="flex items-center flex-0 border-gray border-b-[1px] text-sm pl-3 py-2 pr-2">
        <div className="h-3 w-3 bg-temp mr-2 rounded-full"></div>
        Batch
      </div>

      <div className="flex flex-0 text-accent pl-2 py-2 pr-2 items-center">
        <Plus className="mr-2 w-5 h-5" />
        <div className="text-xs">Create Batch</div>
      </div>
      <input
        autoFocus
        className="outline-none bg-focus_color_1 px-9 py-1 font-medium"
        id="standard-basic"
        variant="standard"
      />
      <div className="flex-1">
        {/* <ListItem text="Hiteshs"   />; */}

        {Items.map(({ index, name, totalstudents }) => {
          // console.log(ItemsEmptyList[0].isEmpty,"ddfsd");
          console.log(ItemsEmptyList[index], totalstudents, name, index);
          if (!ItemsEmptyList[index]) {
            return (
              <div className="cursor-pointer" onClick={() => setIndex(index)}>
                <ListItem
                  ActiveItem={ActiveItem}
                  setActiveItem={setActiveItem}
                  Index={index}
                  text={name}
                  isEmpty={ItemsEmptyList[index]}
                />
              </div>
            );
          } else {
            return (
              <ListItem
                Index={null}
                text={name}
                isEmpty={ItemsEmptyList[index]}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Index;
