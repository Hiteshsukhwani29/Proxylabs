import React, { useState } from "react";
import Searchbar from "../../components/Searchbar";
import Banner from "../../components/Banner";
import Labs from "../../components/Labs";
import Students from "../../components/Students";
import Navbar from "../../components/Navbar";
import StudentProfile from "../../components/StudentProfile";
import Labrecord from "../../components/Labrecord";
import ExperimentList from "../../components/ExperimentList";
import PageIntro from "../../components/PageIntro";
import LoginComponent from "../../components/LoginComponent";
import LabDetails from "../../components/LabDetails"


import { Button } from "@mui/material";
import { Login, TrendingUp } from "heroicons-react";

function Index() {
  const [ShowModal, setShowModal] = useState(false);

  return (
    <div className="bg-bg1 flex flex-col justify-center">
      <Navbar isAlreadyLoggedIn={false} setShowModal={setShowModal}/>
      {/* <Button onClick={() => setShowModal(true)}>Show Login screen</Button> */}
      {ShowModal?<LoginComponent ShowModal={ShowModal} setShowModal={setShowModal}/>:
      <div className="flex-1">
      <PageIntro />
        <Banner /></div>}
    </div>
  );
}

export default Index;
