import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import db from "../../../firebase";
import InstituteRegistration from "../Institute/InstituteRegistration";
import InstituteLogin from "../Institute/InstituteLogin";

/**
 * Appropriate comments are must, otherwise changes will not be merged
 */

/**
 * @author Hitesh Sukhwani
 */
function Index({ setwelcomeText }) {
  useEffect(() => {
    setwelcomeText("Welcome to Proxy Labs!");
  }, []);

  /**
   * This state will store Email ID, which will be common for both signup and signin
   */
  const [Email, setEmail] = useState("");

  /**
   * This state will store welocome text, which will be changed if email is found in DB
   */
  // const [welcomeText, setwelcomeText] = useState("Welcome to Proxy Labs!");

  /**
   * This state will store bool value and will be used to check if the Mail id is incorrectly formatted or not
   * If it is true than it will show a error in Email Box,
   * And it will modify the helper text
   */
  const [correctMailId, setcorrectMailId] = useState(false);
  const [incorrectMailIdHelperText, setincorrectMailIdHelperText] =
    useState("");

  /**
   * This state will store a bool value
   * If Email Id is found in DB then
   * It will make HideEmailBox to true
   * ShowPasswordBox to true
   * HideNextBtn to true
   * ShowRegistrationBox to true
   */
  const [HideEmailBox, setHideEmailBox] = useState(false);
  const [ShowPasswordBox, setShowPasswordBox] = useState(false);
  const [ShowRegistrationBox, setShowRegistrationBox] = useState(false);

  // This variable will be used for checking correct format of mail id
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const checkMailId = () => {
    // If Mail Id format is correct
    if (Email.match(validRegex)) {
      //set state to false, will be used for reseting
      setcorrectMailId(false);
      setincorrectMailIdHelperText("");
      // Check whether this mail id is present in DB
      checkForMailIdInDatabase();
    } else {
      //set state to true, it will display error in EmailBox
      setcorrectMailId(true);
      setincorrectMailIdHelperText("Invalid mail id");
    }
  };

  const checkForMailIdInDatabase = () => {
    var userRef = db.collection("allInstitutes").doc(Email).get();
    if (Email !== "") {
      userRef.then((docSnapshot) => {
        if (docSnapshot.exists) {
          userRef.then((snapshot) => {
            console.log("working", snapshot.data().name);
            setwelcomeText("Welcome " + snapshot.data().name);
            setHideEmailBox(true);
            setShowPasswordBox(true);
          });
        } else {
          setcorrectMailId(true);
          setHideEmailBox(true);
          setShowRegistrationBox(true);
          setincorrectMailIdHelperText("Its a new mail id");
          setwelcomeText("Welcome to Proxy Labs!");
        }
      });
    }
  };

  return (
    <>
      {!HideEmailBox ? (
        <>
          <TextField
            error={correctMailId}
            helperText={incorrectMailIdHelperText}
            className=" w-96"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={Email}
          />
          <Button
            className="!bg-accent !text-white !mt-6 !px-10  !py-2 !rounded-full !border-none"
            variant="outlined"
            onClick={checkMailId}
          >
            Next
          </Button>
        </>
      ) : (
        <></>
      )}

      {ShowPasswordBox ? (
        <InstituteLogin Email={Email} setShowPasswordBox={setShowPasswordBox} />
      ) : (
        <></>
      )}
      {ShowRegistrationBox ? (
        <InstituteRegistration
          Email={Email}
          setShowRegistrationBox={setShowRegistrationBox}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Index;
