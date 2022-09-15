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
                Head="Register your students. Host your college for other students and get going! "
                detail="Allow your location, select your field and dive into the list of colleges at your disposal :)"
                imgUrl={Landing_bg}
              />

              <div className={`flex items-center py-6`}>
                <Button
                  className="!bg-white !text-black !px-6  !py-2 !rounded-3xl !mr-4 shadow-gray-btn border-gray1"
                  variant="outlined"
                  onClick={routeChange}
                >
                  Host My College
                </Button>

                <Button
                  className="!bg-accent !text-white !px-6 !py-2 !rounded-3xl shadow-accent-btn"
                  variant="outlined"
                >
                  Get Credits
                </Button>
              </div>
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
