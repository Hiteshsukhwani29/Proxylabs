import React from 'react'
import stats from "../../assets/stats.png"
import whyproxy from "../../assets/whyproxy.png"

export default function index() {
  return (
    <div className='mx-16'>
        <div className='px-28 px-6'> 
            <div className=' font-semibold text-2xl'>Ever wondered what problems do we face?</div>
            <div className=' font-light text-lg'>Stats don’t lie :)</div>
        </div>

        <div className=' px-14'>
           <img src={stats} alt="" srcset="" /> 
        </div>
        <div className='px-14'>
           <img src={whyproxy} alt="" srcset="" /> 
        </div>
    </div>
  )
}
