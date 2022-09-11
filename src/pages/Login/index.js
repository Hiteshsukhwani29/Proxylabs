import React from 'react'
import PageIntro from "../../components/PageIntro";
import LoginComponent from "../../components/LoginComponent";
import Landing_bg from "../../assets/Landing_bg.png";
import LandingContent from "../../components/LandingContent";

function Index({ ShowModal, setShowModal }) {
  return (
    <div className="bg-bg1 flex flex-col justify-center">
      {ShowModal?<LoginComponent ShowModal={ShowModal} setShowModal={setShowModal}/>:
      <div className="flex-1">
      <PageIntro Head="Join hands with us and get laboratories at your disposal" detail="Allow your location, select your field and dive into the list of colleges at your disposal :)" imgUrl={Landing_bg}/>
    </div>}
    <LandingContent/>
    </div>
  )
}

export default Index;
