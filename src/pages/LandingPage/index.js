import React from "react";
import Searchbar from "../../components/Searchbar";
import Banner from "../../components/Banner";
import Labs from "../../components/Labs";
import Students from "../../components/Students";
import Navbar from "../../components/Navbar";
import StudentProfile from "../../components/StudentProfile";
import ProfileDos from "../../components/ProfileDos";
import Labrecord from "../../components/Labrecord";
import ExperimentList from "../../components/ExperimentList";

function index() {
  return (
    <div className="bg-bg1">
      <Navbar />
      <Searchbar />
      <Banner />
      <Labs />
      <Students />
      <StudentProfile />
      <Labrecord />
      <ExperimentList />
    </div>
  );
}

export default index;
