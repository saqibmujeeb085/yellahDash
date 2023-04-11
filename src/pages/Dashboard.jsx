import React from 'react';

import Cash from './img/cash.png';
import Meter from './img/meter.png';
import User from './img/user.png';
import Users from './img/users.png';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './style.css';

const Dashboard = () => {
    const items = [
        {
            image: Cash,
            heading: "Total Revenue",
            number: "£30,345,678"
        },
        {
            image: Meter,
            heading: "Total Drivers",
            number: "330"
        },
        {
            image: User,
            heading: "Total Bookings",
            number: "298"
        },
        {
            image: Users,
            heading: "Total Users",
            number: "400"
        }
    ]

    return (
        <div className="pl-[15px] bg-[#FFFDFA] rounded-[40px]">
            <div className="text-[80px] text-[#020225] pb-[20px] pt-[32px]">Dashboard</div>
            <div className="flex flex-row">
                {
                    items && items.map((item, index) => {
                        return (
                            <div key={index} className="basis-1/2 flex-div shadow-[0px_0px_15px_#0000001C] hover:bg-[#000024]">
                                <h1>{item.heading}</h1>
                                {/*   */}
                                <div className="flex flex-row pl-[22px]">
                                    <h2 className="basis-3/4 text-black text-[40px]">{item.number}</h2>
                                    <img
                                        src={item.image}
                                        alt="Dashboard"
                                        className="basis-1/4 h-[50px] w-[55px] pr-[20px]"
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-row pt-[80px]">
                <div className="basis-1/2">
                    <h1 className="text-[#000024] text-[60px]">Revenue Analytics</h1>
                </div>
                <div className="basis-1/2 flex justify-end mr-4">
                    <Input
                        type="text"
                        placeholder='Year'
                        disableUnderline={true}
                        className="w-[273px] pl-[20px] h-[57px] shadow-[0px_6px_10px_#0000000F] rounded-[20px]"
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton>
                                    <KeyboardArrowDownIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </div>
            </div>
            <div className="bg-[#FFFFFF] shadow-[0px_6px_10px_#00000029] rounded-[50px] p-[50px] mb-[20px]">
                
            </div>
        </div>
    )
}

export default Dashboard;