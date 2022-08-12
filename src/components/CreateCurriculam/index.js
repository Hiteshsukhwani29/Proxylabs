import React, { useEffect, useState } from "react";
import ParticularColumn from "./ParticularColumn";
import BatchInfoColumn from "./BatchInfoColumn";
import SubjectInfoColumn from "./SubjectInfoColumn";

function Index() {
  const [Batch, setBatch] = useState(null);
  const [Index, setIndex] = useState(null);
  useEffect(() => {
    console.log("working",Batch)
  }, [Batch])
  useEffect(() => {
    console.log(Index)
  }, [Index])

  return (
    <div className="grid grid-cols-4 h-96 m-20 border-[1px] border-gray rounded-xl bg-white shadow-[0_16px_33px_rgba(89,163,201,0.35)]">
      {/* {
        Array(Column).fill(0).map(() => (<ParticularColumn Column={Column} setColumn={setColumn}/>))} */}
        <ParticularColumn setIndex={setIndex}/>
        {Index!==null?
        <BatchInfoColumn batchindex={Index} Batch={Batch} setBatch={setBatch} />:<></>}
        {Batch?
        <SubjectInfoColumn batchname={Batch}/>:<></>}
        {/* <SubjectInfoColumn/> */}
    </div>
  );
}

export default Index;
