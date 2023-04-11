import React from 'react';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Rating from 'react-rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import Group from '../img/Group.png';
const BookingCompleted = () => {
    return (
        <div className='pl-[15px]' style={{ backgroundColor: '#FFFDFA', borderRadius: '40px' }}>
            <div className="flex flex-row" style={{ paddingTop: '60px', paddingBottom: '20px' }}>
                <div className="basis-1/2">
                    <h1 style={{ color: '#000024', fontSize: '40px', fontWeight: 'bold' }} className='pl-[40px]'>
                        <KeyboardArrowLeftIcon style={{ fontSize: '60px' }} />
                        Booking
                    </h1>
                </div>
                <div className="basis-1/2 absolute right-[100px] top-[95px]">
                    <p className="font-bold">Status: <span className="text-[#E78901]">Completed</span></p>
                </div>
            </div>
            <div className="flex flex-row">
                <div style={{ width: "100%" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                        width="95%"
                        height="299"
                        frameBorder="0"
                        style={{ border: '0px', borderRadius: '50px', boxShadow: '0px 5px 10px #00000029', margin: 'auto' }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </div>
            </div>

            <div style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 5px 10px #00000029',
                borderRadius: '50px',
                margin: '40px'
            }}>
                <div className="flex flex-row">
                    {/* First Div */}
                    <div className="basis-1/2">
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0px 5px 10px #00000029',
                            borderRadius: '50px',
                            margin: '40px'
                        }}>
                            <div className="flex flex-row pl-[50px]">
                                <div className="basis-1/4">
                                    <img
                                        src={Group}
                                        alt="uploader"
                                    />
                                </div>
                                <div className="basis-3/4">
                                    <h1
                                        className="pt-[30px] text-[60px]"
                                    >User Name</h1>
                                    <Rating
                                        style={{ color: '#FFCE2D' }}
                                        emptySymbol={<StarBorderIcon />}
                                        fullSymbol={<StarIcon />}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row"><h1 className="text-[#242424] text-[40px] pl-[63px] pt-[10px]">Trip Details :</h1></div>

                            <div className='="flex flex-row'><p className="text-[18px] text-[#242424] font-[500] pl-[63px] pt-[30px]">Pick Up Location:</p></div>
                            <div className='="flex flex-row'><p className="text-[18px] text-[#666666] pl-[63px] pt-[15px]">A-15, block 2, Street XYZ</p></div>

                            <div className='="flex flex-row'><p className="text-[18px] text-[#242424] font-[500] pl-[63px] pt-[30px]">Drop Off Location:</p></div>
                            <div className='="flex flex-row'><p className="text-[18px] text-[#666666] pl-[63px] pt-[15px]">A-15, block 2, Street XYZ</p></div>

                            <div className="flex flex-row">
                                <div className="basis-1/2 pl-[63px] pt-[25px] text-[18px] text-[#242424] font-[500]">Time:</div>
                                <div className="basis-1/2 pt-[25px] text-[18px] text-[#242424] font-[500]">Date:</div>
                            </div>

                            <div className="flex flex-row">
                                <div className="basis-1/2 pl-[63px] pt-[15px] text-[18px] text-[#666666]">13:00</div>
                                <div className="basis-1/2 pt-[15px] text-[18px] text-[#666666]">02.05.2020</div>
                            </div>

                            <div className="flex flex-row">
                                <div className="basis-1/2 pl-[63px] pt-[25px] text-[18px] text-[#242424] font-[500]">Amount:</div>
                                <div className="basis-1/2 pt-[25px] text-[18px] text-[#242424] font-[500]">Payment Method:</div>
                            </div>

                            <div className="flex flex-row">
                                <div className="basis-1/2 pl-[63px] pt-[15px] text-[18px] text-[#666666]">$ 1234</div>
                                <div className="basis-1/2 pt-[15px] text-[18px] text-[#666666]">Paid through Cash</div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>

                    {/* Second Div */}
                    <div className="basis-1/2">
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0px 5px 10px #00000029',
                            borderRadius: '50px',
                            margin: '40px'
                        }}>
                            <div className="flex flex-row pl-[50px]">
                                <div className="basis-1/4">
                                    <img
                                        src={Group}
                                        alt="uploader"
                                    />
                                </div>
                                <div className="basis-3/4">
                                    <h1
                                        className="pt-[30px] text-[60px]"
                                    >Driver Name</h1>
                                    <Rating
                                        style={{ color: '#FFCE2D' }}
                                        emptySymbol={<StarBorderIcon />}
                                        fullSymbol={<StarIcon />}
                                    />
                                </div>
                            </div>
                            <div className='="flex flex-row'><p className="text-[18px] text-[#242424] font-[500] pl-[63px] pt-[100px]">Phone No:</p></div>
                            <div className='="flex flex-row'><p className="text-[18px] text-[#666666] pl-[63px] pt-[15px]">+44 123 456678</p></div>

                            <div className='="flex flex-row'><p className="text-[18px] text-[#242424] font-[500] pl-[63px] pt-[30px]">Email:</p></div>
                            <div className='="flex flex-row'><p className="text-[18px] text-[#666666] pl-[63px] pt-[15px]">email@email.com</p></div>

                            <div className="flex flex-row"><div className="pl-[63px] pt-[25px] text-[18px] text-[#242424] font-[500]">No. of Trips:</div></div>

                            <div className="flex flex-row"><div className="pl-[63px] pt-[15px] text-[18px] text-[#666666]">45</div></div>

                            <div className="flex flex-row"><div className="pl-[63px] pt-[25px] text-[18px] text-[#242424] font-[500]">Rating :</div></div>

                            <div className="flex flex-row">
                                <div className="pl-[63px] pr-[20px] pt-[15px] text-[18px] text-[#666666]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingCompleted;