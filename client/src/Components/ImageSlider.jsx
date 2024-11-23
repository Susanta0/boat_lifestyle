import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ImageSlider = () => {
  const images = [
    "https://www.boat-lifestyle.com/cdn/shop/files/Desktop-banner_copy_1440x.png?v=1732255961",
    "https://www.boat-lifestyle.com/cdn/shop/files/Artboard_2_c51d0ad3-c3a0-4981-b7bd-17a136809fe4_1440x.jpg?v=1726849779",
    "https://www.boat-lifestyle.com/cdn/shop/files/FK-2_1440x.jpg?v=1726059667",
    "https://www.boat-lifestyle.com/cdn/shop/files/Artboard_2_670feb3c-ed00-4eba-a757-6183627d0d67_1440x.png?v=1732167729",
    "https://www.boat-lifestyle.com/cdn/shop/files/ION_Banner_WEB_f2f301b9-04e1-41f9-b424-a024680e6acc_1600x.jpg?v=1727264228",
    "https://www.boat-lifestyle.com/cdn/shop/files/1440x602Banner_MonAmaar_1440x.png?v=1732087846",
  ];

  const [imagesState, setImagesState] = useState(0);

  const handleNext = () => {
    setImagesState((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setImagesState(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleRadioChange = (index) => {
    setImagesState(index);
  };

  // Automatic Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [imagesState]);

  return (
    <>
      <div className="flex flex-col items-center relative">
        <div className="relative overflow-hidden w-full h-[723px]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 ${
                imagesState === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>

        {/* prev button */}
        <button
          onClick={handlePrev}
          className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-[#1A2024] text-white rounded-full"
        >
          <FiChevronLeft className="h-6 w-6 text-white" />
        </button>

        {/* next button */}
        <button
          onClick={handleNext}
          className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-[#1A2024] text-white rounded-full"
        >
          <FiChevronRight className="h-6 w-6 text-white" />
        </button>
        {/* radio buttom */}
        <div className="absolute z-10 bottom-4 flex items-center space-x-0 h-4 rounded-full bg-[#CBC5CC]">
          {images.map((_, index) => (
            <label key={index} className="cursor-pointer px-1">
              <input
                type="radio"
                name="slider"
                checked={imagesState === index}
                onChange={() => handleRadioChange(index)}
                className="hidden"
              />
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  imagesState === index ? "bg-white" : "bg-black"
                }`}
              ></span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
