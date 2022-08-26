import React, { useEffect, useState } from "react";
import LabsItem from "./LabsItem";
import db from "../../firebase";

function Index({ SearchText }) {
  const [Items, Setitems] = useState([]);

  const [clgname, setclgname] = useState("");
  const [clgicon, setclgicon] = useState("");
  const [clgrating, setclgrating] = useState(0);
  const [labname, setlabname] = useState("");

  var TempList = [];

  var RemoteLabRef;

  useEffect(() => {
    RemoteLabRef = db.collection("RemoteLabs");
    RemoteLabRef.get().then((snapshot) => {
      snapshot.docs.map((doc) => {
        RemoteLabRef.doc(doc.id)
          .collection("Labs")
          .doc("11111")
          .get()
          .then((s) => {
            console.log(s.data());
            if (SearchText.length !== s.data().labname.length) {
              return 0;
            }
            let dist = 0;
            for (let i = 0; i < SearchText.length; i += 1) {
              if (SearchText[i] !== s.data().labname[i]) {
                dist += 1;
              }
            }
            // if (SearchText === s.docs.data().name) {
            console.log(dist);
            if (dist < 10) {
              console.log(s.data().labname);
              console.log("working");
              var instituteuid = s.data().instituteuid;
              db.collection("Institutes")
                .doc(instituteuid)
                .get()
                .then((s) => {
                  var clgname = s.data().name;
                  var clgicon = s.data().imgurl;
                  var clglat = s.data().lat;
                  var clglon = s.data().lon;
                  TempList.push({
                    clgname: clgname,
                    clgicon: clgicon,
                    clglat: clglat,
                    clglon: clglon,
                  });
                });
            }
          });

        RemoteLabRef.doc(doc.id)
          .collection("Labs")
          .doc("11112")
          .get()
          .then((s) => {
            console.log(s.data());
            if (SearchText.length !== s.data().labname.length) {
              return 0;
            }
            let dist = 0;
            for (let i = 0; i < SearchText.length; i += 1) {
              if (SearchText[i] !== s.data().labname[i]) {
                dist += 1;
              }
            }
            // if (SearchText === s.docs.data().name) {
            if (dist < 10) {
              console.log(s.data().labname);
              console.log("working");
              var instituteuid = s.data().instituteuid;
              db.collection("Institutes")
                .doc(instituteuid)
                .get()
                .then((s) => {
                  var clgname = s.data().name;
                  var clgicon = s.data().imgurl;
                  var clglat = s.data().lat;
                  var clglon = s.data().lon;
                  TempList.push({
                    clgname: clgname,
                    clgicon: clgicon,
                    clglat: clglat,
                    clglon: clglon,
                  });
                });
            }
          });
        Setitems(TempList);
      });
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
    // });
    // });
  }, [SearchText]);

  useEffect(() => {
    db.collection("labs").onSnapshot((snapshot) =>
      Setitems(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="">
      {Items.map(({ clgname, clgicon, clgrating, clglat, clglon }) => (
        <LabsItem
          collegename={clgname}
          category="Tier 2"
          imgurl={clgicon}
          labname={labname}
          lat={clglat}
          lon={clglon}
          rating={clgrating}
        />
      ))}
    </div>
  );
}

export default Index;
