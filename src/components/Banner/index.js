import React, { useEffect, useState } from "react";
import BannerItem from "./BannerItem";
import db from "../../firebase";

function Index() {
  const [Items, Setitems] = useState([]);
  useEffect(() => {
    db.collection("Banner-colleges").onSnapshot((snapshot) =>
      Setitems(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="bg-white shadow-[0_16px_33px_rgba(89,163,201,0.35)] rounded-xl mx-3 mt-20 p-2">
      {Items.map((res) => (
        <BannerItem
          text={res.name}
          imgurl={res.imgurl}
        />
      ))}
    </div>
  );
}

export default Index;
