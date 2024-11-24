import React, { useState } from 'react'
import ProductsNameViewAll from './ProductsNameViewAll'
import DisplayProducts from './DisplayProducts'

const TopPicks = () => {
    const [show, setShow]=useState(1)

  return (
    <>
    <ProductsNameViewAll
    text1="Top"
    text2="Picks"
    text3="For You"
    text4="View All"
    />
    <div className='mt-3'>
    <ul className='flex items-center gap-x-6 px-10'>
        <li onClick={()=> setShow(1)}
        className={` cursor-pointer ${show === 1? 'font-extrabold bg-[#ECF0F4] px-6 py-1 text-center rounded-full': 'text-[#686C6F]'}`}
        >New Launches</li>
        <li onClick={()=> setShow(2)}
        className={` cursor-pointer ${show === 2? 'font-extrabold bg-[#ECF0F4] px-6 py-1 text-center rounded-full': 'text-[#686C6F]'}`}
        >Personalisation</li>
    </ul>
    <div>
        {show===1? (
            <DisplayProducts/>
        ):(
        <DisplayProducts/>
        )}
        
        
    </div>
    </div>
    </>
  )
}

export default TopPicks