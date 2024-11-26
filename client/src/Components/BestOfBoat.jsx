import React, { useState } from 'react'
import ProductsNameViewAll from './ProductsNameViewAll'
import DisplayProducts from './DisplayProducts'

const BestOfBoat = () => {
    const [show, setShow]=useState(1)
    const [fade, setFade] = useState(false)

      // Helper function for handling tab changes
  const handleTabChange = (tabNumber) => {
    setFade(true); // Trigger fade-out
    setTimeout(() => {
      setShow(tabNumber); // Change content after fade-out
      setFade(false); // Trigger fade-in
    }, 500); // Match this to your CSS transition duration
  };

    const getTabClass = (tabNumber) =>
        `cursor-pointer ${
          show === tabNumber
            ? 'font-extrabold bg-[#ECF0F4] px-6 py-1 text-center rounded-full'
            : 'text-[#686C6F]'
        }`;
    
      return (
        <>
          <ProductsNameViewAll
            text1="Best"
            text2="Of"
            text3="boAt"
            text4="View All"
          />
          <div className="mt-3">
            <ul className="flex items-center mb:gap-x-4 sm:gap-x-6 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-10 mb:px-2 mb:text-xs sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base">
              <li onClick={() => handleTabChange(1)} className={getTabClass(1)}>
                Best Sellers
              </li>
              <li onClick={() => handleTabChange(2)} className={getTabClass(2)}>
                Home Theatre Systems & Soundbars
              </li>
              <li onClick={() => handleTabChange(3)} className={getTabClass(3)}>
                Top Earbuds
              </li>
              <li onClick={() => handleTabChange(4)} className={getTabClass(4)}>
                Top Watches
              </li>
            </ul>
            <div
             className={`transition-opacity duration-300 ${
                fade ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {show === 1 && <DisplayProducts />}
              {show === 2 && <DisplayProducts />}
              {show === 3 && <DisplayProducts />}
              {show === 4 && <DisplayProducts />}
            </div>
          </div>
        </>
      );
}

export default BestOfBoat