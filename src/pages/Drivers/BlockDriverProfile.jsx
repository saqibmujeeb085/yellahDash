import React from 'react';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import DashboardRating from './Rating';
import Rating from 'react-rating';

import Group from '../img/Group.png';

const BlockDriverProfile = () => {
    return (
        <div style={{ paddingLeft: '15px', backgroundColor: '#FFFDFA', borderRadius: '40px' }}>
            <div className="flex flex-row" style={{ paddingTop: '60px', paddingBottom: '20px' }}>
                <div className="basis-1/2">
                    <h1 style={{ color: '#000024', fontSize: '40px', fontWeight: 'bold' }}>
                        <KeyboardArrowLeftIcon style={{ fontSize: '60px' }} />
                        Blocked Drivers
                    </h1>
                </div>
            </div>

            <div style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 5px 10px #00000029',
                borderRadius: '50px',
                margin: '10px'
            }}>
                <div className="flex flex-row">
                    <div className="basis-1/4 pt-[50px] pb-[20px] pl-[80px]">
                        <img
                            src={Group}
                            alt="uploader"
                        />
                    </div>
                    <div className="basis-1/2">
                        <h1
                            className="pt-[30px]"
                            style={{
                                fontSize: '70px'
                            }}>Driver Name</h1>
                        <Rating
                            style={{ color: '#FFCE2D' }}
                            emptySymbol={<StarBorderIcon />}
                            fullSymbol={<StarIcon />}
                        />
                        <p style={{ color: '#242424', fontSize: '22px', fontWeight: '500' }}>+44 123 456678</p>
                        <p style={{ color: '#242424', fontSize: '22px', fontWeight: '500' }}>email@email.com</p>
                    </div>
                    <div className="basis-1/4">
                        <div className="basis-1/2 absolute right-[70px] top-[210px]">
                            <p style={{ fontWeight: 'bold' }}>Status: <span style={{ color: '#F5152C' }}>Blocked</span></p>
                        </div>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0px 5px 10px #00000029',
                    borderRadius: '50px',
                    margin: '40px'
                }}>
                    <div className="flex flex-row">
                        <div className="basis-1/2 pt-[48px]">
                            <div className='flex flex-row pb-[20px]'>
                                <p className="basis-1/2 text-[20px] pl-[106px] font-bold" style={{ color: '#242424' }}>Total Earning :</p>
                                <p style={{ color: '#666666' }} className="basis-1/2 text-[20px] pl-[30px]">$ 11,111</p>
                            </div>
                            <div className='flex flex-row pb-[20px]'>
                                <p className="basis-1/2 text-[20px] pl-[106px] font-bold" style={{ color: '#242424' }}>No. of Trips:</p>
                                <p style={{ color: '#666666' }} className="basis-1/2 text-[20px] pl-[30px]">45</p>
                            </div>
                            <div className='flex flex-row pb-[20px]'>
                                <p className="basis-1/2 text-[20px] pl-[106px] font-bold" style={{ color: '#242424' }}>Vehicle Type :</p>
                                <p style={{ color: '#666666' }} className="basis-1/2 text-[20px] pl-[30px]">Mini</p>
                            </div>
                            <div className='flex flex-row pb-[20px]'>
                                <p className="basis-1/2 text-[20px] pl-[106px] font-bold" style={{ color: '#242424' }}>Brand Name :</p>
                                <p style={{ color: '#666666' }} className="basis-1/2 text-[20px] pl-[30px]">abc</p>
                            </div>
                            <div className='flex flex-row pb-[20px]'>
                                <p className="basis-1/2 text-[20px] pl-[106px] font-bold" style={{ color: '#242424' }}>Vehicle Name :</p>
                                <p style={{ color: '#666666' }} className="basis-1/2 text-[20px] pl-[30px]">abc</p>
                            </div>
                            <div className='flex flex-row pb-[20px]'>
                                <p className="basis-1/2 text-[20px] pl-[106px] font-bold" style={{ color: '#242424' }}>License plate Number :</p>
                                <p style={{ color: '#666666' }} className="basis-1/2 text-[20px] pl-[30px]">134544 534 2</p>
                            </div>
                            <div className='flex flex-row pb-[20px]'>
                                <p className="basis-1/2 text-[20px] pl-[106px] font-bold" style={{ color: '#242424' }}>Vehicle Color :</p>
                                <p style={{ color: '#666666' }} className="basis-1/2 text-[20px] pl-[30px]">Black</p>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <br />
            </div>
            <br />
        </div>
    )
}

export default BlockDriverProfile;