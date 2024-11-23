import React from "react";

const ProductDetails = ({ image, newLaunch, specality, rating, title,  }) => {
  return (
    <div className="relative rounded">
      <p className="absolute py-[1.5px] px-2 text-[10px] text-white bg-black rounded-tl-xl rounded-tr rounded-br">
        {newLaunch}
      </p>
      <img className="rounded-xl" src={image} alt="" />
      <div className="bg-[#FCC50B] absolute bottom-6 w-full flex justify-between items-center px-2 py-2 rounded-bl-lg rounded-br-lg">
        <p className="text-[10px] font-extrabold">{specality}</p>
        <div className="px-2 h-4 flex items-center gap-x-[1.7px] bg-white rounded">
          {rating.map((item, ind) => (
            <>
              {item.star}
              <span key={ind} className="text-[10px] mt-1">
                {item.rate}
              </span>
            </>
          ))}
        </div>
      </div>
      <div className="border">

      <p className="pl-4 text-sm font-extrabold">{title}</p>

      </div>
    </div>
  );
};

export default ProductDetails;
