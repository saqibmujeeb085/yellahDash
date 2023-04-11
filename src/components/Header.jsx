import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import useStateContext from '../contexts/contextProvider'

const Header = () => {
    
    const { activeMenu, setActiveMenu, setMobileMenu } = useStateContext();
    const ActivateMenu = () =>{
        setActiveMenu (!activeMenu)
        setMobileMenu(true)
    }

    // const handleCloseSideBar = () => {
    //     if (activeMenu !== undefined && screenSize <= 1024) {
    //       setActiveMenu(false);
    //     }
    //   };
    const [plopen, setplopen] = useState(false)
    const profileLinks = () => {
        setplopen (!plopen)
    }
  return (
    <div className='flex justify-between items-center px-8 lg:pr-24 py-4 shadow-Header rounded-b-3xl'>
        <div className='flex justify-center items-center gap-16'>
            <div className='hidden lg:block'>
                <Link to="/" >
                <img src="logo.png" alt="logo"/>
                </Link>
            </div>
            <div>
                <MenuIcon onClick={ActivateMenu} className="mr-4 cursor-pointer" fontSize="large"/>
                <a href="#" className=''>
                    <StorefrontIcon fontSize="large"/>
                    <span className='text-base text-gray-400 pl-1'>Visit Store</span>
                </a>
            </div>     
        </div>
        <div className='flex justify-center items-center gap-4'>
                <div>
                <NotificationsOutlinedIcon style={{color:"#E78901", fontSize:"26px"}}/>
                </div>
                <div>
                    <div onClick={profileLinks} className='hidden lg:flex justify-center items-center gap-2 cursor-pointer'>
                        <AccountCircleIcon style={{color:"#00000029", fontSize:"42px"}} />
                        <div className='relative '>
                            <span className='font-bold text-lg text-black-900'>Hi, Joushua</span>
                            <KeyboardArrowDownIcon />
                            {plopen && (
                            <div className='absolute -bottom-32 -right-16 bg-white rounded-2xl shadow-md w-40 h-28 flex justify-center items-center'>
                             <ul>
                                <li>
                                    <Link to="/Profile" className='flex justify-start items-center gap-1 p-1 my-1' ><PersonOutlineOutlinedIcon style={{color:"#E78901", fontSize:"22px"}}/><span className='text-sm text-gray-400'>Profile</span></Link>
                                </li>
                                <li>
                                    <a href="/" className='flex justify-start items-center gap-1 p-1 my-1' ><LogoutOutlinedIcon style={{color:"#E78901", fontSize:"22px"}}/><span className='text-sm text-gray-400'>Logout</span></a>
                                </li>
                             </ul>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Header;