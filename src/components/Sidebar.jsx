import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import pagelinks from './../data/pageLinks';
import useStateContext from './../contexts/contextProvider'
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';




const Sidebar = () => {
  const { activeMenu, setActiveMenu, mobileMenu, setMobileMenu, screenSize, setScreenSize } = useStateContext();
  const ActivateMenu = () =>{
      setActiveMenu (!activeMenu)
  }
  const Mobile = () =>{
    setMobileMenu (false)
}
  useEffect(() => {
    const handleResize =() => setScreenSize
    (window.innerWidth);

    window.addEventListener('resize', handleResize)

    handleResize();
  
    return () => window.removeEventListener
    ('resize', handleResize);
  }, [])
  useEffect(() => {
    if (screenSize <= 1024){
      setMobileMenu(false)
    }else{
      setMobileMenu(true)
    }
  }, [screenSize]);
  
  
  
  const Active = 'z-20 rounded-xl [&>div]:w-48 [&>div]:bg-hoverbg [&>div>p]:text-black [&>div]:text-baseFont [&>div>p]:text-white [&>div]:flex [&>div]:justify-start [&>div]:item-center [&>div]:gap-2 w-full [&>div>p]:w-full [&>div>p]:border-r-4 [&>div>p]:border-baseFont'
  const Normal = 'z-20 rounded-xl [&>div]:w-48 [&>div>p]:text-black [&>div]:text-baseFont [&>div]:flex [&>div]:justify-start [&>div]:item-center [&>div]:gap-2 [&>div>p]:border-r-4 [&>div>p]:w-full [&>div>p]:border-transparent [&>div>p]:hover:border-baseFont [&>div]:hover:bg-hoverbg [&>div>p]:hover:text-white'

  const clActive = 'z-20 rounded-xl   [&>div]:bg-hoverbg  [&>div]:text-baseFont [&>div>p]:text-white [&>div]:flex [&>div]:justify-start [&>div]:item-center [&>div]:gap-2'
  const clNormal = 'z-20 rounded-xl  [&>div]:text-baseFont [&>div]:flex [&>div]:justify-start [&>div]:item-center [&>div]:gap-2 [&>div>p]:border-r-4 [&>div]:hover:bg-hoverbg'



  return (
    <>
    {mobileMenu && (
    <div className='w-full block  fixed top-0 left-0 z-10 lg:static lg:z-0'>
    <div className='bg-bgcolor lg:py-14 py-4 pl-2'>
    <div className='flex justify-between items-center mb-6 px-5 lg:hidden'>
    <div>
                <Link to="/" >
                <img src="logo.png" alt="logo"/>
                </Link>
            </div> 
    <CloseIcon className='cursor-pointer ' onClick={Mobile}/>
    </div>
      {pagelinks.map((item) => (
     <div key={item.page}>
    {activeMenu ? (
     <NavLink to={`/${item.page}`} className={({isActive}) => isActive ? Active : Normal }>
       <div className='z-20 mx-2 my-1 pl-3 py-3 rounded-xl group-hover:bg-hoverbg'>{item.icon} <p>{item.page}</p> </div>  
     </NavLink>
     ) :
    (
      <NavLink key={item.page} to={`/${item.page}`} className={({isActive}) => isActive ? clActive : clNormal }>
       <div className='z-20 mx-2 my-1 py-3 pl-4 rounded-xl flex justify-center items-center group-hover:bg-hoverbg'>{item.icon} </div>  
     </NavLink>
    )
    
    }
    </div>
      ))}
    </div>
    </div>
    )}
    </>
  )
}

export default Sidebar;