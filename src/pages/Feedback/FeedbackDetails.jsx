import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const FeedbackDetails = () => {
    return (
        <div className="xl:pl-[19px] lg:pl-[15px] md:pl-[15px] sm:pl-[15px] xsm:pl-[1px] xl:pr-[19px] lg:pr-[19px] md:pr-[19px] sm:pr-[19px] xsm:pr-[1px] pb-[35px] bg-[#FFFDFA] rounded-[40px]">
            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row xsm:flex-col pt-[40px] pb-[20px]">
                <div className="basis-1/2">
                   <Link to="/Feedback">
                    <h1 className="text-[#000024] xl:text-[45px] lg:text-[38px] md:text-[26px] sm:text-[21px] xsm:text-[20px] xl:pl-[10px] lg:pl-[10px] md:pl-[10px] sm:pl-[10px] xsm:pl-[5px] font-bold">
                        <KeyboardArrowLeftIcon style={{ fontSize: '60px' }} />
                        Feedback Details
                    </h1>
                    </Link>
                </div>
            </div>

            <div className="bg-[#FFFFFF] shadow-[0px_5px_10px_#00000029] rounded-[50px] m-[20px]">
                <div className='flex flex-row'>
                    <div className="xl:basis-4/12 lg:basis-3/12 md:basis-3/12 xl:pl-[104px] lg:pl-[104px] md:pl-[104px] sm:pl-[63px] xsm:pl-[30px]"><p className="text-[18px] text-[#242424] font-[500] pt-[58px]">Name:</p></div>
                    <div className="xl:basis-8/12 lg:basis-9/12 md:basis-9/12 xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[30px]"><p className="text-[18px] text-[#666666] pt-[58px]">Abc</p></div>
                </div>
                <div className='flex flex-row'>
                    <div className="xl:basis-4/12 lg:basis-3/12 md:basis-3/12 xl:pl-[104px] lg:pl-[104px] md:pl-[104px] sm:pl-[63px] xsm:pl-[30px]"><p className="text-[18px] text-[#242424] font-[500] pt-[21px]">Email:</p></div>
                    <div className="xl:basis-8/12 lg:basis-9/12 md:basis-9/12 xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[30px]"><p className="text-[18px] text-[#666666] pt-[21px]">abc@xyz.com</p></div>
                </div>
                <div className='flex flex-row'>
                    <div className="xl:basis-4/12 lg:basis-3/12 md:basis-3/12 xl:pl-[104px] lg:pl-[104px] md:pl-[104px] sm:pl-[63px] xsm:pl-[30px]"><p className="text-[18px] text-[#242424] font-[500] pt-[21px]">User ID:</p></div>
                    <div className="xl:basis-8/12 lg:basis-9/12 md:basis-9/12 xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[30px]"><p className="text-[18px] text-[#666666] pt-[21px]">001</p></div>
                </div>
                <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xsm:flex-col'>
                    <div className="xl:basis-4/12 lg:basis-3/12 md:basis-3/12 xl:pl-[104px] lg:pl-[104px] md:pl-[104px] sm:pl-[63px] xsm:pl-[30px]"><p className="text-[18px] text-[#242424] font-[500] pt-[21px]">Message:</p></div>
                    <div className="xl:basis-4/12 lg:basis-5/12 md:basis-5/12 xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[30px] pr-[20px]">
                        {/*  xl:text-left lg:text-left md:text-left sm:text-left xsm:text-center */}
                        <p className="text-[18px] text-[#666666] pt-[21px] pb-[78px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    {/* md:basis-1/12 */}
                    <div className="basis-4/12"></div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackDetails;