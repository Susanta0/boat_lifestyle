import React from 'react'
import { IoSearchOutline } from "react-icons/io5";


const Search = () => {
  return (
    <div className='relative h-[41.2px] w-[312px] rounded-3xl'>
       <input className='w-full h-full outline-none bg-[#F4F5F7] rounded-3xl pl-8' placeholder='Search "Earphone"' type="text" name="" id="" />
       <IoSearchOutline className=' h-5 w-5 absolute top-3 left-2'/>
    </div>
  )
}

export default Search