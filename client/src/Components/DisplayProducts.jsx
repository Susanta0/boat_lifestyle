import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import axios from "axios";
import ProductCardSkeleton from "./ProductCardSkeleton";

const DisplayProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios({
          method: "GET",
          url: "https://boat-lifestyle-server.onrender.com/api/products/all",
        });
        setProductsData(response.data.slice(0, 6)); // Limit to 6 products
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="px-10 mb:px-2 sm:px-2 md:px-10 lg:px-10 xl:px-10 2xl:px-10 pt-8 grid mb:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-x-1">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ProductCardSkeleton key={item} />
          ))}
        </div>
      ) : (
        <div className="px-10 mb:px-2 sm:px-2 md:px-10 lg:px-10 xl:px-10 2xl:px-10 pt-8 grid mb:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-x-1">
          {productsData.map((items, ind) => (
            <ProductDetails key={ind} {...items} />
          ))}
        </div>
      )}
    </>
  );
};

export default DisplayProducts;
