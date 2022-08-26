import React, { useEffect, useState } from "react";
import LabsItem from "./LabsItem";
import db from "../../firebase";

function Index({ SearchText }) {
  const [Items, Setitems] = useState([]);

  var RemoteLabRef;

  var labsid1 = ['11111','11112','11113','11114'];
  var labsid2 = ['11115','11116','11117','111118'];
  var labsid3 = ['11119','11120','11121','11122'];

  useEffect(() => {
    RemoteLabRef = db.collection("RemoteLabs");
    RemoteLabRef.get().then((snapshot) => {
      snapshot.docs.map((doc) => {
        const LabRef = RemoteLabRef.doc(doc.id).collection("Labs");
        
        RemoteLabRef.doc(doc.id).collection("Labs").doc((doc.id).slice(1, -1)).get().then((s)=>{
          console.log(s.data());
        });
        
        // LabRef.get().then((s) => {
        //   console.log(s);
          
        //   if(!s.empty()){
        //   console.log(s.docs.data());
        //   }
          // if (SearchText.length !== s.docs.data().name.length) {
          //   return 0;
          // }
          // let dist = 0;
          // for (let i = 0; i < SearchText.length; i += 1) {
          //   if (SearchText[i] !== s.docs.data().name[i]) {
          //     dist += 1;
          //   }
          // }
          // if (SearchText === s.docs.data().name) {
          //   if (dist < 10) {
          //     console.log(s.docs.data().labname)
          //     var instituteuid = s.docs.data().instituteuid;
          //     db.collection("Institutes")
          //       .doc(instituteuid)
          //       .get()
          //       .then((s) => {
                  // clgname = s.data().name;
                  // clgicon = s.data().icon;
                  // clglatlon = s.data().latlon;
                  // TempList.push({
                  //   clgname: clgname,
                  //   clgicon: clgicon,
                  //   clglatlon: clglatlon,
                  // });
                // });
            // }
          // }
        // });
      // });
    });
    });
  }, [SearchText])

  useEffect(() => {
    db.collection("labs").onSnapshot((snapshot) =>
      Setitems(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="">
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

export default Index;
