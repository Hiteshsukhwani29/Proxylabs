import Search from "../../components/Searchbar";
import LabDetailWrapper from "../../components/LabDetailsWrapper";
import PageIntroStudent from "../../components/PageIntroStudent";
import Landing_bg from "../../assets/Landing_bg.png";
import InstituteWelcome from "../../assets/AdminLanding.png";
import Searchbar from "../../components/Searchbar";
import { useState } from "react";

function Index({ SearchText, setSearchText }) {

  return (
    <div className=" bg-bg1">
      <div className="!mx-20">
        <PageIntroStudent SearchText={SearchText} setSearchText={setSearchText}/>
      </div>
      <LabDetailWrapper />
    </div>
  );
}

export default Index;
