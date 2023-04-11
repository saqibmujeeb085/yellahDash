import React, { useState } from 'react'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Promodata from './../data/promodata'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Pagination from './../components/Pagination/Pagination';
import ConfirmationWithSuccess from './../components/modals/ConfirmationWithSccuess';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Promodetail from './../components/modals/Promodetail'


const Promo = () => {
  const [toggle, setToggle] = useState(false);
  const [act, setAct] = useState(false);
  const [clicked,setClicked] =useState('');
  
  
   const MessageM = [{
     ConformtionM: 'Are you sure you want to inActivate this Promo?',
     SuccessM: 'Promo Successfully in Activated'
}]
  
  
   const [value, setValue] = useState('');
   const [dataSource, setDataSource] = useState(Promodata);
   const [tableFilter, setTableFilter] = useState([]);
   
   const filterData = (e) => {
     if (e.target.value !== ""){
       setValue(e.target.value);
       const filterTable = 
       dataSource.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
       setTableFilter([...filterTable])
      }else {
        setValue(e.target.value);
        setDataSource([...dataSource])
      }
    }
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
  const Currentdata = Promodata.slice(firstPostIndex, lastPostIndex);
  
  const [openModal, setOpenModal] = useState(false);
  const ModalOpen = () => {
    setOpenModal(!openModal);
}
 const CreateNew = () => {
    
 }  


 const [details, setDetails] = useState(false);

  return (
    <div>
     {details && (
    <Promodetail/>
    )}
       {openModal && 
       <div>
       {MessageM.map((item, i)=>
      <ConfirmationWithSuccess key={i} con={item.ConformtionM} suc={item.SuccessM}/>
      )}
      </div>
    }
      <div className='px-4 lg:px-8 flex justify-between items-center'>
        <h2 className='md:text-heading text-[40px] leading-heading font-bold'>Promo</h2>
        <p className='bg-gray-900 text-white py-3 px-9 rounded-xl cursor-pointer' onClick={CreateNew}>Add New Type</p>
      </div>
      <div className='bg-white shadow-2xl mt-12 py-10 px-5 rounded-3xl'>
        <div className=' flex justify-between items-center flex-col-reverse md:flex-row gap-3'>
          <div className='flex justify-between whitespace-nowrap items-center gap-2 mr-10:'>
            <h3 className='font-medium'>Show Enteries:</h3>
            <select value={postPerPage} onChange={e => setPostPerPage(e.target.value)} className='bg-white px-8 py-3 ml-2 cursor-pointer shadow-xl rounded-lg text-gray-500'>
            <option value="10">10 Entries</option>
            <option value="5">5 Entries</option>
            <option value="15">15 Entries</option>
            <option value="20">20 Entries</option>
            <option value="25">25 Entries</option>
            </select>
          </div>
          <div className='relative'>
           <input value={value} onChange={filterData} type="search" name="" id="" placeholder='Search...' className='shadow-md rounded-lg text-sm w-60 p-3'/>
           </div>
        </div>
       <div className='overflow-x-scroll lg:overflow-auto px-2'>

       <table className=' w-full mt-10 border-spacing-y-3 border-separate min-w-[45rem]'>

        <tr className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-72 rounded-2xl h-20'>
        <th className='text-start text-base px-4 '>
           <ImportExportIcon/> S.No
          </th>
          <th className='text-start text-base px-4 '>
           <ImportExportIcon/> Promo Name
          </th>
          <th className='text-start text-base px-4  '>
           <ImportExportIcon/> Promo Code
          </th>
          <th className='text-start text-base px-4  '>
           <ImportExportIcon/> Date
          </th>
          <th className='text-start text-base px-4  '>
           <ImportExportIcon/> Status
          </th>
          <th className='text-start text-base  px-4  '>
           <ImportExportIcon/> Actions
          </th>
        </tr>
          {value.length > 0? tableFilter.map((item) => {
            return(
           <tr className='rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-20' key={item.id}>
          <td className='text-start text-sm px-6 text-gray-500'>{item.id}</td>
          <td className='text-start text-sm px-6 text-gray-500'>{item.PromoName}</td>
          <td className='text-start text-sm px-6 text-gray-500'>{item.Code}</td>
          <td className='text-start text-sm px-6 text-gray-500'>{item.Date}</td>
          <td className='text-start text-sm px-6 text-gray-500'><div className='relative group text-sm'>
        <p className="cursor-pointer"  onClick={(e) => {setAct(true);setClicked(item.id); }}>
       Active  <ArrowDropDownIcon />
       </p>
          {act && clicked === item?.id && (
         <ul 
         id ={item?.id}
          className='absolute w-20 bg-white shadow rounded-lg p-1 -top-1 left-[50px] text-start'>
          <li>
            <p><CloseIcon onClick={(e) => {setAct(false);setClicked(item.id); }} style={{fontSize: '12px', cursor: 'pointer'}} className="text-gray-500"/> <span className='text-sm text-gray-500'>inActive</span></p>
          </li>
         </ul>
         )}
         </div>
      </td>
          <td className=' text-sm text-center'><div className='relative group text-sm'>
          <MoreVertIcon onClick={(e) => {setToggle(!toggle);setClicked(item.id); }} className="cursor-pointer"/>
          {toggle && clicked === item?.id && (
             <ul className='absolute min-w-22 bg-white shadow rounded-lg p-1 -top-3 left-5'>
              <li onClick={(e) => {setDetails(!details);setClicked(item.id); }}>
                <RemoveRedEyeIcon style={{fontSize: '12px'}} className="text-gray-500"/> <span className='text-sm text-gray-500'>View</span>
              </li>
             </ul>
             )}
            </div></td>
            </tr>
       )}) : 
       
       Currentdata.map((item) => {
        
        return(
       <tr className='rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-20' key={item.id}>
      <td className='text-start text-sm px-6 text-gray-500'>{item.id}</td>
      <td className='text-start text-sm px-6 text-gray-500'>{item.PromoName}</td>
      <td className='text-start text-sm px-6 text-gray-500'>{item.Code}</td>
      <td className='text-start text-sm px-6 text-gray-500'>{item.Date}</td>
      <td className='text-start text-sm px-6 text-gray-500'><div className='relative group text-sm'>
        <p className="cursor-pointer"  onClick={(e) => {setAct(true);setClicked(item.id); }}>
       Active  <ArrowDropDownIcon />
       </p>
          {act && clicked === item?.id && (
         <ul 
         id ={item?.id}
          className='absolute w-20 bg-white shadow rounded-lg p-1 -top-1 left-[50px] text-start'>
          <li>
            <p><CloseIcon onClick={(e) => {setAct(false);setClicked(item.id); }} style={{fontSize: '12px', cursor: 'pointer'}} className="text-gray-500 cursor-pointer"/> <span className='text-sm text-gray-500'>inActive</span></p>
          </li>
         </ul>
         )}
         </div>
      </td>
      <td className=' text-sm text-center'><div className='relative group text-sm'>
        <MoreVertIcon onClick={(e) => {setToggle(!toggle);setClicked(item.id); }} className="cursor-pointer"/>
          {toggle && clicked === item?.id && (
         <ul 
         id ={item?.id}
          className='absolute w-[75px] bg-white shadow rounded-lg p-1 -top-3 left-[80px] text-start'
          
          >
          <li onClick={(e) => {setDetails(!details);setClicked(item.id); }} className="cursor-pointer">
            <RemoveRedEyeIcon style={{fontSize: '12px'}} className="text-gray-500"/> <span className='text-sm text-gray-500'>View</span>
          </li>
         </ul>
         )}
        </div></td>
        </tr>
   )})
      
      }
       

       </table>
       </div>
         <div className='mt-10 flex justify-between items-center flex-col gap-3 md:flex-row'>
          <p>Showing {firstPostIndex + 1} to {lastPostIndex} of {Promodata.length} entries</p>

          <Pagination
              totalPost = {Promodata.length}
              postPerPage = {postPerPage}
              setCurrentPage = {setCurrentPage}
              currentPage = {currentPage}
               />
         </div>

          </div>
    </div>
  )
}

export default Promo