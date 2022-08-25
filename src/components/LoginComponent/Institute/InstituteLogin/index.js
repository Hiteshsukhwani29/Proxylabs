import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { auth } from "../../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Index({ Email, setShowPasswordBox }) {

  let navigate = useNavigate();

  const [LoginPassword, setLoginPassword] = useState("");
  const [IsLoginPasswordCorrect, setIsLoginPasswordCorrect] = useState(true);
  const [
    IncorrectLoginPasswordHelpertext,
    setIncorrectLoginPasswordHelpertext,
  ] = useState("");

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
        localStorage.setItem("type", JSON.stringify("Institute"));
        setShowPasswordBox(false);
        navigate("/Institute");
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
