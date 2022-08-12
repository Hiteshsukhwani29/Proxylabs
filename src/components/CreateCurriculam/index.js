import React, { useEffect, useState } from "react";
import ParticularColumn from "./ParticularColumn";
import BatchInfoColumn from "./BatchInfoColumn";
import SubjectInfoColumn from "./SubjectInfoColumn";
import LabsColumn from "./LabsColumn";

function Index() {
  const [Batch, setBatch] = useState(null);
  const [Index, setIndex] = useState(null);
  const [SubjectCode, setSubjectCode] = useState(null);
  const [LabIndex, setLabIndex] = useState(null);
  useEffect(() => {
    console.log("working", Batch);
    setSubjectCode(null);
  }, [Batch]);
  useEffect(() => {
    console.log(Index);
    setBatch(null);
    setSubjectCode(null);
  }, [Index]);
  useEffect(() => {
    console.log(SubjectCode);
  }, [SubjectCode]);

  return (
    <div className="grid grid-cols-4 h-[34rem] m-20 border-[1px] border-gray rounded-xl bg-white shadow-[0_16px_33px_rgba(89,163,201,0.35)]">
      <ParticularColumn setIndex={setIndex} />
      {Index !== null ? (
        <BatchInfoColumn batchindex={Index} Batch={Batch} setBatch={setBatch} />
      ) : (
        <></>
      )}
      {Batch ? (
        <SubjectInfoColumn batchname={Batch} setSubjectCode={setSubjectCode} />
      ) : (
        <></>
      )}
      {SubjectCode ? (
        <LabsColumn batchname={Batch} SubjectCode={SubjectCode} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Index;
