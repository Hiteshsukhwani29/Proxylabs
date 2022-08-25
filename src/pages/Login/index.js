import React , {useState} from 'react'
import PageIntro from "../../components/PageIntro";
import LoginComponent from "../../components/LoginComponent";
import Navbar from "../../components/Navbar";


function Index() {
  const [ShowModal, setShowModal] = useState(false);
  return (
    <div className="bg-bg1 flex flex-col justify-center">
      <Navbar isAlreadyLoggedIn={false} setShowModal={setShowModal}/>
      {/* <Button onClick={() => setShowModal(true)}>Show Login screen</Button> */}
      {ShowModal?<LoginComponent ShowModal={ShowModal} setShowModal={setShowModal}/>:
      <div className="flex-1">
      <PageIntro />
    </div>}
    </div>
  )
}

export default Index