import React, { useRef, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { storage } from "../../firebase";
import { useSelector } from "react-redux";

function Index({
  setuploadExperimentUrl,
  setuploadPituresUrl,
  setuploadBookingReceitUrl,
  setShowUploadModal,
}) {
  const state = useSelector((state) => state.t1);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const [imageAsFile1, setImageAsFile1] = useState("");
  const [imageAsFile2, setImageAsFile2] = useState("");
  const [imageAsFile3, setImageAsFile3] = useState("");

  const [ShowSubmitBtn, setShowSubmitBtn] = useState(false);

  useEffect(() => {
    var ctr = 0;
    if (imageAsFile1 != "") {
      ctr++;
    }
    if (imageAsFile2 != "") {
      ctr++;
    }
    if (imageAsFile3 != "") {
      ctr++;
    }
    if (ctr === 3) {
      setShowSubmitBtn(true);
    }
  }, [imageAsFile1, imageAsFile2, imageAsFile3]);

  useEffect(() => {
    if (imageAsFile1 === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile1}`);
    }
    if (imageAsFile1 !== "") {
      console.log("working");
      console.log(imageAsFile1.lastModified);
      const uploadTask = storage
        .ref(
          `/Institutes/${state.user.instituteuid}/StudentsExperiments/${state.user.uid}/${imageAsFile1.lastModified}`
          )
        .put(imageAsFile1);

      uploadTask.on(
        "state_changed",
        (snapShot) => {
          console.log(snapShot);
        },
        (err) => {
          console.log("not working");
          console.log(err);
        },
        () => {
          storage
          .ref(
            `/Institutes/${state.user.instituteuid}/StudentsExperiments/${state.user.uid}/${imageAsFile1.lastModified}`
            )
            .getDownloadURL()
            .then((fireBaseUrl) => {
              setuploadExperimentUrl(fireBaseUrl);
            });
        }
      );
    }
  }, [imageAsFile1]);

  useEffect(() => {
    if (imageAsFile2 === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile2}`);
    }
    if (imageAsFile2 !== "") {
      const uploadTask = storage
        .ref(
          `/Institutes/${state.user.instituteuid}/LabPictures/${state.user.uid}/${imageAsFile2.lastModified}`
        )
        .put(imageAsFile2);

      uploadTask.on(
        "state_changed",
        (snapShot) => {
          //takes a snap shot of the process as it is happening
          console.log(snapShot);
        },
        (err) => {
          //catches the errors
          console.log(err);
        },
        () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          storage
          .ref(
            `/Institutes/${state.user.instituteuid}/LabPictures/${state.user.uid}/${imageAsFile2.lastModified}`
          )
            .getDownloadURL()
            .then((fireBaseUrl) => {
              setuploadPituresUrl(fireBaseUrl);
            });
        }
      );
    }
    console.log(uploadPitures);
  }, [imageAsFile2]);

  useEffect(() => {
    if (imageAsFile3 === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile2}`);
    }
    if (imageAsFile3 !== "") {
      const uploadTask = storage
        .ref(
          `/Institutes/${state.user.instituteuid}/BookingReciets/${state.user.uid}/${imageAsFile3.lastModified}`
        )
        .put(imageAsFile3);

      uploadTask.on(
        "state_changed",
        (snapShot) => {
          //takes a snap shot of the process as it is happening
          console.log(snapShot);
        },
        (err) => {
          //catches the errors
          console.log(err);
        },
        () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          storage
          .ref(
            `/Institutes/${state.user.instituteuid}/BookingReciets/${state.user.uid}/${imageAsFile3.lastModified}`
          )
            .getDownloadURL()
            .then((fireBaseUrl) => {
              setuploadBookingReceitUrl(fireBaseUrl);
            });
        }
      );
    }
  }, []);

  // console.log(imageAsFile);
  const uploadExperiment = async () => {
    await inputRef1.current?.click();
    console.log("working1");
  };

  const uploadPitures = async () => {
    await inputRef2.current?.click();
    console.log("working2");
  };

  const uploadBookingReceit = async () => {
    await inputRef3.current?.click();
    console.log("working3");
  };

  const handleImageAsFile1 = (e) => {
    console.log("working");
    const image = e.target.files[0];
    console.log(e.target);
    setImageAsFile1((imageFile) => image);
  };
  const handleImageAsFile2 = (e) => {
    console.log("working");
    const image = e.target.files[0];
    console.log(e.target);
    setImageAsFile2((imageFile) => image);
  };
  const handleImageAsFile3 = (e) => {
    console.log("working");
    const image = e.target.files[0];
    console.log(e.target);
    setImageAsFile3((imageFile) => image);
  };

  const submitFiles = () => {
    setShowUploadModal(false);
  };

  return (
    <div
      className="p-8 w-96 absolute mt-[30%] -ml-[5%] flex flex-col bg-white rounded-2xl"
      style={{ border: "1px solid #eeeeee" }}
    >
      <input
        type="file"
        ref={inputRef1}
        className="hidden"
        onChange={handleImageAsFile1}
      />
      <Button
        className={`${
          imageAsFile1 !== "" ? "!bg-temp" : "!bg-white"
        } !text-black !px-6 !py-2 !rounded-full !mr-4`}
        variant="outlined"
        onClick={uploadExperiment}
      >
        Upload Experiment
      </Button>
      <input
        type="file"
        ref={inputRef2}
        className="hidden"
        onChange={handleImageAsFile2}
      />
      <Button
        className={`${
          imageAsFile2 !== "" ? "!bg-temp" : "!bg-white"
        } !text-black !px-6 !py-2 !rounded-full !mr-4 !mt-3`}
        variant="outlined"
        onClick={uploadPitures}
      >
        Upload Pictures
      </Button>
      <input
        type="file"
        ref={inputRef3}
        className="hidden"
        onChange={handleImageAsFile3}
      />
      <Button
        className={`${
          imageAsFile3 !== "" ? "!bg-temp" : "!bg-white"
        } !text-black !px-6 !py-2 !rounded-full !mr-4 !mt-3`}
        variant="outlined"
        onClick={uploadBookingReceit}
      >
        Upload Booking Receit
      </Button>
      <Button
        className="!bg-accent !mt-8 !px-6 !py-2 !rounded-full !mr-4"
        disabled={!ShowSubmitBtn}
        variant="contained"
        onClick={submitFiles}
      >
        Submit
      </Button>
    </div>
  );
}

export default Index;
