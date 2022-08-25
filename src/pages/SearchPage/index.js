import React,{useState}from "react";
import Searchbar from "../../components/Searchbar";
import Labs from "../../components/Labs";
import Map from "../../components/Map";
import { AdjustmentsOutline } from "heroicons-react";

export default function Index() {

const [numofCollege, setnumofCollege] = useState("12")

  return (
    <div className="p-8">
      <div className="flex items-center ">
        <Searchbar />
        <AdjustmentsOutline />
      </div>
      <div className="flex justify-around mt-8 p-4">
        <div className="w-[65%] ">
          <Labs />
        </div>
        <div className="!w-[35%] pt-4 !px-12">
          <Map />
          <div
            className="flex items-center border my-8 py-1 px-4 rounded-lg"
            style={{ border: "1px solid #CBCBCB" }}
          >
            <div className="pr-2 font-bold">{numofCollege}</div>
            <div className="text-sm">
              {" "}
              Colleges near you offer your selected field
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
