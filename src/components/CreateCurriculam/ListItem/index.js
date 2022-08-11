import React, { useState } from "react";
import { ArrowRight } from "heroicons-react";

function Index({ text, isEmpty = true, ActiveItem, setActiveItem, Index }) {
  return (
    <div
      className={`${ActiveItem === Index ? "bg-accent" : "bg-white"} flex justify-between px-4`}
      onClick={() => (Index !== null ? setActiveItem(Index) : [])}
    >
      <div>{text}</div>
      <ArrowRight className={`${!isEmpty ? "block" : "hidden"}`} />
    </div>
  );
}

export default Index;
