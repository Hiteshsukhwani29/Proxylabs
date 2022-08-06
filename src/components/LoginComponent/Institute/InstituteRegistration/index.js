import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Autocomplete,
  Alert,
  AlertTitle,
} from "@mui/material";
import db from "../../../../firebase";
import { auth } from "../../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collegesList } from "../../../../assets/collegesList";

function Index({ Email, setShowRegistrationBox }) {
  const [CollegeName, setCollegeName] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [IsPasswordSafe, setIsPasswordSafe] = useState(true);
  const [UnsafePasswordHelpertext, setUnsafePasswordHelpertext] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [IsConfirmPasswordSame, setIsConfirmPasswordSame] = useState(true);
  const [
    DifferentConfirmPasswordHelpertext,
    setDifferentConfirmPasswordHelpertext,
  ] = useState("");

  const [NirfId, setNirfId] = useState("");
  const [IsNirfIdCorrect, setIsNirfIdCorrect] = useState(true);
  const [IncorrectNirfIdHelpertext, setIncorrectNirfIdHelpertext] =
    useState("");

  const checkInstituteBeforeRegistration = () => {
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
      await db.collection("allInstitutes").doc(Email).set({
        name: CollegeName,
      });
      await db
        .collection("Institutes")
        .doc(user.uid)
        .set({
          uid: user.uid,
          name: CollegeName,
          nirf_id: NirfId,
          Email,
          approved: false,
          completepercent: 20,
        })
        .then(() => {
          setShowRegistrationBox(false);
          localStorage.setItem("token", JSON.stringify(user.uid));
        });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col mt-4">
      <Alert className="w-96 whitespace-normal" severity="info">
        <AlertTitle>Note</AlertTitle>
        After registration check your mail to verify your account
      </Alert>
      <Autocomplete
        disableClearable
        options={collegesList}
        className="w-96 mt-4"
        onChange={(e, v) => {
          setCollegeName(v);
        }}
        renderInput={(params) => (
          <TextField {...params} label="select college" />
        )}
      />
      <TextField
        error={!IsNirfIdCorrect}
        helperText={IncorrectNirfIdHelpertext}
        className="w-96 !mt-4"
        id="outlined-basic"
        label="NIRF Institute ID"
        placeholder="I have a code from my college (optional)"
        variant="outlined"
        onChange={(e) => {
          setNirfId(e.target.value);
        }}
        value={NirfId}
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

      <div className="mt-4 text-xs text-gray w-96 whitespace-normal">
        By selecting Agree and continue, I agree to Proxy Labs{" "}
        <span className="text-accent underline cursor-pointer">
          Terms of Service, Payments Terms of Service,
        </span>{" "}
        and{" "}
        <span className="text-accent underline cursor-pointer">
          Nondiscrimination Policy
        </span>{" "}
        and acknowledge the{" "}
        <span className="text-accent underline cursor-pointer">
          Privacy Policy
        </span>
        .
      </div>

      <Button
        className="!bg-accent !text-white !mt-6 !px-10  !py-2 !rounded-full"
        variant="outlined"
        onClick={checkInstituteBeforeRegistration}
      >
        Register
      </Button>
    </div>
  );
}

export default Index;
