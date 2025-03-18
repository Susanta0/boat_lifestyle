import React from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({
  image,
  name,
  playbackHours,
  rating,
  price,
  beforeOfferPrice,
  discountPercentage,
  colors,
  category,
  _id,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${category}/${_id}`)}
      className="relative"
    >
      <div className="relative rounded">
        <p className="absolute py-[1.5px] px-2 text-[10px] text-white bg-black rounded-tl-xl rounded-tr rounded-br">
          🎉 New Launch
        </p>
        <img
          className="rounded-xl w-full h-[250px] object-cover"
          src={image}
          alt=""
        />
        <div className="bg-[#FCC50B] absolute bottom-0 w-full flex justify-between items-center px-2 py-2 rounded-bl-lg rounded-br-lg">
          <p className="text-[10px] mb:text-[7px] sm:text-[10px] font-extrabold">
            {playbackHours} Hours Playback
          </p>
          <div className="px-2 h-4 flex items-center gap-x-[1.7px] bg-white rounded">
            {/* <div> */}
            <FaStar className="h-3 w-3 text-[#FCC50B]" />
            <span className="text-[10px] mt-1">{rating}</span>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="border bg-[#FAFAFA] rounded-b-xl relative bottom-1 -z-10 w-full ">
        <p className="pl-3 text-sm mb:text-xs sm:text-sm font-extrabold my-3">
          {name}
        </p>
        <div className="ml-3 mr-2 border border-dashed" />
        <div className="mt-2 flex justify-between">
          <p className="font-extrabold ml-3">₹ {price}</p>
          <div className="mr-2 relative flex items-center space-x-1">
            {colors.map((color, index) => (
              <span
                key={color._id}
                className={`rounded-full w-4 h-4 border ${
                  index === 0 ? "absolute -left-1 z-50" : ""
                }`}
                style={{ backgroundColor: color.name }}
              ></span>
            ))}
            <span className="text-black text-sm font-medium">
              +{colors.length}
            </span>
          </div>
        </div>
        <span className="ml-3 text-[10px] text text-[#B2C4DA] space-x-1">
          <span className="line-through">{beforeOfferPrice} </span>
          <span>
            <b className="text-[#12B985]">{discountPercentage}% off</b>
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
