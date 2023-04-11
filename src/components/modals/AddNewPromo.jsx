import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const AddNewPromo = () => {
  
  const [nPromo, setNPromo] = useState(true);
  
  const PromoND = () => {
    setNPromo(false);
}




  return (
    <div>
    {nPromo && (
    <div className='fixed flex justify-center items-center inset-0  backdrop-blur-sm bg-black/5 z-40'>
        <div className='bg-white w-2/3 px-8 py-12 relative shadow rounded-xl flex flex-col items-center justify-center'>
        <CloseIcon onClick={PromoND} className="absolute m-2 right-0 p-2 top-0 text-black z-50 cursor-pointer" style={{fontSize: "40px"}}/>
          <h3 className='text-[30px] md:text-[50px] font-bold mx-2 text-center'>Promo Detail</h3>
          <div className='mt-5'>
             <form>
             <ul className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6'>
                <li>
            <div className='mt-2'>
            <label htmlFor="" className='pl-3 md:pl-7'>Promo Name: </label>
            <input type="text" name="" placeholder='Enter Name' id="" className='w-full placeholder:text-[#999999] px-3 py-3 shadow-lg rounded-xl my-3 mx-2 border border-[#313F4833]'/>
            </div>
                </li>
                <li>
            <div className='mt-2'>
            <label htmlFor="" className='pl-3 md:pl-7'>Added On: </label>
            <input type="Date" name="" placeholder='12/12/12' id="" className='w-full placeholder:text-[#999999] px-3 py-3 shadow-lg rounded-xl my-3 mx-2 border border-[#313F4833]'/>
            </div>
                </li>
                <li>
            <div className='mt-2'>
            <label htmlFor="" className='pl-3 md:pl-7'>Discount: </label>
            <input type="text" name="" placeholder='$' id="" className='w-full placeholder:text-[#999999] px-3 py-3 shadow-lg rounded-xl my-3 mx-2 border border-[#313F4833]'/>
            </div>
                </li>
                <li>
            <div className='mt-2'>
            <label htmlFor="" className='pl-3 md:pl-7'>Promo Code: </label>
            <input type="text" name="" placeholder='Enter Code' id="" className='w-full placeholder:text-[#999999] px-3 py-3 shadow-lg rounded-xl my-3 mx-2 border border-[#313F4833]'/>
            </div>
                </li>
                <li>
            <div className='mt-2'>
            <label htmlFor="" className='pl-3 md:pl-7'>Valid Till: </label>
            <input type="Date" name="" placeholder='12/12/12' id="" className='w-full placeholder:text-[#999999] px-3 py-3 shadow-lg rounded-xl my-3 mx-2 border border-[#313F4833]'/>
            </div>
                </li>
             </ul>
             <button onClick={PromoND} className='text-base ml-2 bg-[#E78901] text-white px-10 py-2 rounded-lg mt-8
             '>Save</button>
             </form>
          </div>
        </div>      
    </div>
    )}
    </div>
  )
}

export default AddNewPromo;