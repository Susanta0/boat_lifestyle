import React from 'react'
import { IoSearchOutline } from "react-icons/io5";


const Search = () => {
  return (
    <div className='
    2xl:relative xl:relative lg:absolute md:absolute sm:absolute mb:absolute 
    h-[41.2px] w-[312px] rounded-3xl
    2xl:block xl:block
    transform -translate-x-1/2 -translate-y-1/2 2xl:-translate-x-0 2xl:-translate-y-0 xl:-translate-x-0 xl:-translate-y-0
    mb:left-1/2 mb:top-[6.5em] sm:left-1/2 sm:top-[6.6em] md:left-1/2 md:top-[6.6em] lg:left-1/2 lg:top-[6.6em] xl:left-0 xl:top-0 2xl:left-0 2xl:top-0 
    z-50'
    >
       <input className='w-full h-full outline-none bg-[#F4F5F7] rounded-3xl pl-8' placeholder='Search "Earphone"' type="text" name="" id="" />
       <IoSearchOutline className=' h-5 w-5 absolute top-3 left-2'/>
    </div>
  )
}

export default Search