import React,{useState} from 'react'
import PageIntro from "../../components/PageIntroInstitute";
import Landing_bg from "../../assets/Landing_bg.png"
import DashboardComponent from "../../components/DashboardComponent"
import Headings from "../../components/Headings";

export default function Index() {
    const [SearchText, setSearchText] = useState("");
  return (
    
    <div>
     <Headings
        Head="Laboratories at everyone’s comfort. Laboratories at"
        detail="Allow your location, select your field and dive into the list of colleges at your disposal :)"
      />  
      <div className='w-[80%] m-auto pb-10'>
            <div className='font-semibold text-lg py-1'>Your Booking</div>
            <div className=" bg-gray flex-1 h-[1px]  "></div>
        </div>

      <DashboardComponent/> 
      <DashboardComponent/> 
      <DashboardComponent/> 
      <DashboardComponent/> 
    </div>
  )
}
