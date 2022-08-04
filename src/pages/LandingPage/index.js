import React, { useState } from "react";
import Searchbar from "../../components/Searchbar";
import Banner from "../../components/Banner";
import Labs from "../../components/Labs";
import Students from "../../components/Students";
import Navbar from "../../components/Navbar";
import StudentProfile from "../../components/StudentProfile";
import Labrecord from "../../components/Labrecord";
import ExperimentList from "../../components/ExperimentList";
import Login from "../../components/LoginComponent";
import { Button } from "@mui/material";

function Index() {
  const [ShowModal, setShowModal] = useState(true);
  return (
    <div className="bg-bg1">
      <Navbar />
      <Button onClick={() => setShowModal(true)}>Show Login screen</Button>
      <Login ShowModal={ShowModal} setShowModal={setShowModal}/>
      {ShowModal?<div>
      <Searchbar />
      <Banner />
      <Labs />
      <Students />
      <StudentProfile />
      <Labrecord />
      <ExperimentList />
      </div>
      :
      <></>}
    </div>
  );
}

export default Index;
