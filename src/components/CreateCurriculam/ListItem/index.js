import React, { useState } from "react";
import { ArrowRight } from "heroicons-react";

function Index({ text, isEmpty = true }) {
  return (
    <div className={` flex justify-between px-4`}>
      <div>{text}</div>
      <ArrowRight className={`${!isEmpty ? "block" : "hidden"}`} />
    </div>
  );
}

export default Index;
