import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "../Searchbar"

import { Button } from "@mui/material";

export default function Index({ Head, detail, imgUrl }) {


  const [AlreadyLoggedIn, setAlreadyLoggedIn] = useState(false);
  const [Token, setToken] = useState("");
  const type = JSON.parse(localStorage.getItem("type"));

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      setAlreadyLoggedIn(true);
      setToken(token);
    }
  }, [Token]);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/hostLab`; 
    navigate(path);
  }

  return (
    <div className="flex justify-between items-center my-24 p-4">
      <div className="m-14 flex-0 ">
        <div className="text-4xl font-bold  min-w-full ">{Head}</div>
        <div className="text-sm font-light my-2">{detail}</div>

        {AlreadyLoggedIn ? (
            <div className={`flex items-center py-6 ${type==="Institute"?"block":"hidden"}`} >
            <Button
              className={`!bg-white !text-black !px-6  !py-2 !rounded-3xl !mr-4 `}
              variant="outlined"
              onClick={routeChange}
            >
              Host My College
            </Button>
  
            <Button
              className="!bg-accent !text-white !px-6  !py-2 !rounded-3xl"
              variant="outlined"
            >
              Get Credits
            </Button>
          </div>
          ) : (
            <Searchbar/>
          )}
        
      </div>
      <div className="flex-0 mx-10">
        <img className="h-80 max-w-lg rounded-lg" src={imgUrl} alt="" />
      </div>
    </div>
  );
}
