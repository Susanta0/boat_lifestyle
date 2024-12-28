import React, { useState } from "react";
import ProductsNameViewAll from "./ProductsNameViewAll";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const sliderData = [
  {
    id: 1,
    images:
      "https://www.boat-lifestyle.com/cdn/shop/files/Business_World_231x.png?v=1705038093",
    text: "boAt is the first company from the consumer lifestyle electronics industry to collaborate with the ICEA to bring out the Indigenous IP.",
  },
  {
    id: 2,
    images:
      "https://www.boat-lifestyle.com/cdn/shop/files/Fashion_Network_231x.png?v=1705038134",
    text: "boAt is the first company from the consumer lifestyle electronics industry to collaborate with the ICEA to bring out the Indigenous IP.",
  },
  {
    id: 3,
    images:
      "https://www.boat-lifestyle.com/cdn/shop/files/Business_World_231x.png?v=1705038093",
    text: "boAt is the first company from the consumer lifestyle electronics industry to collaborate with the ICEA to bring out the Indigenous IP.",
  },
  {
    id: 4,
    images:
      "https://www.boat-lifestyle.com/cdn/shop/files/Business_World_231x.png?v=1705038093",
    text: "boAt is the first company from the consumer lifestyle electronics industry to collaborate with the ICEA to bring out the Indigenous IP.",
  },
  {
    id: 5,
    images:
      "https://www.boat-lifestyle.com/cdn/shop/files/Business_World_231x.png?v=1705038093",
    text: "boAt is the first company from the consumer lifestyle electronics industry to collaborate with the ICEA to bring out the Indigenous IP.",
  },
];
const Press = () => {
  const [sliderState, setSliderState] = useState(0);

  const handleNext = () => {
    setSliderState((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setSliderState(
      (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
    );
  };
  return (
    <>
      <ProductsNameViewAll
        text1="In the"
        // text2="the"
        text3="Press"
        text4="View All"
      />
      <div className="flex flex-col items-center relative w-[95%] m-auto">
        <div className="relative overflow-hidden w-full h-[300px] border-2">
          {sliderData.map((ele, index) => (
            <div
              key={ele.id}
              className={`absolute top-0 left-0 w-[100%] h-full object-cover transition-all duration-500 flex justify-center ${
                sliderState === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="w-[40%] border h-full flex bg-[#D0D9DE]">
                <img src={ele.images} alt="" className="border m-auto" />
              </div>
              <div className="border-2 border-green-600 px-40 w-[60%] h-full flex flex-col items-center bg-[#F7F9FA]">
                <img
                  src="/coma.png"
                  alt=""
                  className="w-[36px] h-[33px]"
                />
                <p className="m-auto text-[#666666] text-[22px] text-center">
                  {ele.text}
                </p>
                <div className="space-x-4">
                  <button onClick={handlePrev}> <FiChevronLeft className="h-7 w-7 rounded-full text-gray-400 bg-slate-200 hover:text-black"/></button>
                  <button onClick={handleNext}><FiChevronRight className="h-7 w-7 rounded-full text-gray-400 bg-slate-200 hover:text-black"/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Press;
