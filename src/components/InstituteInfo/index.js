import React, { useState } from 'react'
import CollegeDetail from "./CollegeDetail"
import WelcomeIntro from "./WelcomeIntro"
export default function Index() {
  return (
    <div>
        {/* {ShowCompleteProfile?<CollegeDetail setShowCompleteProfile={setShowCompleteProfile}/>:<WelcomeIntro setShowCompleteProfile={setShowCompleteProfile}/>} */}
        <CollegeDetail/>
    </div>
  )
}
