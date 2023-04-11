import React, { useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';

const ConfirmationWithSuccess = ({con, suc}) => {
  
  const [confirmSuccessMessage, setconfirmSecessMessage] = useState(false);
  const [confirmMessage, setconfirmMessage] = useState(true);
  
  const ConfirmM = () => {
    setconfirmMessage(false);
    setconfirmSecessMessage(true);
}

 const CloseConfirmM =() => {
  setconfirmMessage(false)
 }
  const CloseSucsess = () => {
    setconfirmSecessMessage(false);
  }



  return (
    <div>
    {confirmMessage && (
    <div className='fixed flex justify-center items-center inset-0  backdrop-blur-sm bg-black/5 z-40'>
        <div className='bg-white mx-2 px-8 py-12 relative shadow rounded-xl flex flex-col items-center justify-center'>
        <CloseIcon onClick={CloseConfirmM} className="absolute right-0 p-2 top-0 text-black z-50 cursor-pointer" style={{fontSize: "40px"}}/>
          <NotListedLocationIcon className="text-baseFont" style={{fontSize: "80px"}}/>
          <h3 className='text-lg w-10/12 mx-2 text-center'>{con}</h3>
          <div className='flex justify-between items-center md:w-2/3 w-3/4'>
          <button onClick={ConfirmM} className='text-base bg-gray-900 text-white px-8 py-2 rounded-lg mt-4'>Yes</button>
          <button onClick={CloseConfirmM} className='text-base  text-gray-900 border px-8 py-2 rounded-lg mt-4'>No</button>
          </div>      
        </div>
    </div>
    )}
        {confirmSuccessMessage && (
    <div className='fixed flex justify-center items-center inset-0 w-screen h-screen backdrop-blur-sm bg-black/5 z-40' onClick={CloseSucsess}>
        <div className='bg-white mx-2 p-12 relative shadow rounded-xl flex flex-col items-center justify-center'>
        <CloseIcon onClick={CloseSucsess} className="absolute right-0 p-2 top-0 text-black z-50 cursor-pointer" style={{fontSize: "40px"}}/>
          <DoneIcon className="text-baseFont" style={{fontSize: "80px"}}/>
          <h3 className='text-lg'>{suc}</h3>
          <button onClick={CloseSucsess} className='text-base bg-gray-900 text-white px-8 py-2 rounded-lg mt-4'>ok</button>
        </div>
    </div>
    )}
    </div>
  )
}

export default ConfirmationWithSuccess;