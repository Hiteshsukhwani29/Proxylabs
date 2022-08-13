import React, { useEffect, useState } from "react";
import ParticularColumn from "./ParticularColumn";
import BatchInfoColumn from "./BatchInfoColumn";
import SubjectInfoColumn from "./SubjectInfoColumn";
import LabsColumn from "./LabsColumn";
import LabInfoColumn from "./LabInfoColumn";

function Index() {
  const [Batch, setBatch] = useState(null);
  const [Index, setIndex] = useState(null);
  const [SubjectCode, setSubjectCode] = useState(null);
  const [LabCode, setLabCode] = useState(null);
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    console.log("working", Batch);
    setSubjectCode(null);
    setLabCode(null);
  }, [Batch]);
  useEffect(() => {
    console.log(Index);
    setBatch(null);
    setSubjectCode(null);
    setLabCode(null);
  }, [Index]);
  useEffect(() => {
    console.log(SubjectCode);
    setLabCode(null);
  }, [SubjectCode]);

  return (
    <div className="grid grid-cols-4 h-[34rem] m-20 border-[1px] border-gray rounded-xl bg-white shadow-[0_16px_33px_rgba(89,163,201,0.35)]">
      <div className={`${LabCode ? "hidden" : "block"} overscroll-none ${Index!==null?'':'col-span-1'}`}>
        <ParticularColumn setIndex={setIndex} />
      </div>
      {Index !== null ? (
        <div className={`${LabCode ? "hidden" : "block"} overscroll-none ${Batch!==null?`${SubjectCode!==null?'':'col-span-2'}`:`col-span-2`}`}>
        <BatchInfoColumn batchindex={Index} Batch={Batch} setBatch={setBatch} />
        </div>
      ) : (
        <></>
      )}
      {Batch ? (
        <SubjectInfoColumn batchname={Batch} setSubjectCode={setSubjectCode} setBatch={setBatch} />
      ) : (
        <></>
      )}
      {SubjectCode ? (
        <LabsColumn
          batchname={Batch}
          SubjectCode={SubjectCode}
          setSubjectCode={setSubjectCode}
          LabCode={LabCode}
          setLabCode={setLabCode}
        />
      ) : (
        <></>
      )}
      {LabCode ? (
        <div className="col-span-2">
        <LabInfoColumn
          batchname={Batch}
          SubjectCode={SubjectCode}
          LabCode={LabCode}
          setLabCode={setLabCode}
        />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Index;
