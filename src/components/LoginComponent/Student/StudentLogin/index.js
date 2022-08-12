import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { auth } from "../../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../../state/index";
import db from "../../../../firebase";

function Index({ Email, setShowPasswordBox }) {
  const [LoginPassword, setLoginPassword] = useState("");
  const [IsLoginPasswordCorrect, setIsLoginPasswordCorrect] = useState(true);
  const [
    IncorrectLoginPasswordHelpertext,
    setIncorrectLoginPasswordHelpertext,
  ] = useState("");

  const [Token, setToken] = useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    if (Token) {
      var userRef = db.collection("users").doc(Token).get();
      userRef.then((docSnapshot) => {
        if (docSnapshot.exists) {
          userRef.then((snapshot) => {
            dispatch(actionCreators.setUser(snapshot.data()))
          });
        }
      });
    }
  }, [Token])

  function refreshPage() {
    window.location.reload(false);
  }

  const logInWithEmailAndPassword = async () => {
    if (LoginPassword !== "") {
      setIsLoginPasswordCorrect(true);
      setIncorrectLoginPasswordHelpertext("");
      try {
        const res = await signInWithEmailAndPassword(
          auth,
          Email,
          LoginPassword
        );
        const uid = res.user.uid;
        localStorage.setItem("token", JSON.stringify(uid));
        setShowPasswordBox(false);
        setToken(uid);
        refreshPage()
      } catch (err) {
        setIsLoginPasswordCorrect(false);
        setIncorrectLoginPasswordHelpertext("Incorrect password");
      }
    } else {
      setIsLoginPasswordCorrect(false);
      setIncorrectLoginPasswordHelpertext("Password cannot be empty");
    }
  };

  return (
    <div className="flex flex-col">
      <TextField
        error={!IsLoginPasswordCorrect}
        helperText={IncorrectLoginPasswordHelpertext}
        className="w-96"
        id="outlined-basic"
        label="Password"
        variant="outlined"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
        value={LoginPassword}
      />
      <Button
        className="!bg-accent !text-white !mt-6 !px-10  !py-2 !rounded-full"
        variant="outlined"
        onClick={logInWithEmailAndPassword}
      >
        Login
      </Button>
    </div>
  );
}

export default Index;
