import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login";
import CreateCurriculam from "./components/CreateCurriculam";
import LabDetails from "./components/LabDetails"
import LabBooking from "./components/LabBooking"
import InstituteInfo from "./components/InstituteInfo"

import { useDispatch } from "react-redux";
import { actionCreators } from "./state/index";
import db from "./firebase";
import { useEffect } from "react";

function App() {
  const token = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      var userRef = db.collection("users").doc(token).get();
      userRef.then((docSnapshot) => {
        if (docSnapshot.exists) {
          userRef.then((snapshot) => {
            dispatch(actionCreators.setUser(snapshot.data()))
          });
        }
      });
    }
  }, [])
  return (
    <>
      {/* <LandingPage /> */}
      {/* <LoginPage/> */}
  
      {/* <CreateCurriculam/>  */}
      {/* <LabDetails/> */}
      {/* <LabBooking/> */}
      <InstituteInfo/>
    </>
  );
}

export default App;
