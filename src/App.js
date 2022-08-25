import { BrowserRouter } from "react-router-dom";
import StudentMainScreen from "./pages/StudentMainScreen";
import Login from "./pages/Login";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators } from "./state/index";
import db from "./firebase";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const token = JSON.parse(localStorage.getItem("token"));
  const type = JSON.parse(localStorage.getItem("type"));
  const dispatch = useDispatch();

  const [loaded, setloaded] = useState(false);

  const [ShowModal, setShowModal] = useState(false);

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

  //    let Component
  // switch (window.location.pathname) {
  //   case "/":
  //     Component = Login
  //     break;
  //     case "/Institute":
  //       Component = InstituteMainScreen;
  //       break;
  //     case "/Student":
  //       Component = StudentMainScreen;
  //       break;

  //     default:
  //       break;
  //   }

  return (
    <div className="flex-col justify-center">
      <Navbar isAlreadyLoggedIn={false} setShowModal={setShowModal} />

      <BrowserRouter>
        <div className="flex flex-col">
          {loaded === true ? (
            <>
              <Routes>
                <Route path="/" element={<Login  ShowModal={ShowModal} setShowModal={setShowModal}/>} />
                <Route path="/Student" element={< StudentMainScreen/>} />
                <Route path="/upload" element={ <uploadExperimentCard/>} />
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
