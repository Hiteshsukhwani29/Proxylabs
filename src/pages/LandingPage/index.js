import React, { useState } from "react";
import Searchbar from "../../components/Searchbar";
import Banner from "../../components/Banner";
import Labs from "../../components/Labs";
import Students from "../../components/Students";
import Navbar from "../../components/Navbar";
import StudentProfile from "../../components/StudentProfile";
import Labrecord from "../../components/Labrecord";
import ExperimentList from "../../components/ExperimentList";
import LandingBanner from "../../components/LandingBanner";
import LoginComponent from "../../components/LoginComponent";
import { Button } from "@mui/material";
import { TrendingUp } from "heroicons-react";

function Index() {
  const [ShowModal, setShowModal] = useState(true);

  return (
    <div className="bg-bg1 h-screen">
      <Navbar profile="Login"/>
      <Button onClick={() => setShowModal(true)}>Show Login screen</Button>
      <LoginComponent ShowModal={ShowModal} setShowModal={setShowModal}/>
      {ShowModal?<div>
        
      </div>
      :
      <>
      <LandingBanner />
        <Banner /></>}
    </div>
  );
}

export default Index;
