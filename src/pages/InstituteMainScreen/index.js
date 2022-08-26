import React, { useState, useEffect } from "react";
import PageIntro from "../../components/PageIntro";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Landing_bg from "../../assets/Landing_bg.png";
import AddCurriculumCard from "../../components/Navbar/AddCurriculumCard";
import CollegeDetail from "../../components/InstituteInfo/CollegeDetail";
import WelcomeIntro from "../../components/InstituteInfo/WelcomeIntro";

export default function Index({
  ShowAddCurriculumCard,
  setShowAddCurriculumCard,
  ShowCompleteProfile,
  setShowCompleteProfile,
}) {
  const [Items, setItems] = useState([]);
  const [ActiveIndex, setActiveIndex] = useState(0);
  const [SubjectCode, setSubjectCode] = useState("-1");

  const [ShowModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("im clicked");
  }, [ShowAddCurriculumCard]);

  const IsWelcomeScreenShown = JSON.parse(localStorage.getItem("IsWelcomeScreenShown"));

  const [refresh, setrefresh] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex-1" onClick={() => setShowAddCurriculumCard(false)}>
      <div className="absolute left-0 right-0 top-[20%] z-30">
      {IsWelcomeScreenShown!==true?<WelcomeIntro setShowCompleteProfile={setShowCompleteProfile} refresh={refresh} setrefresh={setrefresh}/>:<></>}
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
        <div className="">
          <PageIntro
            Head="Register your students. Host your college for other students and get going! "
            detail="Allow your location, select your field and dive into the list of colleges at your disposal :)"
            imgUrl={Landing_bg}
          />
          <Banner />
        </div>
      </div>
      {ShowAddCurriculumCard ? (
        <div className="absolute mt-[1%] ml-[50%]">
          <AddCurriculumCard />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
