import React, { useState } from "react";
import { LocationMarker } from "heroicons-react";
import SearchCircle from "../../assets/search_circle.png";
import { CustomSelect, StyledOption } from "../Dropdown/Index";

function Index() {
  return (
    <>
      <div
        className="shadow-[0_16px_33px_rgba(89,163,201,0.35)] rounded-full inline-block m-4"
        style={{ border: "1px solid #eeeeee" }}
      >
        <div className="flex items-center mx-1">
          <div className="flex items-center p-1 ml-3">
            <div className="h-4 w-[2px] bg-accent inline-block"></div>
            <span className="flex items-center">
              <LocationMarker className="h-4 text-accent mx-1" />
              <span className="text-accent text-xs tracking-wider">
                Detect my location
              </span>
              <span className="w-3 h-3 rounded-full border-accent border-4 mx-2"></span>
            </span>
            <div className="h-4 w-[2px] bg-accent inline-block"></div>
            <CustomSelect defaultValue={40}>
              <StyledOption value={40} disabled>
                Select Field
              </StyledOption>
              <StyledOption value={10}>Ten</StyledOption>
              <StyledOption value={20}>Twenty</StyledOption>
              <StyledOption value={30}>Thirty</StyledOption>
            </CustomSelect>
          </div>
          <img className="!h-8 mx-1" src={SearchCircle} />
        </div>
      </div>
    </>
  );
}

export default Index;
