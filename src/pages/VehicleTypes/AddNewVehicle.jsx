import React from 'react';

import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import Group from '../img/Group.png';

const AddNewVehicle = () => {
    return (
        <div className="xl:pl-[19px] lg:pl-[15px] md:pl-[15px] sm:pl-[15px] xsm:pl-[1px] xl:pr-[19px] lg:pr-[19px] md:pr-[19px] sm:pr-[19px] xsm:pr-[1px] pb-[43px] bg-[#FFFDFA] rounded-[40px]">
            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row xsm:flex-col pt-[40px] pb-[20px]">
                <div className="basis-1/2">
                    <h1 className="text-[#000024] xl:text-[50px] lg:text-[38px] md:text-[26px] sm:text-[21px] xsm:text-[20px] xl:pl-[10px] lg:pl-[10px] md:pl-[10px] sm:pl-[10px] font-bold xsm:pl-[10px]">
                        <KeyboardArrowLeftIcon style={{ fontSize: '60px' }} />
                        Add New Vehicle Type
                    </h1>
                </div>
            </div>

            <div className="bg-[#FFFFFF] shadow-[0px_5px_10px_#00000029] rounded-[50px] m-[10px] pb-[55px]">
                <div className="flex flex-row xl:pt-[97px] lg:pt-[90px] md:pt-[70px] sm:pt-[50px] xsm:pt-[40px] xl:pl-[101px] lg:pl-[90px] md:pl-[70px] sm:pl-[50px] xsm:pl-[30px] font-bold text-[40px]">
                    <h1>Add Image</h1>
                </div>
                {/*  pt-[50px] pb-[20px] pl-[342px] */}
                <div className="flex xl:flex-row lg:flex-col md:flex-col sm:flex-col xsm:flex-col xl:shrink-0 lg:shrink-0 md:shrink-0 sm:shrink-0">
                    <div className="basis-1/2 pt-[50px] pb-[20px] xl:pl-[400px] lg:pl-[300px] md:pl-[200px] sm:pl-[100px] xsm:pl-[70px]">
                        <img
                            src={Group}
                            alt="uploader"
                        />
                        <CloseOutlinedIcon
                            className="relative bottom-[180px] left-[190px]"
                            style={{ width: '31px', height: '31px' }}
                        />
                    </div>
                    {/*   */}
                    <div className="basis-1/2 xl:pl-[1px] lg:pl-[300px] md:pl-[200px] sm:pl-[100px] xsm:pl-[60px] xl:pt-[200px] lg:pt-[10px] md:pt-[20px] sm:pt-[5px] xsm:pt-[1px] pb-[47px]">
                        <input accept="image/*" id="icon-button-file" type="file" style={{ display: 'none' }} />
                        <label htmlFor="icon-button-file">
                            <IconButton aria-label="upload picture" component="span">
                                <FileUploadOutlinedIcon style={{ color: '#E78901', width: '27px', height: '27px' }} />
                            </IconButton>
                        </label>
                        <span className="text-[#999999]">JPG, PNG (max size 3 MB)</span>
                    </div>
                </div>

                {/* Details */}
                <div className="flex flex-row xl:pl-[101px] lg:pl-[101px] md:pl-[101px] sm:pl-[101px] xsm:pl-[30px]">
                    <h1 className="xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[35px] xsm:text-[30px] font-bold">Add Details</h1>
                </div>
                <div className="flex xl:flex-row lg:flex-col md:flex-col sm:flex-col xsm:flex-col">
                    <div className='basis-1/2'>
                        <div className="flex flex-col xl:pl-[101px] lg:pl-[101px] md:pl-[101px] sm:pl-[101px] xsm:pl-[30px] pt-[31px]">
                            <span className="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-[16px] pl-[40px]">
                                Name
                            </span>
                            <div className="input-div">
                                <input
                                    type="text"
                                    placeholder='Enter Name'
                                    className="pl-[40px] border-[1px] border-[#707070] rounded-[20px] opacity-40 xl:w-[507px] lg:w-[507px] md:w-[507px] sm:w-[407px] xsm:w-[310px] h-[61px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2'>
                        <div className="flex flex-col xl:pl-[21px] lg:pl-[101px] md:pl-[101px] sm:pl-[101px] xsm:pl-[30px] pt-[31px]">
                            <span className="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-[16px] pl-[40px]">
                                Facilities
                            </span>
                            <div className="input-div">
                                <input
                                    type="text"
                                    placeholder='.....'
                                    className="pl-[40px] border-[1px] border-[#707070] rounded-[20px] opacity-40 xl:w-[507px] lg:w-[507px] md:w-[507px] sm:w-[407px] xsm:w-[310px] h-[61px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className='basis-1/2'>
                        <div className="flex flex-col xl:pl-[101px] lg:pl-[101px] md:pl-[101px] sm:pl-[101px] xsm:pl-[30px] pt-[31px]">
                            <span className="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-[16px] pl-[40px]">
                                Rate ($)
                            </span>
                            <div className="input-div">
                                <input
                                    type="text"
                                    placeholder='.....'
                                    className="pl-[40px] border-[1px] border-[#707070] rounded-[20px] opacity-40 xl:w-[507px] lg:w-[507px] md:w-[507px] sm:w-[407px] xsm:w-[310px] h-[61px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row xl:pl-[101px] lg:pl-[101px] md:pl-[101px] sm:pl-[101px] xsm:pl-[110px] pt-[32px]">
                    <button className="bg-[#000024] text-white w-[150px] h-[45px] text-[16px] shadow-[0px_2px_4px_#50505096] rounded-[10px]">Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewVehicle;