import React, { useState } from "react";
import { X } from "heroicons-react";
import { TextField, Button } from "@mui/material";
import db from "../../firebase";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

/**
 * Appropriate comments are must, otherwise changes will not be merged
 */

/**
 * @author Hitesh Sukhwani
 */
function Index() {
  /**
   * /////////////////////////////////////////
   * Common States
   * /////////////////////////////////////////
   */

  /**
   * This state will store Email ID, which will be common for both signup and signin
   */
  const [Email, setEmail] = useState("");

  /**
   * This state will store welocome text, which will be changed if email is found in DB
   */
  const [welcomeText, setwelcomeText] = useState("Welcome to Proxy Labs!");

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
  const [HideNextBtn, setHideNextBtn] = useState(false);
  const [ShowRegistrationBox, setShowRegistrationBox] = useState(false);

  /**
   * /////////////////////////////////////////
   * ////////////////////////////////////////
   */

  /**
   * /////////////////////////////////////////
   * Common Functions
   * /////////////////////////////////////////
   */

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
    var userRef = db.collection("allUsers").doc(Email).get();
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
          setHideNextBtn(true);
          setShowRegistrationBox(true);
          setincorrectMailIdHelperText("Its a new mail id");
          setwelcomeText("Welcome to Proxy Labs!");
        }
      });
    }
  };

  /**
   * /////////////////////////////////////////
   * ////////////////////////////////////////
   */

  /**
   * /////////////////////////////////////////
   * Login States
   * /////////////////////////////////////////
   */

  /**
   * This State will store the password which is entered in login password box
   */
  const [LoginPassword, setLoginPassword] = useState("");

  /**
   * /////////////////////////////////////////
   * ////////////////////////////////////////
   */

  /**
   * /////////////////////////////////////////
   * SignUp States
   * /////////////////////////////////////////
   */

  const [FullName, setFullName] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [IsPasswordSafe, setIsPasswordSafe] = useState(true);
  const [UnsafePasswordHelpertext, setUnsafePasswordHelpertext] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [IsConfirmPasswordSame, setIsConfirmPasswordSame] = useState(true);
  const [
    DifferentConfirmPasswordHelpertext,
    setDifferentConfirmPasswordHelpertext,
  ] = useState("");

  /**
   * /////////////////////////////////////////
   * ////////////////////////////////////////
   */

  /**
   * /////////////////////////////////////////
   * SignUp Functions
   * /////////////////////////////////////////
   */

  const checkUserBeforeRegistration = () => {
    if (NewPassword.length < 6) {
      setIsPasswordSafe(false);
      setUnsafePasswordHelpertext("Password cannot be less than 6 characters");
    } else {
      setIsPasswordSafe(true);
      setUnsafePasswordHelpertext("");
      if (ConfirmPassword !== NewPassword) {
        setIsConfirmPasswordSame(false);
        setDifferentConfirmPasswordHelpertext("Password does not match");
      } else {
        setIsConfirmPasswordSame(true);
        setDifferentConfirmPasswordHelpertext("");
        // This function will register user with email, password and add user data in firestore
        registerWithEmailAndPassword();
      }
    }
  };

  const registerWithEmailAndPassword = async () => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        Email,
        NewPassword
      );
      const user = res.user;
      await db.collection("allUsers").doc(Email).set({
        name: FullName,
      });
      await db
        .collection("users")
        .doc(user.uid)
        .set({
          uid: user.uid,
          name: "Hitesh",
          authProvider: "local",
          Email,
        })
        .then(setShowRegistrationBox(false));
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  /**
   * /////////////////////////////////////////
   * ////////////////////////////////////////
   */

  /**
   * @TODO Add comments/break this in components
   */
  return (
    <div
      className="flex flex-col w-min p-5 rounded-xl bg-white whitespace-nowrap m-auto"
      style={{ border: "1px solid #eeeeee" }}
    >
      <div className="flex items-center">
        <X className="h-4 w-4 flex-0" />
        <div className="text-lg whitespace-nowrap flex-1 text-center">
          Login or Signup
        </div>
      </div>
      <div className=" bg-gray w-auto h-[1px] mt-3 -mx-5 opacity-50"></div>
      <div className="flex my-3">
        <div className="flex-col">
          <div className="text-sm mx-[1px] tracking-wider">Student</div>
          <div className="bg-accent w-auto h-1 rounded-full"></div>
        </div>
        <div className="text-sm ml-5 mx-[1px] tracking-wider">Institute</div>
      </div>
      <div className="my-4 text-lg">{welcomeText}</div>
      {!HideEmailBox ? (
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
      ) : (
        <></>
      )}

      {ShowPasswordBox ? (
        <TextField
          error={correctMailId}
          helperText={incorrectMailIdHelperText}
          className="w-96"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
          value={LoginPassword}
        />
      ) : (
        <></>
      )}

      {!HideNextBtn ? (
        <Button
          className="!bg-accent !text-white !mt-6 !px-10  !py-2 !rounded-full"
          variant="outlined"
          onClick={checkMailId}
        >
          Next
        </Button>
      ) : (
        <></>
      )}
      {ShowRegistrationBox ? (
        <div className="flex flex-col mt-4">
          <TextField
            className="w-96"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            value={FullName}
          />
          <TextField
            error={!IsPasswordSafe}
            helperText={UnsafePasswordHelpertext}
            className="w-96 !mt-4"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            value={NewPassword}
          />
          <TextField
            error={!IsConfirmPasswordSame}
            helperText={DifferentConfirmPasswordHelpertext}
            className="w-96 !mt-4"
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={ConfirmPassword}
          />
          <Button
            className="!bg-accent !text-white !mt-6 !px-10  !py-2 !rounded-full"
            variant="outlined"
            onClick={checkUserBeforeRegistration}
          >
            Register
          </Button>
        </div>
      ) : (
        <></>
      )}
      <div className="flex my-6">
        <div className=" bg-gray flex-1 h-[1px] mt-3"></div>
        <div className="mx-5 flex-0 text-gray">or</div>
        <div className=" bg-gray flex-1 w-auto h-[1px] mt-3"></div>
      </div>
      <div
        className="flex items-center rounded-full px-4 py-2"
        style={{ border: "1px solid #eeeeee" }}
      >
        <img
          className="h-5 w-5 flex-0"
          src="https://img.icons8.com/color/48/000000/google-logo.png"
        />
        <div className="text-lg whitespace-nowrap flex-1 text-center opacity-50">
          Continue with Google
        </div>
      </div>
      <div
        className="flex items-center rounded-full px-4 py-2 my-5"
        style={{ border: "1px solid #eeeeee" }}
      >
        <img
          className="h-5 w-5 flex-0"
          src="https://img.icons8.com/fluency/48/000000/mail.png"
        />
        <div className="text-lg whitespace-nowrap flex-1 text-center opacity-50">
          Continue with mail
        </div>
      </div>
    </div>
  );
}

export default Index;
