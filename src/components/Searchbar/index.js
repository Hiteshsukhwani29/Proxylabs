import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { LocationMarker } from "heroicons-react";
import SearchCircle from "../../assets/search_circle.png";
// import { CustomSelect, StyledOption } from "../Dropdown/Index";

function Index({ SearchText, setSearchText }) {  
  
  let navigate = useNavigate();

  const SearchResults = (e) => {
    e.preventDefault();
     navigate('/search');
  }

  useEffect(() => {
    console.log("true")
  
  }, [SearchResults])
  

  return (
    <>
      <div
        className="rounded-full inline-block m-4 bg-white py-1 shadow-accent-searchbar border-gray1"
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
            {/* <CustomSelect defaultValue={40}>
              <StyledOption value={40} disabled>
                Select Field
              </StyledOption>
              <StyledOption value={10}>Ten</StyledOption>
              <StyledOption value={20}>Twenty</StyledOption>
              <StyledOption value={30}>Thirty</StyledOption>
            </CustomSelect> */}
            <form onSubmit={SearchResults}>
            <input
              className="outline-none px-4 w-40 !h-4"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              value={SearchText} 
              />
              </form>
          </div>
          <img className="!h-8 mx-1" src={SearchCircle} />
        </div>
      </div>
    </>
  );
}

export default Index;
