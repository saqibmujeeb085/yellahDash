import React, { useState } from 'react';
import Logo from './img/Logo.png';
import Gps from './img/gps.png';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import './style.css';

const ForgetPasswordNP = () => {
    // for password one eye button
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="flex xl:flex-row lg:flex-row md:flex-col">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xsm:w-8/12 lg:mx-auto md:mx-auto sm:mx-auto xsm:mx-auto path-div">
                <img src={Logo} alt="logo" className="pt-[70px] xl:pl-[83px] lg:pl-[40px]" />
                <h1 className='font-[700] pt-[20px] xl:pl-[83px] lg:pl-[40px] xsm:pl-[20px] xl:text-[50px] lg:text-[50px] ms:text-[50px] sm:text-[30px] xsm:text-[30px] text-[#000024] opacity-70'>Password Recovery!</h1>
                <p className='xl:text-[25px] lg:text-[25px] xsm:pl-[20px] ms:text-[25px] sm:text-[15px] text-[#374550] xl:pl-[83px] lg:pl-[40px]'>Change your Password.</p>

                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <span className="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 xl:pl-[123px] lg:pl-[80px] sm:pl-[40px] xsm:pl-[40px] pt-[100px] text-[16px]">
                        New Password
                    </span>
                    <div className="xl:pl-[83px] lg:pl-[40px]">
                        <Input
                            type={values.showPassword ? "text" : "password"}
                            value={values.password}
                            className="border-[1px] border-solid border-[#666666] rounded-[20px] pl-[40px] opacity-40 xl:w-[507px] h-[61px] lg:w-[470px] md:w-[420px] sm:w-[380px] xsm:w-[280px]"
                            placeholder='Enter new password'
                            onChange={handlePasswordChange("password")}
                            disableUnderline={true}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>

                    {/* Password */}
                    <span className="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 xl:pl-[123px] lg:pl-[80px] sm:pl-[40px] xsm:pl-[40px] pt-[25px] text-[16px]">
                        Confirm Password
                    </span>
                    <div className="xl:pl-[83px] lg:pl-[40px]">
                        <Input
                            type={values.showPassword ? "text" : "password"}
                            value={values.password}
                            className="border-[1px] border-solid border-[#666666] rounded-[20px] pl-[40px] opacity-40 xl:w-[507px] h-[61px] lg:w-[470px] md:w-[420px] sm:w-[380px] xsm:w-[280px]"
                            placeholder='Enter confirm password'
                            onChange={handlePasswordChange("password")}
                            disableUnderline={true}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>

                    <div className="xl:pl-[83px] lg:pl-[40px] pt-[41px] pb-[34px]">
                        <button type='submit' className='rounded-[20px] text-white bg-[#000024] xl:w-[507px] h-[61px] lg:w-[470px] md:w-[420px] sm:w-[380px] xsm:w-[280px]'>Update</button>
                    </div>
                </form>

                <span className="underline xl:pl-[269px] lg:pl-[220px] md:pl-[160px] sm:pl-[120px] xsm:pl-[70px]">
                    <a href="#" className="font-bold">Back To Website</a>
                </span>
            </div>
            <div className='w-1/2 overflow-hidden xl:contents lg:hidden md:hidden sm:hidden xsm:hidden'>
                <img className="h-[100vh] 2xl:w-[830px] xl:w-[675px] rounded-[50px_0px_0px_50px]" src={Gps} alt="gps" />
            </div>
        </div>
    )
}

export default ForgetPasswordNP;