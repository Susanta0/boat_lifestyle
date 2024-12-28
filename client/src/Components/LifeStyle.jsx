import React from 'react'
import ProductsNameViewAll from './ProductsNameViewAll'
import { TbCircleArrowRight } from 'react-icons/tb'

const lifestyleData= [
  {
    id:1,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/jemmi_d1dd51d5-8b8b-47ad-9920-f8594669cbb2.png?v=1726059408",
    title:"For Fitness",
    button:"View All"
  },
  {
    id:2,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/Ranveer.png?v=1726038549",
    title:"For Parties",
    button:"View All"
  },
  {
    id:3,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/Aman.png?v=1726038424",
    title:"For Work",
    button:"View All"
  },
  {
    id:4,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/YJ.png?v=1726059363",
    title:"For Audiophiles",
    button:"View All"
  },
]
const LifeStyle = () => {
  return (
    <>
     <ProductsNameViewAll
    text1="Shop"
    text2="by"
    text3="Lifestyle"
    text4="View All"
    />

    <div className='
    mb:px-2 sm:px-2 md:px-10 lg:px-10 xl:px-10 2xl:px-10
    grid grid-cols-4 
    mb:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 
    items-center gap-6'>
      {lifestyleData.map((item, ind)=> (
        <div key={ind} className='cursor-pointer flex flex-col items-center'>
          <img src={item.image} alt={item.title} />
          <div className='bg-[#EFF4F7] w-full text-center pb-2 rounded-xl'>

          <p className='text-xl font-extrabold leading-relaxed mt-4'>{item.title}</p>
          <button className="flex items-center gap-x-1 w-full justify-center">
          <p className="text-[12px] font-extrabold text-[#2E5B96]">
            {item.button}
          </p>
          <TbCircleArrowRight className="text-[#2E5B96]" />
        </button>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default LifeStyle