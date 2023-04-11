import React from 'react';
import { Link } from 'react-router-dom';

import Mini from '../img/mini.png';
import MiniPlus from '../img/Mini-plus.png';
import Business from '../img/business.png';

const VehicleType = () => {
    const vehicles = [
        {
            image: Mini,
            heading: "Mini",
            subHeading: "Seating Capacity: 2, Non-AC",
            price: "$20"

        },
        {
            image: MiniPlus,
            heading: "Mini Plus",
            subHeading: "Seating Capacity: 4, AC",
            price: "$30"

        },
        {
            image: Business,
            heading: "Business",
            subHeading: "Seating Capacity: 4, AC, Luxury Vehicle",
            price: "$40"

        }
    ]
    return (
        <div className="xl:pl-[15px] lg:pl-[15px] md:pl-[15px] sm:pl-[15px] xsm:pl-[5x] bg-[#FFFDFA] rounded-[40px]">
            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row xsm:flex-col pt-[40px] pb-[20px]">
                <div className="basis-1/2">
                    <h1 className="text-[#000024] xl:text-[60px] lg:text-[60px] md:text-[50px] sm:text-[40px] xsm:text-[30px] xl:pl-[10px] lg:pl-[10px] md:pl-[10px] sm:pl-[10px] font-bold xsm:pl-[90px]">Vehicle Types</h1>
                </div>
                <div className="basis-1/2 flex justify-end mr-4 xl:mt-7 lg:mt-7 md:mt-4 sm:mt-2 xsm:mt-[1px] pr-8 xsm:pr-[90px]">
                  <Link to="/AddNewVehicle"> <button className="bg-[#020225] h-[45px] w-[168px] text-white shadow-[0px_2px_4px_#50505096] rounded-[10px]">Add New Type</button> </Link>
                </div>
            </div>

            <div className="bg-[#FFFFFF] shadow-[0px_5px_10px_#00000029] rounded-[50px] m-[10px] pt-[53px] pb-[53px] space-y-[43px]">
                {vehicles && (vehicles.map((vehicle, index) => {
                    return (
                        <div key={index} className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xsm:flex-col bg-[#FFFFFF] shadow-[0px_5px_10px_#00000029] rounded-[50px] w-[92%] p-[20px] m-auto hover:border-2 hover:border-[#000024]">
                            <div className="pl-[26px] 2xl:basis-1/4 xl:basis-1/3 lg:flex-shrink-0 md:flex-shrink-0">
                                <img
                                    className="h-[220px] w-[320px] xsm:object-contain"
                                    src={vehicle.image}
                                    alt="mini"
                                />
                            </div>
                            <div className="basis-1/2 xl:pl-[92px] lg:pl-[92px] md:pl-[92px] sm:pl-[92px] xsm:pl-[42px]">
                                <h1 className="font-bold text-[#020225] xl:text-[60px] lg:text-[40px] md:text-[40px] sm:text-[40px] xsm:text-[40px]">{vehicle.heading}</h1>
                                <p className="text-[#999999] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[15px]">{vehicle.subHeading}</p>
                                <h1 className="text-[#E78901] font-bold xl:text-[80px] lg:text-[80px] md:text-[80px] sm:text-[80px] xsm:text-[50px]">{vehicle.price}</h1>
                            </div>
                            <div className="basis-1/4 flex justify-end xl:mr-7 lg:mr-7 md:mr-7 sm:mr-7 xsm:mr-1">
                             <Link to="/EditVehicle">   <button className="bg-[#020225] h-[45px] w-[96px] text-white shadow-[0px_2px_4px_#50505096] rounded-[10px]">Edit</button> </Link>
                            </div>
                        </div>
                    )
                }))}
            </div>
        </div>
    )
}

export default VehicleType;