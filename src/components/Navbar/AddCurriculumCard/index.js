import React from 'react'
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function Index() {

  var navigate = useNavigate();

  const gotoCurriculumPage = () =>{
    navigate("/CreateCurriculum");
  }

  return (
    <div className='flex flex-col w-[22rem] overflow-x-clip px-8 py-5 rounded-xl bg-white drop-shadow-xl absolute border-gray1'>
        
        <Button
          className="!bg-white !text-black !px-4 !mb-2 !py-2 !rounded-3xl border-gray1"
          variant="outlined"
        >
          Get university curriculum
        </Button>

        <Button
          className="!bg-accent !text-white !px-6 !mt-2 !py-2 !rounded-3xl !border-none"
          variant="outlined"
          onClick={()=>gotoCurriculumPage()}
        >
         Create own curriculum
        </Button>
      
    </div>
  )
}
