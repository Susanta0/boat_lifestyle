import axios from "axios";
import React, { useEffect, useState } from "react";
import { BoatLoading } from "../Components/ProductCardSkeleton";
import ProductCard from "../Components/CategoriesProductCard/ProductCard";
import SocialMedia from "../Components/Footer/socialMedia";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://boat-lifestyle-server.onrender.com/api/products/all"
        );
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <BoatLoading />
      ) : (
        <div className="mt-14 grid grid-cols-1 mb:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((items, ind) => (
            <ProductCard key={items._id} items={items} />
          ))}
        </div>
      )}
      <br />
      <SocialMedia />
    </>
  );
};

export default AllProducts;
