import React from 'react'
import { FaStar } from "react-icons/fa6";
import ProductDetails from './ProductDetails';


const productsData= [
    {
        id:1,
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_71.jpg?v=1698316250",
        newLaunch:"🎉 New Launch",
        specality:"40 Hours Playback",
        rating:[
            {star:<FaStar className='h-3 w-3 text-[#FCC50B]'/>},
            {rate:"4.8"}
        ],
        title:"boAt Airdopes 71",
        price:"₹899",
        regularPrice:"₹3,990",
        off:"77% off"
    },
    {
        id:2,
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_71.jpg?v=1698316250",
        newLaunch:"🎉 New Launch",
        specality:"40 Hours Playback",
        rating:[
            {star:<FaStar className='h-3 w-3 text-[#FCC50B]'/>},
            {rate:"4.8"}
        ],
        title:"boAt Airdopes 71",
        price:"₹899",
        regularPrice:"₹3,990",
        off:"77% off"
    },
    {
        id:3,
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_71.jpg?v=1698316250",
        newLaunch:"🎉 New Launch",
        specality:"40 Hours Playback",
        rating:[
            {star:<FaStar className='h-3 w-3 text-[#FCC50B]'/>},
            {rate:"4.8"}
        ],
        title:"boAt Airdopes 71",
        price:"₹899",
        regularPrice:"₹3,990",
        off:"77% off"
    },
    {
        id:4,
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_71.jpg?v=1698316250",
        newLaunch:"🎉 New Launch",
        specality:"40 Hours Playback",
        rating:[
            {star:<FaStar className='h-3 w-3 text-[#FCC50B]'/>},
            {rate:"4.8"}
        ],
        title:"boAt Airdopes 71",
        price:"₹899",
        regularPrice:"₹3,990",
        off:"77% off"
    },
    {
        id:5,
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_71.jpg?v=1698316250",
        newLaunch:"🎉 New Launch",
        specality:"40 Hours Playback",
        rating:[
            {star:<FaStar className='h-3 w-3 text-[#FCC50B]'/>},
            {rate:"4.8"}
        ],
        title:"boAt Airdopes 71",
        price:"₹899",
        regularPrice:"₹3,990",
        off:"77% off"
    },
    {
        id:6,
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_71.jpg?v=1698316250",
        newLaunch:"🎉 New Launch",
        specality:"40 Hours Playback",
        rating:[
            {star:<FaStar className='h-3 w-3 text-[#FCC50B]'/>},
            {rate:"4.8"}
        ],
        title:"boAt Airdopes 71",
        price:"₹899",
        regularPrice:"₹3,990",
        off:"77% off"
    },

]
const DisplayProducts = () => {
  return (
    <div className='px-10 mb:px-2 sm:px-2 md:px-10 lg:px-10 xl:px-10 2xl:px-10 pt-8 grid mb:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-x-1'>
        {productsData.map((items, ind)=> (
            <ProductDetails key={items.id} {...items}/>
        ))}

    </div>
  )
}

export default DisplayProducts