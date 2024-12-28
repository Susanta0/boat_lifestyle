import React from "react";
import ProductsNameViewAll from "./ProductsNameViewAll";

const data = [
  {
    id: 1,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹ 899",
    regularPrice: "₹ 3,990",
    off: "77% off",
  },
  {
    id: 2,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 3,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 4,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 5,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 6,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 7,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 8,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 9,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 10,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 11,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 12,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 13,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 14,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 15,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 16,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 17,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 18,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 19,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 20,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
  {
    id: 21,
    video:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4",
    images:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_200x200.png?v=1698315950",
    title: "boAt Airdopes 71",
    price: "₹899",
    regularPrice: "₹3,990",
    off: "77% off",
  },
];
const JoinTribe = () => {
  return (
    <>
      <ProductsNameViewAll
        text1="Join"
        text2="the"
        text3="Tribe"
        text4="View All"
      />

      <div className="introvideo mt-5 flex justify-between gap-x-3 overflow-x-scroll w-[93%] m-auto">
        {data.map((ele, ind) => (
          <div key={ind} className="flex flex-col border rounded-lg ">
            <div className="relative">
              <video
                muted
                className=" max-w-[238.4px] max-h-[409.2px] rounded-tr-lg rounded-tl-lg rounded-bl-sm rounded-br-sm"
                src={ele.video}
                autoPlay
                loop
              ></video>
              <img
                className="h-[50px] w-[50px] bg-white border object-center rounded-sm absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2"
                src={ele.images}
                alt={ele.title}
              />
            </div>
            <span className="text-center mt-12 font-semibold text-sm">
              {ele.title}
            </span>

            <span className=" flex justify-center space-x-2 py-4">
              <span className="text-[17px] font-bold text-black">
                {ele.price}
              </span>
              <span className="line-through text-[#B2C4DA]">
                {ele.regularPrice}{" "}
              </span>
              <span>
                <b className="text-[#12B985] text-[14px]"> {ele.off}</b>
              </span>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default JoinTribe;
