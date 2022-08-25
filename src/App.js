import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login";
import CreateCurriculam from "./components/CreateCurriculam";
import LabDetails from "./components/LabDetails"
import LabBooking from "./components/LabBooking"
import InstituteInfo from "./components/InstituteInfo"
import StudentMainScreen from "./pages/StudentMainScreen"
import InstituteMainScreen from "./pages/InstituteMainScreen"
import HostDetail from "./components/HostDetail"

import { useDispatch } from "react-redux";
import { actionCreators } from "./state/index";
import db from "./firebase";
import { useEffect, useState } from "react";
import Map from "./components/Map"

function App() {
   const token = JSON.parse(localStorage.getItem("token"));
   const dispatch = useDispatch();

   const [loaded, setloaded] = useState(false);

   useEffect(() => {
   if (token) {
       var userRef = db.collection("users").doc(token).get();
       userRef.then((docSnapshot) => {
         if (docSnapshot.exists) {
          userRef.then((snapshot) => {
             dispatch(actionCreators.setUser(snapshot.data()));
             setloaded(true);
           });
         }
       });
     } else {
       setloaded(true);
    }
   }, []);

   let Component
switch (window.location.pathname) {
  case "/":
    Component = LandingPage 
    break;
    case "/Institute":
    Component = InstituteMainScreen 
    break;
    case "/Student":
    Component = StudentMainScreen 
    break;
    
  default:
    break;
}

  return (
    <>
    <div className="">
      {loaded===true ? (
        <>
        <Component/>
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
      <InstituteInfo/>
      </>)
    :(<></>)}
    </div>
    </>
);
}

export default App;
