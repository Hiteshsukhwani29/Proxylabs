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

function App() {
  const token = JSON.parse(localStorage.getItem("token"));
  const type = JSON.parse(localStorage.getItem("type"));
  const dispatch = useDispatch();

  const [loaded, setloaded] = useState(false);

  const [ShowModal, setShowModal] = useState(false);
  const [ShowAddCurriculumCard, setShowAddCurriculumCard] = useState(false);
  const [ShowCompleteProfile, setShowCompleteProfile] = useState(false);

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

  return (
    <div className="flex-col justify-center">
      <Navbar
        isAlreadyLoggedIn={false}
        setShowModal={setShowModal}
        setShowAddCurriculumCard={setShowAddCurriculumCard}
        ShowCompleteProfile={ShowCompleteProfile}
        setShowCompleteProfile={setShowCompleteProfile}
      />

      <BrowserRouter>
        <div className="flex flex-col">
          {loaded === true ? (
            <>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Login ShowModal={ShowModal} setShowModal={setShowModal} />
                  }
                />
                <Route path="/Student" element={<StudentMainScreen />} />
                <Route
                  path="/Institute"
                  element={
                    <InstituteMainScreen
                      ShowAddCurriculumCard={ShowAddCurriculumCard}
                      setShowAddCurriculumCard={setShowAddCurriculumCard}
                      ShowCompleteProfile={ShowCompleteProfile}
                      setShowCompleteProfile={setShowCompleteProfile}
                    />
                  }
                />
                <Route
                  path="/CreateCurriculum"
                  element={<CreateCurriculum />}
                />
                <Route path="/search/:id" element={<SearchPage />} />
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
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
