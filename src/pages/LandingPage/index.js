import React from "react";
import Searchbar from "../../components/Searchbar";
import Banner from "../../components/Banner";
import Labs from "../../components/Labs";
import Students from "../../components/Students";
import Navbar from "../../components/Navbar";
import StudentProfile from "../../components/StudentProfile";
import Labrecord from "../../components/Labrecord";
import ExperimentList from "../../components/ExperimentList";
import Login from "../../components/LoginComponent";

import Landing_bg from "../../assets/Landing_bg.png";

import { Button } from "@mui/material";

function index() {
  return (
    <div className="bg-bg1">
      {/* Navbar */}

      <div>
        <Navbar />
      </div>

      {/* Landing page Banner */}

      <div className="flex justify-between items-center my-24 p-4">
        <div className="m-14 flex-0 ">
          <div className="text-4xl font-bold  min-w-full ">
            Register your students. Host your college for other students and get
            going!
          </div>
          <div className="text-sm font-light my-2">
            Allow your location, select your field and dive into the list of
            colleges at your disposal Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Harum, minima.
          </div>
          <div className="flex items-center  ">
            <Button
              className="!bg-white !text-black !px-10  !py-1 !rounded-3xl mr-5 "
              variant="outlined"
            >
              Host My College
            </Button>

            <Button
              className="!bg-accent !text-white !px-10  !py-1 !rounded-3xl"
              variant="outlined"
            >
              Get Credits
            </Button>
          </div>
        </div>
        <div className="flex-0 mx-10">
          <img className="h-80 max-w-lg rounded-lg" src={Landing_bg} alt="" />
        </div>
      </div>

      {/* Banner */}
      <div className="flex-0 mx-6">
        <Banner />
      </div>
    </div>
  );
}

export default index;
