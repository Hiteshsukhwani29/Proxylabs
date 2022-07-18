import React, { useEffect, useState } from 'react';
import LabsItem from "./LabsItem";
import db from "../../firebase";

function Index() {
    const [Items, Setitems] = useState([]);
  useEffect(() => {
    db.collection("labs").onSnapshot((snapshot) =>
      Setitems(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className='mt-20 p-4'>
      {Items.map((res) => (
        <LabsItem
          collegename={res.name}
          category={res.category}
          imgurl={res.imgurl}
          labname={res.labname}
          lat={res.lat}
          lon={res.lon}
          rating={res.rating}
        />
      ))}
    </div>
  );
}

export default Index