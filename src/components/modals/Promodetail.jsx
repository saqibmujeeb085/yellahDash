import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';

const Promodetail = () => {
  
  const [promo, setPromo] = useState(true);
  
  const PromoD = () => {
    setPromo(false);
}




  return (
    <div>
    {promo && (
    <div className='fixed flex justify-center items-center inset-0  backdrop-blur-sm bg-black/5 z-40' onClick={PromoD}>
        <div className='bg-white w-1/2 px-8 py-12 relative shadow rounded-xl flex flex-col items-center justify-center'>
        <CloseIcon onClick={PromoD} className="absolute m-2 right-0 p-2 top-0 text-black z-50 cursor-pointer" style={{fontSize: "40px"}}/>
          <h3 className='text-[30px] md:text-[50px] font-bold mx-2 text-center'>Promo Detail</h3>
          <div className='mt-5'>
             <ul className='grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-10'>
                <li>
                    <h3 className='text-[18px] text-black'>Promo Name:</h3>
                    <p className='text-[18px] text-[#666666] mt-2'>ACV</p>
                </li>
                <li>
                    <h3 className='text-[18px] text-black'>Promo Code:</h3>
                    <p className='text-[18px] text-[#666666] mt-2'>qwead</p>
                </li>
                <li>
                    <h3 className='text-[18px] text-black'>Add On:</h3>
                    <p className='text-[18px] text-[#666666] mt-2'>02/02/2022</p>
                </li>
                <li>
                    <h3 className='text-[18px] text-black'>Discount:</h3>
                    <p className='text-[18px] text-[#666666] mt-2'>$5</p>
                </li>
                <li>
                    <h3 className='text-[18px] text-black'>Date:</h3>
                    <p className='text-[18px] text-[#666666] mt-2'>05/13/2022</p>
                </li>
                <li>
                    <h3 className='text-[18px] text-black'>Availed:</h3>
                    <p className='text-[18px] text-[#666666] mt-2'>300</p>
                </li>
                <li>
                    <h3 className='text-[18px] text-black'>Valid Till:</h3>
                    <p className='text-[18px] text-[#666666] mt-2'>02/02/2022</p>
                </li>
                <li>
                    <h3 className='text-[18px] text-black'>Status:</h3>
                    <p className='text-[18px] text-baseFont mt-2'>Active</p>
                </li>
             </ul>
          </div>
        </div>      
    </div>
    )}
    </div>
  )
}

export default Promodetail;