import React from 'react'

function index({text,imgurl}) {
  return (
      <>
      <div className='inline-block bg-white'>
      <div className='flex flex-col justify-center p-2'>
          <img className='h-12 w-12 m-2' src={imgurl}></img>
          <div className='text-xs text-center'>{text}</div>
      </div>
      </div>
      </>
    )
}

export default index