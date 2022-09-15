import React, { useState, useEffect } from "react";
import PageIntroInstitute from "../../components/PageIntroInstitute";
import Banner from "../../components/Banner";
import AddCurriculumCard from "../../components/Navbar/AddCurriculumCard";
import CollegeDetail from "../../components/InstituteInfo/CollegeDetail";
import WelcomeIntro from "../../components/InstituteInfo/WelcomeIntro";
import InstituteLanding from "../../assets/AdminLanding.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Index({
  ShowAddCurriculumCard,
  setShowAddCurriculumCard,
  ShowCompleteProfile,
  setShowCompleteProfile,
  ShowExpandedMenu,
  setShowExpandedMenu,
}) {
  const [Items, setItems] = useState([]);
  const [ActiveIndex, setActiveIndex] = useState(0);
  const [SubjectCode, setSubjectCode] = useState("-1");

  const [ShowModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("im clicked");
  }, [ShowAddCurriculumCard]);

  const IsWelcomeScreenShown = JSON.parse(
    localStorage.getItem("IsWelcomeScreenShown")
  );

  const [refresh, setrefresh] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="flex-1"
        onClick={() => {
          setShowAddCurriculumCard(false);
          setShowExpandedMenu(false);
        }}
      >
        <div className="absolute left-0 right-0 top-[20%] z-30">
          {IsWelcomeScreenShown !== true ? (
            <WelcomeIntro
              setShowCompleteProfile={setShowCompleteProfile}
              refresh={refresh}
              setrefresh={setrefresh}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="absolute left-0 right-0 top-[15%] z-30">
          {ShowCompleteProfile ? (
            <CollegeDetail
              ShowCompleteProfile={ShowCompleteProfile}
              setShowCompleteProfile={setShowCompleteProfile}
            />
          ) : (
            <></>
          )}
        </div>
        <PageIntroInstitute/>
      </div>
      {ShowAddCurriculumCard ? (
        <div className="absolute mt-[1%] ml-[52.5%]">
          <AddCurriculumCard />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
