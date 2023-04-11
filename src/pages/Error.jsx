import React from 'react'

const Error = () => {
  return (
    <div className='flex justify-center items-center flex-col w-full h-full'>
      <img src="404.png" alt="404" />
      <h1 className='text-[70px] md:text-404 leading-404 font-bold'>404</h1>
      <p className='text-baseFont text-[30px]  md:text-404p leading-404p'>Page Not Found</p>
    </div>
  )
}

export default Error