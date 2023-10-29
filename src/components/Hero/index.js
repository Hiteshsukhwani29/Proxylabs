import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "../Searchbar";
import Headings from "../Headings";
import Landing_bg from "../../assets/Landing_bg.png";

import { Button } from "@mui/material";

export default function Index({ Head, detail, imgUrl, setShowModal }) {
  const [SearchText, setSearchText] = useState("");
  const type = JSON.parse(localStorage.getItem("type"));


  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/hostLab`;
    navigate(path);
  };

  return (
    <div className="flex">
      <div className="mx-16 ">
          <div className="flex justify-between items-center my-24 p-4">
            <div className="flex-col">
              <Headings
                Head="Labs at everyone’s comfort. 
                Access any lab, anywhere!"
                detail="Allow your location, select your field and dive into the list of colleges at your disposal :)"
                imgUrl={Landing_bg}
              />

                <Button
                  className="!bg-accent !text-white !px-6 !py-2 !rounded-3xl shadow-accent-btn"
                  variant="outlined"
                >
                  Get Started
                </Button>
            </div>
            <div className="flex-0 mx-10">
              <img
                className="h-80 max-w-lg rounded-lg"
                src={Landing_bg}
                alt=""
              />
            </div>
          </div>
        </div>
    </div>
  );
}
