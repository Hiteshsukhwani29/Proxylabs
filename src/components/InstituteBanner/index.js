import React from 'react'

export default function Index() {
  return (
    <div className="flex items-center px-12  py-6">
      <div>
      <div className="h-16 w-16 bg-temp rounded-full "></div>
      </div>
      <div className="mx-6 w-full">
        <div className="font-bold text-xl pb-2 ">Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune</div>
        <div className="flex justify-between items-center">
          <div>
            <ul className='flex list-disc'>
              <li className='mx-4'>NAAC A+ Accreditated</li>
              <li className='mx-4'>AICTE Approved</li>
              <li className='mx-4'>UGC Recognised Deemed University</li>
            </ul>
          </div>
          <div className="border px-4 py-1 rounded-lg">Distance : 0.5 km</div>
        </div>
      </div>
    </div>
  )
}
