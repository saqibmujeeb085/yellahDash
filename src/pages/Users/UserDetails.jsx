import React from 'react';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Group from '../img/Group.png';

const UserDetails = () => {
    return (
        <div className="xl:pl-[19px] lg:pl-[15px] md:pl-[15px] sm:pl-[15px] xsm:pl-[1px] xl:pr-[19px] lg:pr-[19px] md:pr-[19px] sm:pr-[19px] xsm:pr-[1px] pb-[43px] bg-[#FFFDFA] rounded-[40px]">
            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row xsm:flex-col pt-[40px] pb-[20px]">
                <div className="basis-1/2">
                    <h1 className="text-[#000024] xl:text-[45px] lg:text-[38px] md:text-[26px] sm:text-[21px] xsm:text-[20px] xl:pl-[10px] lg:pl-[10px] md:pl-[10px] sm:pl-[10px] font-bold xsm:pl-[10px]">
                        <KeyboardArrowLeftIcon style={{ fontSize: '60px' }} />
                        Blocked User
                    </h1>
                </div>
            </div>

            <div className="bg-[#FFFFFF] shadow-[0px_5px_10px_#00000029] rounded-[50px] m-[10px] pb-[40px]">
                <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row xsm:flex-col-reverse">
                    <div className="basis-1/2 pt-[50px] pb-[20px] xl:pl-[50px] lg:pl-[50px] md:pl-[50px] sm:pl-[60px] xsm:pl-[90px]">
                        <img
                            src={Group}
                            alt="uploader"
                        />
                    </div>
                    <div className="basis-1/2 flex justify-end xl:pr-[37px] lg:pr-[37px] md:pr-[37px] sm:pr-[37px] xsm:pr-[67px] pt-[51px]">
                        <p>
                            <span className="font-bold pr-[10px]">Status:</span>
                            <select
                                className="w-[160px] h-[50px] bg-[#FFFFFF] shadow-[0px_3px_10px_#313F4833] rounded-[10px] text-[#999999] pl-[10px] border-none"
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                {/* style={{
                                    width: "160px",
                                    height: "50px",
                                    backgroundColor: '#FFFFFF',
                                    boxShadow: '0px 3px 10px #313F4833',
                                    borderRadius: '10px',
                                    border: 'none'
                                }} */}
                            </select>
                        </p>
                    </div>
                </div>

                <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xsm:flex-col">
                    <div className="2xl:basis-6/12 xl:basis-8/12 lg:basis-8/12 pt-[48px]">
                        <div className='flex flex-row pb-[20px] xl:pl-[106px] lg:pl-[106px] md:pl-[106px] sm:pl-[106px] xsm:pl-[16px]'>
                            <p className="basis-1/2 text-[20px] font-bold">First Name:</p>
                            <p className="basis-1/2 text-[20px] text-[#666666]">Mark</p>
                        </div>
                        <div className='flex flex-row pb-[20px] xl:pl-[106px] lg:pl-[106px] md:pl-[106px] sm:pl-[106px] xsm:pl-[16px]'>
                            <p className="basis-1/2 text-[20px] font-bold">Last Name:</p>
                            <p className="basis-1/2 text-[20px] text-[#666666]">Carson</p>
                        </div>
                        <div className='flex flex-row pb-[20px] xl:pl-[106px] lg:pl-[106px] md:pl-[106px] sm:pl-[106px] xsm:pl-[16px]'>
                            <p className="basis-1/2 text-[20px] font-bold">Email:</p>
                            <p className="basis-1/2 text-[20px] text-[#666666]">abc@xyz.com</p>
                        </div>
                        <div className='flex flex-row pb-[20px] xl:pl-[106px] lg:pl-[106px] md:pl-[106px] sm:pl-[106px] xsm:pl-[16px]'>
                            <p className="basis-1/2 text-[20px] font-bold">Phone:</p>
                            <p className="basis-1/2 text-[20px] text-[#666666]">abc@xyz.com</p>
                        </div>
                        <div className='flex flex-row pb-[20px] xl:pl-[106px] lg:pl-[106px] md:pl-[106px] sm:pl-[106px] xsm:pl-[16px]'>
                            <p className="basis-1/2 text-[20px] font-bold">No. of Trips Taken:</p>
                            <p className="basis-1/2 text-[20px] text-[#666666]">12</p>
                        </div>
                    </div>
                    <div className="basis-6/12 2xl:pl-[440px] xl:pl-[250px] lg:pl-[180px] md:pl-[110px] sm:pl-[110px] xsm:pl-[50px] 2xl:pt-[90px] xl:pt-[90px] lg:pt-[70px]">
                        <div className="bg-[#000024] w-[286px] h-[170px] border-1 border-solid border-[#707070] rounded-[30px]">
                            <div className="flex flex-row">
                                <div className='basis-3/4'>
                                    <p className="text-[#FFFFFF] pl-[30px] pt-[10px]">Mossy Cash</p>
                                    <p className=" text-[#FFFFFF] pl-[30px] text-[35px]">$ 1234</p>
                                    <p><a href="#" className="underline pl-[30px] text-[20px] text-[#E78901]">View Wallet Details</a></p>
                                </div>
                                <div className='basis-1/4 pt-[10px]'>
                                    <AccountBalanceWalletIcon style={{ fontSize: '60px', color: '#FFFFFF' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;