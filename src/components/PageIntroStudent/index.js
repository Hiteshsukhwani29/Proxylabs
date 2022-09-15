import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "../Searchbar";
import Headings from "../Headings";
import Landing_bg from "../../assets/Landing_bg.png";

import { Button } from "@mui/material";

export default function Index({ SearchText, setSearchText }) {
  const type = JSON.parse(localStorage.getItem("type"));

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/hostLab`;
    navigate(path);
  };

  return (
    <div className="flex">
      <div className="mx-16">
        <div className="flex justify-between items-center my-24 p-4">
          <div className="flex-col">
            <Headings
              Head="Laboratories at everyone's comfort. Laboratories at"
              detail="Allow your location, select your field and dive into the list of colleges at your disposal :)"
            />

          </div>
        </div>
      </div>
      <Searchbar SearchText={SearchText} setSearchText={setSearchText} />

    </div>
  );
}
