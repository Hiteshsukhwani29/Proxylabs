import React from "react";
import PageIntro from "../../components/PageIntro";
import LoginComponent from "../../components/LoginComponent";

function Index({ ShowModal, setShowModal }) {
  return (
    <div className="bg-bg1 flex flex-col justify-center">
      {ShowModal ? (
        <LoginComponent ShowModal={ShowModal} setShowModal={setShowModal} />
      ) : (
        <div className="flex-1">
          <PageIntro />
        </div>
      )}
    </div>
  );
}

export default Index;
