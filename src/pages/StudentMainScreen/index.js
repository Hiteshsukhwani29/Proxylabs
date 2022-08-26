import Search from "../../components/Searchbar";
import LabDetailWrapper from "../../components/LabDetailsWrapper";
import PageIntro from "../../components/PageIntro";
import Landing_bg from "../../assets/Landing_bg.png";
import Searchbar from "../../components/Searchbar";
import { useState } from "react";

function Index({ SearchText, setSearchText }) {

  return (
    <div className="w-screen bg-bg1">
      <Searchbar SearchText={SearchText} setSearchText={setSearchText}/>

      <PageIntro
        Head="Laboratories at everyone's comfort. Laboratories at"
        detail="Allow your location, select your field and dive into the list of colleges at your disposal :)"
        imgUrl={Landing_bg}
        SearchText={SearchText}
        setSearchText={setSearchText}
      />
      <LabDetailWrapper />
    </div>
  );
}

export default Index;
