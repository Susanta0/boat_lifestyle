import React, { useEffect, useState } from "react";
import ProductsNameViewAll from "./ProductsNameViewAll";
import { data as videosData } from "../utils/videosData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import JionTribeSkeleton from "../utils/JionTribeSkeleton";

const JoinTribe = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://boat-lifestyle-server.onrender.com/api/products/all"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Function to get video URL from videosData
  const getVideoUrl = (name) => {
    const videoItem = videosData.find(
      (item) => item.title.trim() === name.trim()
    );
    return videoItem ? videoItem.video : null;
  };

  return (
    <>
      <ProductsNameViewAll
        text1="Join"
        text2="the"
        text3="Tribe"
        text4="View All"
      />

      {loading ? (
        <div className="introvideo mt-5 flex justify-between gap-x-3 overflow-x-scroll w-[93%] m-auto">
          {Array(21)
            .fill()
            .map((_, ind) => (
              <JionTribeSkeleton key={ind} />
            ))}
        </div>
      ) : (
        <div className="introvideo mt-5 flex justify-between gap-x-3 overflow-x-scroll w-[93%] m-auto">
          {products.map((product, ind) => {
            const videoUrl = getVideoUrl(product.name);
            if (!videoUrl) return null; // Skip if no matching video

            return (
              <div
                onClick={() =>
                  navigate(`/products/${product.category}/${product._id}`)
                }
                key={ind}
                className="flex flex-col border rounded-lg "
              >
                <div className="relative">
                  <video
                    muted
                    className=" max-w-[238.4px] max-h-[409.2px] rounded-tr-lg rounded-tl-lg rounded-bl-sm rounded-br-sm"
                    src={videoUrl}
                    autoPlay
                    loop
                  ></video>
                  <img
                    className="h-[50px] w-[50px] bg-white border object-center rounded-sm absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <span className="text-center mt-12 font-semibold text-sm">
                  {product.name}
                </span>

                <span className=" flex justify-center space-x-2 py-4">
                  <span className="text-[17px] font-bold text-black">
                    ₹{product.price}
                  </span>
                  <span className="line-through text-[#B2C4DA]">
                    ₹{product.beforeOfferPrice}{" "}
                  </span>
                  <span>
                    <b className="text-[#12B985] text-[14px]">
                      {" "}
                      {product.discountPercentage}% off
                    </b>
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default JoinTribe;
