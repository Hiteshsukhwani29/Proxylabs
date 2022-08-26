import Search from "../../components/Searchbar";
import LabDetailWrapper from "../../components/LabDetailsWrapper";
import PageIntro from "../../components/PageIntro";
import Landing_bg from "../../assets/Landing_bg.png";
import InstituteWelcome from "../../assets/AdminLanding.png";
import Searchbar from "../../components/Searchbar";
import { useState } from "react";

function Index() {
  const [SearchText, setSearchText] = useState("");

  return (
    <div className=" bg-bg1">
      <div className="!mx-20">
        <PageIntro
          Head="Laboratories at everyone's comfort. Laboratories at"
          detail="Allow your location, select your field and dive into the list of colleges at your disposal :)"
          imgUrl={InstituteWelcome}
          SearchText={SearchText}
          setSearchText={setSearchText}
        />
      </div>

      <LabDetailWrapper />
    </div>
  );
}

export default Index;
