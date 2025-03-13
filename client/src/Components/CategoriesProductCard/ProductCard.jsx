import React from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const itemsCard = ({ items }) => {
  const navigate = useNavigate();
  return (
    <div className="relative border flex px-1 pt-1 pb-3 rounded-lg">
      <div className="relative rounded">
        <p className="absolute py-[1.5px] px-2 text-[10px] text-white bg-black rounded-tl-xl rounded-tr rounded-br">
          🎉 New Launch
        </p>
        <img
          className="rounded-xl w-[280px] h-[171px] object-cover"
          src={items.image}
          alt=""
        />
        <div className="bg-[#FCC50B] absolute w-full bottom-0 flex justify-center items-center px-2 py-2 rounded-bl-lg rounded-br-lg">
          <p className="text-[10px] mb:text-[7px] sm:text-[10px] font-extrabold">
            {items.playbackHours} Hours Playback
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="px-2 w-full flex items-center justify-between rounded">
          <div className="flex items-center">
            <FaStar className="h-4 w-4 text-[#FCC50B]" />
            <span className="text-[12px] mt-1">{items.rating}</span>
            <span className="mx-1 text-gray-400">|</span>
            <span className="text-sm text-gray-600">32</span>
            <img
              className="w-3 h-3"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mask_group-10.png?v=1677571152"
              alt=""
            />
          </div>
          <div className="flex items-center rounded-md bg-[#EFF4F7]">
            <img
              className="w-4"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536"
              alt=""
            />
            <span className="text-xs">Best seller</span>
          </div>
        </div>

        <div className="bg-[#FAFAFA] rounded-b-xl relative bottom-1 -z-10 w-full ">
          <p className="pl-3 mb:text-xs sm:text-sm font-extrabold my-4">
            {items.name}
          </p>
          <div className="mt-2 flex justify-between">
            <div className="flex items-center">
              <p className="font-extrabold ml-3">₹{items.price}</p>
              <span className="ml-3 text-[10px] text text-[#B2C4DA] space-x-1">
                <span className="line-through">{items.beforeOfferPrice} </span>
                <span>
                  <b className="text-[#12B985]">
                    {items.discountPercentage}% off
                  </b>
                </span>
              </span>
            </div>

            <button className="mr-2 relative flex items-center space-x-1">
              <span className="bg-gray-400 rounded-full w-4 h-4 absolute -left-1 z-50"></span>

              <span className="bg-black rounded-full w-4 h-4"></span>

              <span className="text-black text-sm font-medium">+1</span>
            </button>
          </div>

          <div className="ml-3 mr-2 mt-1 border border-solid" />
          <div className="ml-3 mt-2 flex items-center gap-x-4">
            <span className="text-xs bg-[#EFF4F7] rounded-sm">
              Bluetooth Version: {items.connectivity.bluetooth.version}
            </span>
            <span className="text-xs bg-[#EFF4F7] rounded-sm">
              Range: {items.connectivity.bluetooth.range}
            </span>
          </div>
        </div>
        <button
          onClick={() => navigate(`/products/${items.category}/${items._id}`)}
          className="bg-[#1A2024] text-white py-2 w-full mt-1 rounded-lg"
        >
          View Product
        </button>
      </div>
    </div>
  );
};

export default itemsCard;
