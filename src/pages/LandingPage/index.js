import React from "react";
import Searchbar from "../../components/Searchbar";
import Banner from "../../components/Banner";
import Labs from "../../components/Labs";
import Students from "../../components/Students";
import Navbar from "../../components/Navbar";
import StudentProfile from "../../components/StudentProfile";
import Labrecord from "../../components/Labrecord"


function index() {
  return (
    <div className="bg-bg1">
      <Navbar/>
      <Searchbar />
      <Banner />
      <Labs/>
      <Students />
      <StudentProfile/>
      <Labrecord/>
    
    </div>
  );
}

export default index;
