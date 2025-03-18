import React, { useState } from "react";
import ProductsNameViewAll from "./ProductsNameViewAll";
import PopularBlogs from "./BlogsDetails";

const Blogs = () => {
  const [show, setShow] = useState(1);
  return (
    <>
      <ProductsNameViewAll text1="" text2="" text3="Blogs" text4={null} />
      <div className="mt-3">
        <ul className="flex items-center gap-x-6 px-10">
          <li
            onClick={() => setShow(1)}
            className={` cursor-pointer ${
              show === 1
                ? "font-extrabold bg-[#ECF0F4] px-6 py-1 text-center rounded-full"
                : "text-[#686C6F]"
            }`}
          >
            Popular
          </li>
          <li
            onClick={() => setShow(2)}
            className={` cursor-pointer ${
              show === 2
                ? "font-extrabold bg-[#ECF0F4] px-6 py-1 text-center rounded-full"
                : "text-[#686C6F]"
            }`}
          >
            Latest
          </li>
        </ul>
      </div>

      {show === 1 ? <PopularBlogs /> : <PopularBlogs />}
    </>
  );
};

export default Blogs;
