import React from "react";
import PageIntro from "../../components/PageIntroInstitute";
import LoginComponent from "../../components/LoginComponent";
import Landing_bg from "../../assets/Landing_bg.png";
import LandingContent from "../../components/LandingContent";
import { Button } from "@mui/material";

function Index({ ShowModal, setShowModal }) {
  return (
    <div className="bg-bg1 flex flex-col justify-center">
      {ShowModal ? (
        <LoginComponent ShowModal={ShowModal} setShowModal={setShowModal} />
      ) : (
        <div className="flex-1">
          <PageIntro
            setShowModal={setShowModal}
            Head="Join hands with us and get laboratories at your disposal"
            detail="Allow your location, select your field and dive into the list of colleges at your disposal :)"
            imgUrl={Landing_bg}
          />
          <Button
            className="!bg-accent !text-white !px-6  !py-2 !rounded-3xl shadow-accent-btn !mt-12"
            variant="outlined"
            onClick={() => setShowModal(true)}
          >
            Get Started
          </Button>
          <LandingContent />
        </div>
      )}
    </div>
  );
}

export default Index;
