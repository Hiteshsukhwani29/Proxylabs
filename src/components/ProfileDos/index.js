import React, { useEffect, useState } from "react";
import db from "../../firebase";
import ProfileDosItem from "./ProfileDosItem"

function Index() {
  
  const [experiment, setexperiment] = useState([]);

  useEffect(() => {
    db.collection("experiment").onSnapshot((snapshot) =>
      setexperiment(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <>
      <div className="bg-white rounded-lg mx-4 my-4 px-4 py-4 " style={{width:"600px"}}>
        <div className="text-semibold font-bold px-4 pb-2">AIM: {experiment.map((res) => res.nos)} </div>
        <div className="px-4 py-1">{experiment.map((res) => res.name)}</div>
      </div>

      <ProfileDosItem/>
    </>
    
  );
}
export default Index;


// {experiment.map((res) => res.name)}