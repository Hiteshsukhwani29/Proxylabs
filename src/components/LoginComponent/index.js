import React, { useEffect, useState } from "react";
import { X } from "heroicons-react";
import { TextField, Button } from "@mui/material";
import db from "../../firebase";

function Index() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [welcomeText, setwelcomeText] = useState("Welcome to Proxy Labs!");
  const [correctMailId, setcorrectMailId] = useState(false);
  const [incorrectMailIdHelperText, setincorrectMailIdHelperText] =
    useState("");
  const [HideEmailBox, setHideEmailBox] = useState(false);
  const [ShowPasswordBox, setShowPasswordBox] = useState(false);
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const checkMailId = () => {
    if (Email.match(validRegex)) {
      setcorrectMailId(false);
      setincorrectMailIdHelperText("");
      var userRef = db.collection("allUsers").doc(Email).get();
      if (Email != "") {
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
            setincorrectMailIdHelperText("Its a new mail id");
            setwelcomeText("Welcome to Proxy Labs!");
          }
        });
      }
    } else {
      setcorrectMailId(true);
      setincorrectMailIdHelperText("Invalid mail id");
    }
  };
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
            setPassword(e.target.value);
          }}
          value={Password}
        />
      ) : (
        <></>
      )}

      <Button
        className="!bg-accent !text-white !mt-6 !px-10  !py-2 !rounded-full"
        variant="outlined"
        onClick={checkMailId}
      >
        Next
      </Button>
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
