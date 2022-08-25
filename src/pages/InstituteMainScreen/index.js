import React, { useState , useEffect } from "react";
import PageIntro from "../../components/PageIntro";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Landing_bg from "../../assets/Landing_bg.png";
import AddCurriculumCard from "../../components/Navbar/AddCurriculumCard";

export default function Index() {

  const [Items, setItems] = useState([]);
  const [ActiveIndex, setActiveIndex] = useState(0);
  const [SubjectCode, setSubjectCode] = useState("-1");

  const [ShowModal, setShowModal] = useState(false);
  const [ShowAddCurriculumCard, setShowAddCurriculumCard] = useState(false);

  useEffect(() => {
    console.log("im clicked")
  
  }, [ShowAddCurriculumCard])
  

  return (
    <div className="bg-bg1 flex flex-col">
      <Navbar isAlreadyLoggedIn={false}  setShowAddCurriculumCard={setShowAddCurriculumCard} ShowAddCurriculumCard={ShowAddCurriculumCard} />
      {/* <Button onClick={() => setShowModal(true)}>Show Login screen</Button> */}
      <div className="flex-1"  onClick={() => setShowAddCurriculumCard(false)}>
      <PageIntro
        Head="Laboratories at everyone’s comfort. Laboratories at"
        detail="Allow your location, select your field and dive into the list of colleges at your disposal :)"
        imgUrl={Landing_bg}
        
      
      />
          <Banner />
        </div>
      {ShowAddCurriculumCard ? (
        <div className="absolute mt-[5%] ml-[40%]">
        <AddCurriculumCard
          ShowModal={ShowAddCurriculumCard}
          setShowModal={setShowAddCurriculumCard}
        />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
