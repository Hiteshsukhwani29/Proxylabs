import { BrowserRouter } from "react-router-dom";
import StudentMainScreen from "./pages/StudentMainScreen";
import Login from "./pages/Login";
import { Routes, Route, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { actionCreators } from "./state/index";
import db from "./firebase";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CreateCurriculum from "./components/CreateCurriculam";
import InstituteMainScreen from "./pages/InstituteMainScreen";
import SearchPage from "./pages/SearchPage";
import InstituteInfo from "./components/InstituteInfo";
import HostLandingPage from "./pages/HostLandingPage";
import HostDetail from "./components/HostDetail";
import ProfileCard from "./smallcomponents/ProfileCard";
import LabBookingPage from "./pages/LabsBookingPage";
import ApprovalPage from "./pages/ApprovalPage";
import ResearchDashbord from "./pages/ResearchDashboard";
import ExpandedMenu from "./components/Navbar/ExpandedMenu";

function App() {
  const token = JSON.parse(localStorage.getItem("token"));
  const type = JSON.parse(localStorage.getItem("type"));
  const dispatch = useDispatch();

  const [loaded, setloaded] = useState(false);

  const [ShowModal, setShowModal] = useState(false);
  const [ShowAddCurriculumCard, setShowAddCurriculumCard] = useState(false);
  const [ShowCompleteProfile, setShowCompleteProfile] = useState(false);
  const [ShowExpandedMenu, setShowExpandedMenu] = useState(false);

  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    if (token) {
      if (type === "Institute") {
        var userRef = db.collection("Institutes").doc(token).get();
        userRef.then((docSnapshot) => {
          if (docSnapshot.exists) {
            userRef.then((snapshot) => {
              dispatch(actionCreators.setUser(snapshot.data()));
              setloaded(true);
            });
          }
        });
      }
      if (type === "Student") {
        var userRef = db.collection("users").doc(token).get();
        userRef.then((docSnapshot) => {
          if (docSnapshot.exists) {
            userRef.then((snapshot) => {
              dispatch(actionCreators.setUser(snapshot.data()));
              setloaded(true);
            });
          }
        });
      }
    } else {
      setloaded(true);
    }
  }, []);

  useEffect(() => {
    console.log("working");
  }, [ShowExpandedMenu]);

  return (
    <BrowserRouter>
      <div className="flex-col justify-center">
        {ShowCompleteProfile ? (
          <div className="absolute w-screen h-screen bg-black opacity-60 z-20"></div>
        ) : (
          <></>
        )}
        <Navbar
          isAlreadyLoggedIn={false}
          setShowModal={setShowModal}
          setShowAddCurriculumCard={setShowAddCurriculumCard}
          ShowCompleteProfile={ShowCompleteProfile}
          setShowCompleteProfile={setShowCompleteProfile}
          ShowExpandedMenu={ShowExpandedMenu}
          setShowExpandedMenu={setShowExpandedMenu}
        />

        <div className="flex flex-col">
          {loaded === true ? (
            <>
              <Routes>
                <Route
                  path="/"
                  element={
                    type === "Institute" ? (
                      <InstituteMainScreen
                        ShowAddCurriculumCard={ShowAddCurriculumCard}
                        setShowAddCurriculumCard={setShowAddCurriculumCard}
                        ShowCompleteProfile={ShowCompleteProfile}
                        setShowCompleteProfile={setShowCompleteProfile}
                        ShowExpandedMenu={ShowExpandedMenu}
                        setShowExpandedMenu={setShowExpandedMenu}
                      />
                    ) : type === "Student" ? (
                      <StudentMainScreen
                        SearchText={SearchText}
                        setSearchText={setSearchText}
                      />
                    ) : (
                      <Login
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                      />
                    )
                  }
                />
                {/* <Route
                  path="/Student"
                  element={
                    <StudentMainScreen
                      SearchText={SearchText}
                      setSearchText={setSearchText}
                    />
                  }
                /> */}
                {/* <Route
                  path="/Institute"
                  element={
                    <InstituteMainScreen
                      ShowAddCurriculumCard={ShowAddCurriculumCard}
                      setShowAddCurriculumCard={setShowAddCurriculumCard}
                      ShowCompleteProfile={ShowCompleteProfile}
                      setShowCompleteProfile={setShowCompleteProfile}
                      ShowExpandedMenu={ShowExpandedMenu}
                      setShowExpandedMenu={setShowExpandedMenu}
                    />
                  }
                /> */}
                <Route
                  path="/CreateCurriculum"
                  element={<CreateCurriculum />}
                />
                <Route
                  path="/search"
                  element={
                    <SearchPage
                      SearchText={SearchText}
                      setSearchText={setSearchText}
                    />
                  }
                />
                <Route path="/instituteinfo" element={<InstituteInfo />} />
                <Route path="/hostLab" element={<HostLandingPage setShowExpandedMenu={setShowExpandedMenu} />} />
                <Route path="/host" element={<HostDetail />} />
                <Route path="/prodrop" element={<ProfileCard />} />
                <Route path="/Booklab" element={<LabBookingPage />} />
                <Route path="/approval" element={<ApprovalPage />} />
                <Route path="/dashboard" element={<ResearchDashbord />} />
              </Routes>

              {/* <Component ShowModal={ShowModal} setShowModal={setShowModal} /> */}
              {/* <LandingPage /> */}
              {/* <LoginPage/> */}
              {/* <Search/> */}

              {/* <CreateCurriculam/>  */}
              {/* <LabDetails/> */}
              {/* <LabBooking/> */}
              {/* <StudentMainScreen/> */}
              {/* <InstituteMainScreen/> */}
              {/* <InstituteInfo/> */}
              {/* <HostDetail/> */}
              {/* <InstituteInfo/> */}
              {/* <StudentMainScreen/> */}
              {/* <InstituteInfo/> */}
            </>
          ) : (
            <></>
          )}
          {ShowExpandedMenu ? (
        <div className="absolute right-[22.5rem] mt-[1%]">
          <ExpandedMenu />
        </div>
      ) : (
        <></>
      )}
        </div>
        
      </div>
      
    </BrowserRouter>
  );
}

export default App;
