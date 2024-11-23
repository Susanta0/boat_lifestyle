import React from 'react'
import { TbCircleArrowRight } from "react-icons/tb";
const ProductsNameViewAll = ({text1, text2, text3, text4}) => {
  return (
    <>
    <div className="px-10 flex items-center justify-between h-[40.8px] mt-2 bg-white">
        <p className="text-2xl tracking-wide">
          {text1}{" "}
          <b className="font-black">
            {text2}{" "}
            <span className="inline-block relative">
              {text3}
              <span className="absolute bottom-1 left-1/2 w-1/2 h-0.5 bg-red-500"></span>
            </span>
          </b>
        </p>
        <button className="flex items-center gap-x-1">
          <p className="text-[12px] font-extrabold text-[#2E5B96]">
            {text4}
          </p>
          <TbCircleArrowRight className="text-[#2E5B96]" />
        </button>
      </div>
    </>
  )
}

export default ProductsNameViewAll