import React from 'react';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Group from '../img/Group.png';
import { Link } from 'react-router-dom';

const BlockedUserDetails = () => {
    return (
        <div style={{ paddingLeft: '15px', backgroundColor: '#FFFDFA', borderRadius: '40px' }}>
            <div className="flex flex-row" style={{ paddingTop: '60px', paddingBottom: '20px' }}>
                <div className="basis-1/2">
                    <Link to="/Users">
                    <h1 style={{ color: '#000024', fontSize: '40px', fontWeight: 'bold' }}>
                        <KeyboardArrowLeftIcon style={{ fontSize: '60px' }} />
                        Blocked User
                    </h1>
                    </Link>
                </div>
            </div>

            <div style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 5px 10px #00000029',
                borderRadius: '50px',
                margin: '10px'
            }}>
                <div className="flex flex-row">
                    <div className="basis-1/2 pt-[50px] pb-[20px] pl-[50px]">
                        <img
                            src={Group}
                            alt="uploader"
                        />
                    </div>
                    <div className="basis-1/2 fixed right-[60px] top-[190px]">
                        <p style={{ fontWeight: 'bold' }}>Status: <span style={{ color: 'red' }}>Blocked</span></p>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="basis-1/2 pt-[48px]">
                        <div className='flex flex-row pb-[20px]'>
                            <p className="basis-1/2 text-[20px] pl-[106px] font-bold">First Name:</p>
                            <p style={{ color: '#666666' }} className="basis-1/2 text-[20px]">Mark</p>
                        </div>
                        <div className='flex flex-row pb-[20px]'>
                            <p className="basis-1/2 text-[20px] pl-[106px] font-bold">Last Name:</p>
                            <p style={{ color: '#666666' }} className="basis-1/2 text-[20px]">Carson</p>
                        </div>
                        <div className='flex flex-row pb-[20px]'>
                            <p className="basis-1/2 text-[20px] pl-[106px] font-bold">Email:</p>
                            <p style={{ color: '#666666' }} className="basis-1/2 text-[20px]">abc@xyz.com</p>
                        </div>
                        <div className='flex flex-row pb-[20px]'>
                            <p className="basis-1/2 text-[20px] pl-[106px] font-bold">Phone:</p>
                            <p style={{ color: '#666666' }} className="basis-1/2 text-[20px]">abc@xyz.com</p>
                        </div>
                        <div className='flex flex-row pb-[20px]'>
                            <p className="basis-1/2 text-[20px] pl-[106px] font-bold">No. of Trips Taken:</p>
                            <p style={{ color: '#666666' }} className="basis-1/2 text-[20px]">12</p>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <div style={{
                            backgroundColor: '#000024',
                            width: '286px',
                            height: '170px',
                            border: '1px solid #707070',
                            borderRadius: '30px'
                        }} className="flex fixed right-[50px] bottom-[120px]">
                            <div className='basis-3/4'>
                                <p className="pl-[30px] pt-[10px]" style={{ color: '#FFFFFF' }}>Mossy Cash</p>
                                <p className="pl-[30px] text-[35px]" style={{ color: '#FFFFFF' }}>$ 1234</p>
                                <p><a href="#" style={{ color: '#E78901' }} className="underline pl-[30px] text-[20px]">View Wallet Details</a></p>
                            </div>
                            <div className='basis-1/4'>
                                <AccountBalanceWalletIcon className='fixed right-[70px] bottom-[210px]' style={{ fontSize: '60px',color: '#FFFFFF' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default BlockedUserDetails;