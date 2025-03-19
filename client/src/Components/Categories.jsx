import React, { useEffect, useState } from "react";
import ProductsNameViewAll from "./ProductsNameViewAll";
import axios from "axios";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { categoriesImages } from "../utils/categoriesImages";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        setLoading(true);
        const response = await axios({
          method: "GET",
          url: "https://boat-lifestyle-server.onrender.com/api/products/categories",
        });
        setCategoriesData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoriesData();
  }, []);

  // Function to find matching image for a category
  const getCategoryImage = (categoryName) => {
    const categoryImage = categoriesImages.find(
      (item) => item.title.toLowerCase() === categoryName.toLowerCase()
    );

    // Return the found image or a default image if not found
    return categoryImage ? categoryImage.image : categoriesImages[0].image;
  };

  return (
    <>
      <ProductsNameViewAll
        text1="Shop"
        text2="by"
        text3="Categories"
        text4="View All"
      />

      {loading ? (
        <div className="px-10 mb:px-2 sm:px-2 md:px-10 lg:px-10 xl:px-10 2xl:px-10 pt-8 grid mb:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-x-1">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ProductCardSkeleton key={item} />
          ))}
        </div>
      ) : (
        <div className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-10 py-8 grid 2xl:grid-cols-10 xl:grid-cols-10 lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-5 mb:grid-cols-5 gap-y-6">
          {categoriesData.map((categoryName, ind) => (
            <div
              key={ind}
              onClick={() => navigate(`/collection/${categoryName}`)}
              className="flex flex-col items-center justify-center gap-y-3 cursor-pointer"
            >
              <img
                src={getCategoryImage(categoryName)}
                alt={categoryName}
                className="h-[82px] w-[82px]"
              />
              <p className="font-extrabold text-xs sm:text-sm text-center">
                {categoryName}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Categories;
