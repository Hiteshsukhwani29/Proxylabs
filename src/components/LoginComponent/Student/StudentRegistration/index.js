import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import db from "../../../../firebase";
import { auth } from "../../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Index({ Email, setShowRegistrationBox }) {

  let navigate = useNavigate();

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

  const [CreditCode, setCreditCode] = useState("");
  const [IsCodeCorrect, setIsCodeCorrect] = useState(true);
  const [IncorrectCodeHelpertext, setIncorrectCodeHelpertext] = useState("");

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
        checkCreditCode();
        // This function will register user with email, password and add user data in firestore
      }
    }
  };

  const checkCreditCode = () => {
    if (CreditCode !== "") {
      var CreditCodeRef = db.collection("CreditCode").doc(CreditCode);

      CreditCodeRef.get().then((docSnapshot) => {
        if (docSnapshot.exists) {
          CreditCodeRef.get().then((snapshot) => {
            const creditValue = snapshot.data().creditvalue;
            const instituteuid = snapshot.data().instituteuid;
            const course = snapshot.data().course;

            var instituteRef = db.collection("Institute").doc(instituteuid);

            instituteRef.get().then((snapshot) => {
              if (snapshot.data().credits - creditValue > 0) {
                instituteRef.update({
                  credits: snapshot.data().credits - creditValue,
                });

                registerWithEmailAndPassword(course, creditValue, instituteuid);
              } else {
                setIsCodeCorrect(false);
                setIncorrectCodeHelpertext(
                  "Your college don't have enough credits, please contact your college"
                );
              }
            });
          });
        } else {
          setIsCodeCorrect(false);
          setIncorrectCodeHelpertext("This code doesn't exists");
        }
      });
    } else {
      setIsCodeCorrect(true);
      setIncorrectCodeHelpertext("");
    }
  };

  const registerWithEmailAndPassword = async (
    course,
    credits,
    instituteuid
  ) => {
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
          instituteuid: instituteuid,
          credits: credits,
          name: FullName,
          course: course,
          Email,
        })
        .then(() => {
          setShowRegistrationBox(false);
          localStorage.setItem("token", JSON.stringify(user.uid));
          localStorage.setItem("type", JSON.stringify("Student"));
          navigate("/Student");
          refreshPage()
        });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
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
      <TextField
        error={!IsCodeCorrect}
        helperText={IncorrectCodeHelpertext}
        className="w-96 !mt-4"
        id="outlined-basic"
        label="Credit Code"
        placeholder="I have a code from my college (optional)"
        variant="outlined"
        onChange={(e) => {
          setCreditCode(e.target.value);
        }}
        value={CreditCode}
      />
      <Button
        className="!bg-accent !text-white !mt-6 !px-10  !py-2 !rounded-full"
        variant="outlined"
        onClick={checkUserBeforeRegistration}
      >
        Register
      </Button>
    </div>
  );
}

export default Index;
