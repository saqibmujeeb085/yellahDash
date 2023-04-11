import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';


const CommissionModal = () => {
  
  const [commissionTab, setCommissionTab] = useState(true);

  const [successMessage, setsuccessMessage] = useState(false);
  
  const SuccessM = () => {
    setsuccessMessage(false)
}
const CloseM = () => {
  setCommissionTab(false)
}
  
  const CommissiontabClose = () => {
    setCommissionTab(false)
    setsuccessMessage(true)
}



  return (
    <div>
    {commissionTab && (
    <div className='fixed flex justify-center items-center inset-0 w-screen h-screen backdrop-blur-sm bg-black/5 z-40'>
        <div className='bg-white w-1/2 px-12 py-16 mx-2 relative shadow rounded-3xl flex flex-col items-start justify-center'>
         <h2 className='text-center text-black font-bold text-[30px] md:text-[50px] w-full'>Edit Commission</h2>   
        <CloseIcon onClick={CloseM} className="absolute right-0 p-2 m-2 text-[20px] top-0 text-black z-50 cursor-pointer" style={{fontSize: "40px"}}/>
          <div className='w-full'>
            <div className='mt-2'>
            <label htmlFor="" className='pl-5 md:pl-10'>Current Rate<span className='text-red-700'>*</span>: </label>
            <input type="text" name="" placeholder='20%' id="" className='w-full px-3 py-3 shadow-lg rounded-xl my-3 mx-2 border border-[#313F4833]'/>
            </div>
            <div className='mb-2'>
            <label htmlFor="" className='pl-5 md:pl-10'> New Rate ($)<span className='text-red-700'>*</span>:</label>
            <input type="text" name="" placeholder='20%' id="" className='w-full  px-3 py-3 shadow-lg rounded-xl my-3 mx-2 border border-[#313F4833]'/>
            </div>
          </div>
          <button onClick={CommissiontabClose} className='text-base ml-2 bg-gray-900 text-white px-8 py-2 rounded-lg mt-4'>Save</button>
        </div>
    </div>
    )}
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

export default CommissionModal
