import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {Booking, Commissions, BlockDriverProfile, Login, DriverDetails, BlockedDriver, BlockedUserDetails, Driver, Promo, Error, Dashboard, PaymentLog, Feedback, Wallet, VehicleTypes, Users, EditVehicleType, AddNewVehicle, UserDetails, Profile, BookingBooked, PaymentDetails, FeedbackDetails, ForgetPasswordEA, ForgetPasswordNP, ForgetPasswordVC} from './pages/Allpages';
import useStateContext from './contexts/contextProvider';

const App = () => {
  const { activeMenu } = useStateContext();


  return (
      <div>
    <BrowserRouter>
      
    <div className='relative z-10'>
    {window.location.pathname !== "/" && window.location.pathname !== "/ForgetPasswordVC" && window.location.pathname !== "/ForgetPasswordEA" && window.location.pathname !== "/ForgetPasswordNP" ? (
      <Header />
      ) : null}  
      </div>
      <div className='flex'>
     
     {} 
      {window.location.pathname !== "/" && window.location.pathname !== "/ForgetPasswordVC" && window.location.pathname !== "/ForgetPasswordEA" && window.location.pathname !== "/ForgetPasswordNP" ? (
      <div>   
      {activeMenu ? (
            <div className="">
              <Sidebar />
            </div>
          ) : (
            <div className="lg:w-20 w-full">
              <Sidebar />
            </div>
          )}

        </div> 
        ) : null  } 
        <div className='lg:mx-6 mx-2 py-6 w-full'>
          <div  className='py-10 lg:px-6 px-2 rounded-3xl bg-bgcolor'>
       <Routes>

       <Route path="/" element={<Login />}/>
       <Route path="/ForgetPasswordVC" element={<ForgetPasswordVC />}/>
       <Route path="/ForgetPasswordNP" element={<ForgetPasswordNP />}/>
       <Route path="/ForgetPasswordEA" element={<ForgetPasswordEA />}/>
       <Route path="/Dashboard" element={<Dashboard/>}/>
       <Route path="/Booking" element={<Booking/>}/>
       <Route path="/Booking/BooKingDetails" element={<BookingBooked/>}/>
       <Route path="/Profile" element={<Profile/>}/>
       <Route path="/Users" element={<Users/>}/>
       <Route path="/Driver" element={<Driver/>}/>
       <Route path="/Driver/BlockedDrivers" element={<BlockedDriver/>}/>
       <Route path="/Driver/BlockDriverProfile" element={<BlockDriverProfile/>}/>
       <Route path="/VehicleTypes" element={<VehicleTypes/>}/>
       <Route path="/EditVehicle" element={<EditVehicleType/>}/>
       <Route path="/AddNewVehicle" element={<AddNewVehicle/>}/>
       <Route path="/UserDetails" element={<UserDetails/>}/>
       <Route path="/Drivers/DriverDetails" element={<DriverDetails/>}/>
       <Route path="/Wallet" element={<Wallet/>}/>
       <Route path="/Promo" element={<Promo/>}/>
       <Route path="/Commissions" element={<Commissions/>}/>
       <Route path="/Feedback" element={<Feedback/>}/>
       <Route path="/Feedback/FeedbackDetails" element={<FeedbackDetails/>}/>
       <Route path="/PaymentLog" element={<PaymentLog/>}/>
       <Route path="/PaymentLog/PaymentyDetails" element={<PaymentDetails/>}/>
       <Route path="/Users/BlockedUsers" element={<BlockedUserDetails/>}/>
       <Route path="*" element={<Error/>}/>
       </Routes>
       </div>
      </div>
      
      </div>
    </BrowserRouter>
      </div>
  )
}

export default App