import React from "react";
import ProductsNameViewAll from "./ProductsNameViewAll";

const sellerData = [
  {
    id: 1,
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4",
    title: "Smartwatches",
  },
  {
    id: 2,
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4",
    title: "Smartwatches",
  },
  {
    id: 3,
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4",
    title: "Smartwatches",
  },
  {
    id: 4,
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4",
    title: "Smartwatches",
  },
  {
    id: 5,
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4",
    title: "Smartwatches",
  },
];
const BestSeller = () => {
  return (
    <>
      <ProductsNameViewAll
        text1="Explore"
        // text2="by"
        text3="Bestsellers"
        text4="View All"
      />
      <div className="introvideo mt-5 flex items-center justify-between gap-x-2 overflow-x-scroll w-[93%] m-auto">
        {sellerData.map((items, ind) => (
          <div key={items.id} className="flex flex-col items-center">
            <video
              muted
              className="max-w-[320px] rounded-xl"
              src={items.image}
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            ></video>
            <p className="font-extrabold text-base">{items.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BestSeller;
