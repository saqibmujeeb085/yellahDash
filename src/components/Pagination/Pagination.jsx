import React from 'react'

const Dots = () => {
    return <div className='text-white py-2 px-4 bg-[#E78901] cursor-pointer'>...</div>
}
const Pagination = ( {totalPost, postPerPage, setCurrentPage, currentPage}) => {
     

    
    
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPost/postPerPage); i++){
        pages.push(i)
    }
     


    

  


    
        const Prev = () => {
        if (currentPage >= 2){
            setCurrentPage(currentPage - 1)
        }
        }
        
        const Next = () => {
            if (currentPage <= totalPost/postPerPage){
                setCurrentPage(currentPage + 1)
            }
        }

    const ActivePage = "text-white py-2 px-4 bg-[#E78901] cursor-pointer";
    const OtherPages = "text-[#B0BCCB] py-2 px-4 hover:bg-[#E78901] cursor-pointer hover:text-white";


  return (
    <div>
            <div className='rounded-xl flex justify-center items-center shadow-xl overflow-hidden'>
              <div><button onClick={Prev} className='text-black py-2 px-4 hover:bg-[#E78901] cursor-pointer hover:text-white'>Previous</button></div>
              {pages.map((page, i) => (
              <div key={i}><button  onClick={() => setCurrentPage(page)} className={page === currentPage ? ActivePage : OtherPages}>{page}</button></div>
              ))}
              <div><button onClick={Next} className='text-black py-2 px-4 hover:bg-[#E78901] cursor-pointer hover:text-white'>Next</button></div>
              </div>
            
    </div>
  )
}

export default Pagination