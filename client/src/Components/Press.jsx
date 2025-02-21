import React, { useState } from "react";
import ProductsNameViewAll from "./ProductsNameViewAll";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    text: "Boat, India's leading wearables brand has named Indian cricketer Jemimah Rodrigues as the newest brand ambassador.",
  },
  {
    id: 3,
    images:
      "https://www.boat-lifestyle.com/cdn/shop/files/Business_Standard_231x.png?v=1705038171",
    text: "Audio brand boAt scales up to Rs 4,000 crore in net sales for FY 2022-23",
  },
  {
    id: 4,
    images:
      "https://www.boat-lifestyle.com/cdn/shop/files/Hindustan_Times_1737c601-8f79-48c9-bca8-a1e0243acb3f_231x.png?v=1705038206",
    text: "boAt co-founder Aman Gupta took to Twitter to spread awareness about the mushrooming fake websites...he said that www.boat-lifestyle.com was its only official website.",
  },
  {
    id: 5,
    images:
      "https://www.boat-lifestyle.com/cdn/shop/files/TOI_1_231x.png?v=1705555311",
    text: "Boat launches its first 4G calling smartwatch, Boat Lunar Pro LTE",
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
      <div className="flex flex-col items-center relative w-[95%] mx-auto mb:px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden w-full h-[300px] mb:h-[400px] md:h-[300px]">
          {sliderData.map((ele, index) => (
            <div
              key={ele.id}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 flex mb:flex-col md:flex-row ${
                sliderState === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Image Section */}
              <div className="mb:w-full md:w-[40%] h-full flex bg-[#D0D9DE]">
                <img
                  src={ele.images}
                  alt=""
                  className="m-auto object-contain mb:max-w-[80%] sm:max-w-[70%] md:max-w-full"
                />
              </div>

              {/* Text Section */}
              <div className="mb:w-full md:w-[60%] mb:px-4 sm:px-6 md:px-20 lg:px-40 h-full flex flex-col items-center bg-[#F7F9FA]">
                <img
                  src="/coma.png"
                  alt=""
                  className="w-[36px] h-[33px] mb:w-[24px] mb:h-[24px] md:w-[36px] md:h-[33px]"
                />
                <p className="m-auto text-[#666666] mb:text-base sm:text-lg md:text-xl lg:text-[22px] text-center">
                  {ele.text}
                </p>
                <div className="space-x-4 relative mb:mb-4 md:mb-0">
                  <button onClick={handlePrev} className="focus:outline-none">
                    <ChevronLeft className="mb:h-5 mb:w-5 md:h-7 md:w-7 rounded-full text-gray-400 bg-slate-200 hover:text-black transition-colors" />
                  </button>
                  <button onClick={handleNext} className="focus:outline-none">
                    <ChevronRight className="mb:h-5 mb:w-5 md:h-7 md:w-7 rounded-full text-gray-400 bg-slate-200 hover:text-black transition-colors" />
                  </button>
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
