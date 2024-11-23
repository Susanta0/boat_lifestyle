import React from "react";
import ProductsNameViewAll from "./ProductsNameViewAll";

const Sale = () => {
  return (
    <>
    <ProductsNameViewAll 
    text1="Black"
    text2="Friday"
    text3="Sale"
    text4="View All"
    />
      <div className="px-10 rounded-lg mt-2">
        <img
          className="rounded-lg"
          src="https://www.boat-lifestyle.com/cdn/shop/files/Strip-Desktop_3e8d1191-1332-4103-b229-67ac17e56932_1600x.jpg?v=1732255962"
          alt="sale_banner"
        />
      </div>
    </>
  );
};

export default Sale;