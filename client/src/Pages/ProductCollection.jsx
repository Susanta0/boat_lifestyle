import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/CategoriesProductCard/ProductCard";
import { ItemsCardSkeleton } from "../Components/ProductCardSkeleton";
import SocialMedia from "../Components/Footer/socialMedia";

const ProductCollection = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://boat-lifestyle-server.onrender.com/api/products/category/${category}`
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="mx-10 mt-14">
        <h2 className="text-2xl font-extrabold">{category}</h2>
        {loading ? (
          <div className="mt-10 grid grid-cols-1 mb:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <ItemsCardSkeleton key={item} />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 mb:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((items) => (
              <ProductCard key={items._id} items={items} />
            ))}
          </div>
        )}
      </div>
      <br />
      <SocialMedia />
    </>
  );
};

export default ProductCollection;
