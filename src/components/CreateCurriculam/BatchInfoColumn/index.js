import React, { useEffect, useState } from "react";
import { Plus } from "heroicons-react";
import db from "../../../firebase";
import { TextField, Button, withStyles } from "@mui/material";
import { ArrowRight,Refresh } from "heroicons-react";

function Index({ batchindex, Batch, setBatch }) {

  const styles = theme => ({
    input: {
      height: 40
    },
  })
  
  const [BatchName, setBatchName] = useState(null);
  const [TotalStudents, setTotalStudents] = useState("");

  const [CreditCode, setCreditCode] = useState("");
  const [CreditValue, setCreditValue] = useState(1);

  console.log("from batch info", batchindex);
  useEffect(() => {
    const InstituteRef = db
      .collection("curriculum")
      .doc(" nfQv08nR0Eh0FeCZBLY3S0AXCID2");
    InstituteRef.get().then((snapshot) => {
      console.log("Main is called");
      console.log(snapshot.data().Batches[batchindex]);
      const res = snapshot.data().Batches[batchindex];
      setBatchName(res.name);
      setTotalStudents(res.totalstudents);
      console.log(BatchName);
    });
  }, [batchindex]);

  useEffect(() => {
    if (Batch !== null) {
      {
        setBatch(BatchName);
      }
    }
  }, [BatchName]);

  return (
    <div className="flex flex-col border-r-[1px] border-gray">
      <div className="flex items-center flex-0 border-gray border-b-[1px] text-sm pl-3 py-2 pr-2">
        <div className="h-3 w-3 bg-temp mr-2 rounded-full"></div>
        Batch Info
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
        <div className="cursor-pointer flex justify-between px-4" onClick={() => setBatch(BatchName)}>
          <div>Subjects</div>
          <ArrowRight />
        </div>
        <div className="overflow-y-scroll">
        <div className="flex justify-between px-4 items-center mt-4">
          <div className="text-sm">Total number of students</div>
          <TextField
            className="!w-14 !text-xs"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiInputBase-root": {
                  height: 30
              }
            }}
            onChange={(e) => {
              setTotalStudents(e.target.value);
            }}
            value={TotalStudents}
          />
        </div>

        <div className="flex px-2 py-1 mx-4 mt-4 rounded-md justify-center items-center" style={{ border: "1px solid rgba(0,0,0,0.23)" }}>
          <Refresh className="!w-4 flex-0"/>
          <div className="flex-1 text-center">Auto generate code</div>
        </div>

        <div className="flex justify-between px-4 items-center mt-4">
          <div className="text-sm">Credit Value</div>
        <TextField
          className="!w-20 !text-xs"
          variant="outlined"
          size="small"
          sx={{
            "& .MuiInputBase-root": {
                height: 30
            }
          }}          onChange={(e) => {
            setCreditValue(e.target.value);
          }}
          value={CreditValue}
        />
        </div>
        <div className="flex px-2 py-1 mx-4 mt-4 rounded-md justify-center items-center" style={{ border: "1px solid rgba(0,0,0,0.23)" }}>
          <div className="text-center">{TotalStudents * CreditValue} credits assigned to batch</div>
        </div>
        {/* <div className="mt-4 mx-4">Total credits assigned {TotalStudents * CreditValue}</div> */}
      </div>
      </div>
      <Button variant="contained" className="w-min !bg-accent">Save</Button>
    </div>
  );
}
export default Index;
