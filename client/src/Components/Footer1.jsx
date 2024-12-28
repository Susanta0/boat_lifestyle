import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";

let footerData = [
  {
    id: 1,
    name:"Shop",
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
    name:"",
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
    name:"Help",
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
    name:"Company",
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
    <div className="w-[98%] border-2 m-auto px-16 pt-16 bg-[#E7F0F5] flex gap-x-10">
      <div>
        <img
          className="w-[151px]"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo_black_830768d4-b3b0-4bef-8d5c-494df9bd6cbc.svg?v=1732875809"
          alt=""
        />
        <h2 className="font-extrabold text-2xl mt-8">
          Subscribe to our email alerts!
        </h2>
        <div className="relative border max-w-[23em] h-12 rounded-md bg-white flex">
          <input
            type="email"
            placeholder="Enter your email address"
            className="rounded-md h-full w-[87%] outline-none pl-4 pr-1"
          />
          <TfiArrowCircleRight className="h-6 w-6 text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-6" />
        </div>
      </div>
      <div>
        {footerData.map((item, ind)=>(
            <div key={ind}>
                <ul>
                    {item.name}
                
                </ul>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Footer1;
