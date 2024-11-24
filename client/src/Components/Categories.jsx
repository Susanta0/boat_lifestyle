import React from 'react'
import ProductsNameViewAll from './ProductsNameViewAll'

const categoriesData=[
  {
    id:1,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    title:"True Wireless Earbuds"
  },
  {
    id:2,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    title:"Neckbands"
  },
  {
    id:3,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    title:"True Wireless Earbuds"
  },
  {
    id:4,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    title:"True Wireless Earbuds"
  },
  {
    id:5,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    title:"Wireless Speakers"
  },
  {
    id:6,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    title:"True Wireless Earbuds"
  },
  {
    id:7,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    title:"True Wireless Earbuds"
  },
  {
    id:8,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    title:"True Wireless Earbuds"
  },
  {
    id:9,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    title:"True Wireless Earbuds"
  },
  {
    id:10,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    title:"True Wireless Earbuds"
  }
]
const Categories = () => {
  return (
    <>
    <ProductsNameViewAll
    text1="Shop"
    text2="by"
    text3="Categories"
    text4="View All"
    />
    <div className='2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-10 py-8 grid 2xl:grid-cols-10 xl:grid-cols-10 lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-5 mb:grid-cols-5 gap-y-6'>
    {categoriesData.map((items, ind)=>(
      <div key={items.id} className='flex flex-col items-center justify-center gap-y-3 cursor-pointer'>
        <img src={items.image} alt={items.title} className='h-[82px] w-[82px]' />
        <p className='font-extrabold text-sm text-center'>{items.title}</p>
      </div>
    ))}
    </div>
    </>
  )
}

export default Categories