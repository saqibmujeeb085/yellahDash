import React, { useState } from 'react';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

import Group from './img/Group.png';
import './style.css';

const Profile = () => {
    const [showHide, setShowHide] = useState(true);

    const handleClick = e => {
        e.preventDefault();

        setShowHide(current => !current);
    }

    return (
        <div className="xl:pl-[19px] lg:pl-[15px] md:pl-[15px] sm:pl-[15px] xsm:pl-[1px] xl:pr-[19px] lg:pr-[19px] md:pr-[19px] sm:pr-[19px] xsm:pr-[1px] pb-[35px] bg-[#FFFDFA] rounded-[40px]">
            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row xsm:flex-col pt-[40px] pb-[20px]">
                <div className="basis-1/4">
                    <Link to="/Dashboard">
                    <h1 className="text-[#000024] xl:text-[45px] lg:text-[38px] md:text-[26px] sm:text-[21px] xsm:text-[20px] font-bold">
                        <KeyboardArrowLeftIcon style={{ fontSize: '60px' }} />
                        Profile
                    </h1>
                    </Link>
                </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-[50px] shadow-[0px_5px_10px_#00000029] mx-[10px] xl:my-[40px] lg:my-[40px] md:my-[40px] sm:my-[40px] xsm:my-[4px] pb-[35px]">
                <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xsm:flex-col">
                    <div className="xl:block lg:block md:block sm:block xsm:block basis-1/4 pt-[59px] xl:pl-[37px] lg:pl-[37px] md:pl-[37px] sm:pl-[37px] xsm:pl-[60px]">
                        <div onClick={handleClick} className="relative bg-[#E78901] rounded-t-[30px] w-[248px] h-[57px] shadow-[0px_3px_6px_#00000029] text-[#FFFFFF] pt-[20px] pl-[20px] cursor-pointer">
                            <div className="flex flex-row">
                                <div className="basis-11/12">
                                    User Information
                                </div>
                                <div className="basis-1/12 pr-[10px]">
                                    <KeyboardArrowDownIcon />
                                </div>
                            </div>
                        </div>
                        {
                            showHide ?
                                <div className="absolute bg-[#FFFFFF] w-[248px] h-[233px] rounded-b-[30px] shadow-[0px_3px_6px_#00000029]">
                                    <div className="flex flex-row">
                                        <div className="basis-11/12">
                                            <p className="text-[#707070] pl-[23px] pt-[29px] text-[15px]"><a href="#">Account</a></p>
                                            <p className="text-[#707070] pl-[23px] pt-[30px] text-[15px]"><a href="#">Change Password</a></p>
                                        </div>
                                        <div className="basis-1/12 pt-[30px]">
                                            <ArrowForwardIosIcon className="text-[#E78901] pr-[10px]" />
                                        </div>
                                    </div>
                                </div>
                                : ""
                        }
                    </div>

                    <div className="basis-1/2">
                        <div className="flex flex-row">
                            <img className="pt-[34px] xl:pl-[70px] lg:pl-[70px] md:pl-[70px] sm:pl-[70px] xsm:pl-[80px]" src={Group} alt="Profile" />
                        </div>
                        <div className="flex flex-row">
                            <div className="basis-1/2 pt-[25px] text-[18px] text-[#242424] font-bold xl:pl-[88px] lg:pl-[88px] md:pl-[88px] sm:pl-[88px] xsm:pl-[30px]">First Name:</div>
                            <div className="basis-1/2 pt-[25px] text-[18px] text-[#666666] font-[500]">abc</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="basis-1/2 pt-[25px] text-[18px] text-[#242424] font-bold xl:pl-[88px] lg:pl-[88px] md:pl-[88px] sm:pl-[88px] xsm:pl-[30px]">Last Name:</div>
                            <div className="basis-1/2 pt-[25px] text-[18px] text-[#666666] font-[500]">xyz</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="basis-1/2 pt-[25px] text-[18px] text-[#242424] font-bold xl:pl-[88px] lg:pl-[88px] md:pl-[88px] sm:pl-[88px] xsm:pl-[30px]">Email:</div>
                            <div className="basis-1/2 pt-[25px] pb-[110px] text-[18px] text-[#666666] font-[500] xl:pl-[88px] lg:pl-[88px] md:pl-[88px] sm:pl-[88px] xsm:pl-[1px]">email@example.com</div>
                        </div>
                    </div>
                    <div className="basis-1/4">
                        <div className="absolute xl:right-[80px] lg:right-[80px] md:right-[80px] sm:right-[280px] xsm:right-[120px] xl:top-[230px] lg:top-[230px] md:top-[230px] sm:top-[720px] xsm:top-[690px]">
                            <button className="w-[150px] h-[45px] bg-[#000024] text-[#FFFFFF] rounded-[10px] shadow-[0px_2px_4px_#50505096]">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;