import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";

let footerData = [
  {
    id: 1,
    name: "Shop",
    Shop: [
      "True Wireless Earbuds",
      "Wired Headphones",
      "Home Audio",
      "Smart Watches",
      "Misfit Trimmers",
    ],
  },
  {
    id: 2,
    name: "",
    "": [
      "Wireless Headphones",
      "Wireless Speakers",
      "Mobile Accessories",
      "TRebel",
      "Refer & Earn",
    ],
  },
  {
    id: 3,
    name: "Help",
    Help: [
      "Track Your Order",
      "Warranty & Support",
      "Return Policy",
      "Service Centers",
      "Bulk Orders",
      "Why Buy Direct",
    ],
  },
  {
    id: 4,
    name: "Company",
    Company: [
      "About boAt",
      "News",
      "Read Our Blog",
      "Careers",
      "Security",
      "Investor Relations",
      "Social Responsibility",
      "Warranty Policy",
    ],
  },
];
const Footer1 = () => {
  return (
    // <div className="mx-0.5 mt-0.5 m-auto px-16 py-16 bg-[#E7F0F5] grid grid-flow-col">
    //   <div className="">
    //     <img
    //       className="w-[151px]"
    //       src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo_black_830768d4-b3b0-4bef-8d5c-494df9bd6cbc.svg?v=1732875809"
    //       alt=""
    //     />
    //     <h2 className="font-extrabold text-2xl mt-8">
    //       Subscribe to our email alerts!
    //     </h2>
    //     <div className="relative border max-w-[23em] h-12 rounded-md bg-white flex">
    //       <input
    //         type="email"
    //         placeholder="Enter your email address"
    //         className="rounded-md h-full w-[87%] outline-none pl-4 pr-1"
    //       />
    //       <TfiArrowCircleRight className="h-6 w-6 text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-6" />
    //     </div>
    //   </div>
    //   <div className=" flex gap-28 ">
    //     {footerData.map((item, ind) => (
    //       <div key={ind}>
    //           <p className="font-extrabold text-black text-xs">{item.name}</p>
    //           <ul className="space-y-4 mt-6">
    //             {item[item.name].map((listItem, index) => (
    //               <li key={index} className="text-xs font-thin">{listItem}</li>
    //             ))}
    //           </ul>
            
    //       </div>
    //     ))}
    //   </div>
    // </div>


<div className="bg-[#E7F0F5] w-full">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Main footer content wrapper */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* Left section with logo and subscribe */}
          <div className="w-full lg:w-1/3">
            <img
              className="w-[120px] mb:w-[151px]"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo_black_830768d4-b3b0-4bef-8d5c-494df9bd6cbc.svg?v=1732875809"
              alt="boAt Logo"
            />
            <h2 className="font-extrabold text-xl md:text-2xl mt-6 md:mt-8">
              Subscribe to our email alerts!
            </h2>
            <div className="relative mt-4 max-w-[23em] h-10 md:h-12 rounded-md bg-white flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="rounded-md h-full w-full outline-none pl-4 pr-12"
              />
              <TfiArrowCircleRight 
                className="h-5 w-5 md:h-6 md:w-6 text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-4"
              />
            </div>
          </div>

          {/* Right section with footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-16 xl:gap-28">
            {footerData.map((item, ind) => (
              <div key={ind} className="min-w-[120px]">
                <p className="font-extrabold text-black text-xs mb:text-sm">
                  {item.name}
                </p>
                <ul className="space-y-3 md:space-y-4 mt-4 md:mt-6">
                  {item[item.name]?.map((listItem, index) => (
                    <li key={index} className="text-xs mb:text-sm font-thin">
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
