import React, { useState } from 'react'
import CollegeDetail from "./CollegeDetail"
import WelcomeIntro from "./WelcomeIntro"
export default function Index() {
  const [ShowCompleteProfile, setShowCompleteProfile] = useState(false)
  return (
    <div>
        {/* {ShowCompleteProfile?<CollegeDetail setShowCompleteProfile={setShowCompleteProfile}/>:<WelcomeIntro setShowCompleteProfile={setShowCompleteProfile}/>} */}
        <CollegeDetail/>
    </div>
  )
}
