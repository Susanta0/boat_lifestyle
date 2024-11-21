import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import Search from './NavDetails/Search';
import Login from './NavDetails/Login';
import Cart from './NavDetails/Cart';

const navData=[
{
    id:1,
    title:"Categories",
    icon: <MdKeyboardArrowDown/>

},
{
    id:2,
    title:"boAt Personalisation"
},
{
    id:3,
    title:"Corporate Orders"
},
{
    id:4,
    title:"More",
    icon: <MdKeyboardArrowDown/>
}

]

const Navbar = () => {
  return (
    <>
    <div className='h-[83.2px] border-2 flex items-center justify-between px-10'>
        {/* logo of Boat */}
        <img className='lg:max-w-24 xl:max-w-24 2xl:max-w-24 max-h-max cursor-pointer' src="/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg" alt="" />
        {/* navbar list data */}
        <ul className='border-2 flex space-x-10 relative 2xl:right-28 xl:right-20 lg:right-2 w-fit'>
            {navData.map((items, ind)=>(
                <li key={items.id} className='flex items-center hover:font-extrabold'>
                    <Link className='tracking-wide text-[1em] cursor-pointer'>{items.title}</Link>
                    {items.id === 1 || items.id === 4 ? items.icon : null}
                    
                </li>
            ))}
        </ul>
        <div className=' flex items-center space-x-5'>
            
        <Search/>
            <Login/>
            <Cart/>
        </div>
    </div>
    </>
  )
}

export default Navbar