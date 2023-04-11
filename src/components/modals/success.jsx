import React, { useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const Success = () => {
  
  const [successMessage, setsuccessMessage] = useState(true);
  
  const SuccessM = () => {
    setsuccessMessage(false)
}



  return (
    <div>
    {successMessage && (
    <div className='fixed flex justify-center items-center top-0 left-0 w-screen h-screen backdrop-blur-sm bg-black/5 z-40' onClick={SuccessM}>
        <div className='bg-white p-12 mx-2 relative shadow rounded-xl flex flex-col items-center justify-center'>
        <CloseIcon onClick={SuccessM} className="absolute right-0 p-2 top-0 text-black z-50 cursor-pointer" style={{fontSize: "40px"}}/>
          <DoneIcon className="text-baseFont" style={{fontSize: "80px"}}/>
          <h3 className='text-lg'>Vehicle Type Details have been Updated</h3>
          <button onClick={SuccessM} className='text-base bg-gray-900 text-white px-8 py-2 rounded-lg mt-4'>ok</button>
        </div>
    </div>
    )}
    </div>
  )
}

export default Success