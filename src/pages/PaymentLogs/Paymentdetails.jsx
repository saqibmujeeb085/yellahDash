import React from 'react';
import { Link } from 'react-router-dom';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Rating from '@mui/material/Rating';

import Group from '../img/Group.png';

const PaymentDetails = () => {
    return (
        <div className="xl:pl-[19px] lg:pl-[15px] md:pl-[15px] sm:pl-[15px] xsm:pl-[1px] xl:pr-[19px] lg:pr-[19px] md:pr-[19px] sm:pr-[19px] xsm:pr-[1px] pb-[35px] bg-[#FFFDFA] rounded-[40px]">
            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row xsm:flex-col pt-[40px] pb-[20px]">
                <div className="basis-1/2">
                    <Link to="/PaymentLog">
                    <h1 className="text-[#000024] xl:text-[45px] lg:text-[38px] md:text-[26px] sm:text-[21px] xsm:text-[20px] xl:pl-[10px] lg:pl-[10px] md:pl-[10px] sm:pl-[10px] xsm:pl-[5px] font-bold">
                        <KeyboardArrowLeftIcon style={{ fontSize: '60px' }} />
                        Payment Detail
                    </h1>
                    </Link>
                </div>
                <div className="basis-1/2 absolute xl:right-[100px] xl:top-[95px] lg:right-[100px] lg:top-[95px] md:right-[100px] md:top-[95px] sm:right-[100px] sm:top-[95px] xsm:right-[30px] xsm:top-[57px]">
                    <p className="font-[500]">Status: <span className="text-[#E78901]">Paid</span></p>
                </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-[50px] shadow-[0px_5px_10px_#00000029] mx-[10px] my-[40px] pb-[35px]">
                <div className="flex xl:flex-row lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse xsm:flex-col-reverse">
                    <div className="basis-1/2">
                        <div className="bg-[#FFFFFF] shadow-[0px_5px_10px_#00000029] rounded-[50px] xl:ml-[40px] lg:ml-[40px] md:ml-[40px] sm:ml-[40px] xsm:ml-[10px] mr-[10px] my-[40px] pb-[12px]">
                            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xsm:flex-col pl-[50px]">
                                <div className="xl:basis-3/12 lg:basis-4/12 md:basis-4/12">
                                    <img
                                        className="pt-[30px]"
                                        src={Group}
                                        alt="uploader"
                                    />
                                </div>
                                <div className="basis-3/4">
                                    <h1
                                        className="pt-[50px] xl:text-[60px] lg:text-[60px] md:text-[60px] sm:text-[50px] xsm:text-[40px] xl:pl-[21px] lg:pl-[21px] md:pl-[21px] sm:pl-[21px] xsm:pl-[1px]"
                                    >User Name</h1>
                                    <Rating
                                        className="xl:pl-[21px] lg:pl-[21px] md:pl-[21px] sm:pl-[21px] xsm:pl-[1px]"
                                        color='#FFCE2D'
                                        size="large"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[40px]"><h1 className="text-[#242424] text-[40px] pt-[10px]">Trip Details :</h1></div>

                            <div className='flex flex-row xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[46px]'>
                                <div className="basis-1/2"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#242424] font-[500] pt-[30px]">Total Amount:</p></div>
                                <div className="basis-1/2"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#242424] font-[500] pt-[30px]">Total Commission:</p></div>
                            </div>
                            <div className='flex flex-row xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[46px]'>
                                <div className="basis-1/2"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#666666] pt-[15px]">$ 1234</p></div>
                                <div className="basis-1/2"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#666666] pt-[15px]">$ 123</p></div>
                            </div>

                            <div className='flex flex-row xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[46px]'>
                                <div className="basis-1/2"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#242424] font-[500] pt-[25px]">Driver's Share:</p></div>
                                <div className="basis-1/2"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#242424] font-[500] pt-[25px]">Payment Method:</p></div>
                            </div>
                            <div className='flex flex-row xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[46px]'>
                                <div className="basis-1/2"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#666666] pt-[15px]">$123</p></div>
                                <div className="basis-1/2"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#666666] pt-[15px]">Card</p></div>
                            </div>

                            <div className="flex flex-row xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[46px]"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#242424] font-[500] pt-[21px]">Transaction ID :</p></div>
                            <div className="flex flex-row xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[46px]"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#666666] pt-[18px]">ch_1Eg3mXLFMNZXO4dgwef</p></div>

                            <div className="flex flex-row xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[46px]">
                                <div className="basis-1/2"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#242424] font-[500] pt-[15px]">Paid to :</p></div>
                                <div className="basis-1/2"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#242424] font-[500] pt-[15px]">Date :</p></div>
                            </div>
                            <div className="flex flex-row xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[46px]">
                                <div className="basis-1/2"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#666666] pt-[15px]">Driver Name</p></div>
                                <div className="basis-1/2"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#666666] pt-[15px]">05/13/2020</p></div>
                            </div>

                            <div className="flex flex-row xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[46px]"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] text-[#242424] font-[500] pt-[21px]">Time:</p></div>
                            <div className="flex flex-row xl:pl-[63px] lg:pl-[63px] md:pl-[63px] sm:pl-[63px] xsm:pl-[46px]"><p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[15px] pb-[70px] text-[#666666] pt-[15px]">13:00</p></div>
                        </div>
                    </div>

                    <div className="basis-1/2">
                        <div className="bg-[#FFFFFF] shadow-[0px_5px_10px_#00000029] rounded-[50px] m-[40px]">
                            <iframe
                                title='Google Map'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                                width="100%"
                                frameBorder="0"
                                className="border rounded-[50px] shadow-[0px_5px_10px_#00000029] m-auto 2xl:h-[810px] xl:h-[790px] lg:h-[800px] md:h-[790px] sm:h-[790px] xsm:h-[390px]"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails;