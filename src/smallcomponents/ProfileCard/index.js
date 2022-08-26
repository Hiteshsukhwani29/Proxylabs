import React from 'react'

export default function index() {

  
  return (
    <div className='flex flex-col w-[20rem] overflow-x-clip px-6 py-4 rounded-xl bg-white   drop-shadow-xl'>
        <div className='flex flex-col items-center justify-center'>
        <div className="h-12 w-12 bg-temp rounded-full m-2"></div>
        <div className='text-center font-light'>Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune</div>
        </div>
        <div className='bg-accent py-1 text-center text-white my-3 px-8 mx-auto rounded-lg'>OO Coins</div>
        <div className=''>
          <div className='mb-1'>My Profile</div>
          <div className='my-1'>Lab Bookings</div>
          <div className='my-1'>Curriculum</div>
          <div className='mt-1'>Sign out</div>
        </div>
    </div>
  )
}
