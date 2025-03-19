import React, { useEffect, useState } from "react";
import { categoriesImages } from "../../utils/categoriesImages";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BoatLoading } from "../ProductCardSkeleton";

const NavCategories = ({ isMobile = false }) => {
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

  if (isMobile) {
    return (
      <div className="bg-gray-50 rounded-md p-2">
        {loading ? (
          <BoatLoading />
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {categoriesData.map((categoryName, ind) => (
              <div
                key={ind}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/collection/${categoryName}`);
                }}
                className="flex items-center space-x-2 p-2 bg-white rounded-md shadow-sm hover:bg-gray-100 transition-colors"
              >
                <img
                  src={getCategoryImage(categoryName)}
                  alt={categoryName}
                  className="w-5 h-5"
                />
                <span className="text-sm truncate">{categoryName}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop version with smooth animation
  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/4  mt-6 w-screen max-w-3xl bg-white text-gray-800 rounded-md shadow-lg z-50 opacity-100 transition-opacity duration-300">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-4">
        {loading ? (
          <div className="col-span-full p-4 text-center">
            <BoatLoading />
          </div>
        ) : (
          categoriesData.map((categoryName, ind) => (
            <div
              key={ind}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/collection/${categoryName}`);
              }}
              className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
            >
              <img
                src={getCategoryImage(categoryName)}
                alt={categoryName}
                className="w-6 h-6"
              />
              <span className="text-sm">{categoryName}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NavCategories;
