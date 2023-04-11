import React from 'react';

import Group from '../img/Group.png';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Input from '@material-ui/core/Input';

const EditVehicleType = () => {
    return (
        <div className="xl:pl-[19px] lg:pl-[15px] md:pl-[15px] sm:pl-[15px] xsm:pl-[1px] xl:pr-[19px] lg:pr-[19px] md:pr-[19px] sm:pr-[19px] xsm:pr-[1px] pb-[43px] bg-[#FFFDFA] rounded-[40px]">
            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row xsm:flex-col pt-[40px] pb-[20px]">
                <div className="basis-1/2">
                    <h1 className="text-[#000024] xl:text-[60px] lg:text-[40px] md:text-[30px] sm:text-[25px] xsm:text-[20px] xl:pl-[10px] lg:pl-[10px] md:pl-[10px] sm:pl-[10px] font-bold xsm:pl-[60px]">
                        <KeyboardArrowLeftIcon style={{ fontSize: '60px' }} />
                        Edit Vehicle Types
                    </h1>
                </div>
                <div className="basis-1/2 flex justify-end mr-4 xl:mt-5 lg:mt-3 md:mt-1.5 sm:mt-[8px] xl:pr-8 lg:pr-8 md:pr-8 sm:pr-8 xsm:pr-[90px]">
                    <button className="bg-[#020225] h-[45px] w-[168px] text-white shadow-[0px_2px_4px_#50505096] rounded-[10px]">Add New Type</button>
                </div>
            </div>

            <div className="bg-[#FFFFFF] shadow-[0px_5px_10px_#00000029] rounded-[50px] m-[10px] pb-[84px]">
                <div className="flex justify-center xl:pt-[129px] lg:pt-[129px] md:pt-[129px] sm:pt-[129px] xsm:pt-[40px] xl:pl-[1px] lg:pl-[1px] md:pl-[1px] sm:pl-[1px] xsm:pl-[70px] pb-[20px]">
                    <img
                        src={Group}
                        alt="uploader"
                    />
                    <div
                        className="relative top-[130px] right-[50px] shadow-[0px_3px_6px_#00000029] rounded-[50%] h-[40px] w-[40px] bg-[#FFFFFF]"
                    >
                        <input accept="image/*" id="icon-button-file" type="file" style={{ display: 'none' }} />
                        <label htmlFor="icon-button-file">
                            <IconButton aria-label="upload picture" component="span">
                                {/* className="relative xl:left-[8px] lg:left-[7px] md:left-[8px] sm:left-[9px] xsm:left-[9px] xl:right-[82px] lg:right-[20px] md:right-[20px] sm:right-[20px] xsm:right-[20px]" style={{ wdth: '40px', height: '40px' }} */}
                                <CameraAltOutlinedIcon style={{ color: '#3A775A' }} />
                            </IconButton>
                        </label>
                    </div>
                </div>

                <div className="flex flex-row xl:pl-[101px] lg:pl-[101px] md:pl-[101px] sm:pl-[101px] xsm:pl-[40px]">
                    <h1 className="text-[60px] font-bold">Details</h1>
                </div>
                <div className="flex xl:flex-row lg:flex-col md:flex-col sm:flex-col xsm:flex-col">
                    <div className='basis-1/2'>
                        <div className="flex flex-col xl:pl-[101px] lg:pl-[101px] md:pl-[101px] sm:pl-[101px] xsm:pl-[40px] pt-[31px]">
                            <span className="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-[16px] pl-[40px]">
                                Name
                            </span>
                            <div>
                                <Input
                                    type="text"
                                    placeholder='Business'
                                    className="border-2 border-solid border-[#666666] rounded-[20px] pl-[40px] opacity-40 xl:w-[507px] h-[61px] lg:w-[470px] md:w-[420px] sm:w-[380px] xsm:w-[280px] focus-within:border-[#E78901]"
                                    disableUnderline={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2'>
                        <div className="flex flex-col xl:pl-[101px] lg:pl-[101px] md:pl-[101px] sm:pl-[101px] xsm:pl-[40px] pt-[31px]">
                            <span className="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-[16px] pl-[40px]">
                                Facilities
                            </span>
                            <div className="input-div">
                                <Input
                                    type="text"
                                    placeholder='AC, Luxury Vehicle'
                                    className="border-2 border-solid border-[#666666] rounded-[20px] pl-[40px] opacity-40 xl:w-[507px] h-[61px] lg:w-[470px] md:w-[420px] sm:w-[380px] xsm:w-[280px] focus-within:border-[#E78901]"
                                    disableUnderline={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className='basis-1/2'>
                        <div className="flex flex-col xl:pl-[101px] lg:pl-[101px] md:pl-[101px] sm:pl-[101px] xsm:pl-[40px] pt-[31px]">
                            <span className="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-[16px] pl-[40px]">
                                Rate ($)
                            </span>
                            <div className="input-div">
                                <Input
                                    type="text"
                                    placeholder='40'
                                    className="border-2 border-solid border-[#666666] rounded-[20px] pl-[40px] opacity-40 xl:w-[507px] lg:w-[470px] md:w-[420px] sm:w-[380px] xsm:w-[280px] h-[61px] focus-within:border-[#E78901]"
                                    disableUnderline={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row pl-[101px] pt-[32px]">
                    <button className="bg-[#000024] text-white w-[150px] h-[45px] text-[16px] shadow-[0px_2px_4px_#50505096] rounded-[10px]">Save</button>
                </div>
            </div>
        </div>
    )
}

export default EditVehicleType;