import React from 'react'
import icon from "../../../assets/nav_profile_icon.png"

export default function index({amenities,Amenitiesicon}) {
  return (
    <div className='flex items-center'>
        <div><img className='w-5 mx-2 my-3' src={Amenitiesicon} alt="" /></div>
        <div className=''>{amenities}</div>
    </div>
  )
}
