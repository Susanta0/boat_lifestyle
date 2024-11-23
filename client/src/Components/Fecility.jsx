import React from "react";
import img1 from "/Group_334305_small.svg";
import img2 from "/Group_334304_small.svg";
import img3 from "/Group_334303_small.svg";
import img4 from "/Group_334302_small.svg";

const facData = [
  { id: 1, image: img1, text1: "1 year", text2: "Warranty" },
  { id: 2, image: img2, text1: "7-day", text2: "Replacement" },
  { id: 3, image: img3, text1: "Free Express", text2: "Delivery" },
  { id: 4, image: img4, text1: "GST", text2: "Billing" },
];
const Fecility = () => {
  return (
    <>
      <div className="bg-[#F6FAFF] w-full py-2 flex justify-around items-center">
        {facData.map((item, ind) => (
          <div
            key={ind}
            className="flex items-center gap-x-4 2xl:flex xl:flex lg:flex md:flex sm:flex mb:block"
          >
            <img
              src={item.image}
              alt={item.text1}
              className="h-[58px] w-[58px]"
            />
            <div>
              <p className="font-bold text-xs 2xl:text-start xl:text-start lg:text-start md:text-start sm:text-start mb:text-center">
                {item.text1}
              </p>
              <p className="text-xs font-thin 2xl:text-start xl:text-start lg:text-start md:text-start sm:text-start mb:text-center">
                {item.text2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fecility;
