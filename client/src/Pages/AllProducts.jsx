import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { BoatLoading } from "../Components/ProductCardSkeleton";
import ProductCard from "../Components/CategoriesProductCard/ProductCard";
import SocialMedia from "../Components/Footer/SocialMedia";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    price: null,
    rating: null,
    discount: null,
    category: null,
  });
  const [sortOption, setSortOption] = useState("Featured");
  const [categories, setCategories] = useState([]);
  const filterDropdownRef = useRef(null);
  const filterButtonRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://boat-lifestyle-server.onrender.com/api/products/all"
        );
        setProducts(response.data);
        setFilteredProducts(response.data);

        // Extract unique categories for the filter
        const uniqueCategories = [
          ...new Set(response.data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Apply filters and sorting whenever filter options or sort option changes
    let result = [...products];

    // Apply category filter
    if (filterOptions.category) {
      result = result.filter(
        (item) => item.category === filterOptions.category
      );
    }

    // Apply price filter
    if (filterOptions.price) {
      if (filterOptions.price === "under1000") {
        result = result.filter((item) => item.price < 1000);
      } else if (filterOptions.price === "1000to5000") {
        result = result.filter(
          (item) => item.price >= 1000 && item.price <= 5000
        );
      } else if (filterOptions.price === "above5000") {
        result = result.filter((item) => item.price > 5000);
      }
    }

    // Apply rating filter
    if (filterOptions.rating) {
      const minRating = parseInt(filterOptions.rating);
      result = result.filter((item) => item.rating >= minRating);
    }

    // Apply discount filter
    if (filterOptions.discount) {
      const minDiscount = parseInt(filterOptions.discount);
      result = result.filter(
        (item) =>
          ((item.originalPrice - item.price) / item.originalPrice) * 100 >=
          minDiscount
      );
    }

    // Apply sorting
    if (sortOption === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Newest First") {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortOption === "Rating: High to Low") {
      result.sort((a, b) => b.rating - a.rating);
    }
    // For "Featured" we don't sort as it's the default order from the API

    setFilteredProducts(result);
  }, [products, filterOptions, sortOption]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterChange = (type, value) => {
    setFilterOptions({
      ...filterOptions,
      [type]: value,
    });
  };

  const clearFilters = () => {
    setFilterOptions({
      price: null,
      rating: null,
      discount: null,
      category: null,
    });
    setSortOption("Featured");
  };

  // Handle click outside to close filter dropdown
  useEffect(() => {
    if (!showFilters) return;

    const handleClickOutside = (event) => {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target) &&
        filterButtonRef.current &&
        !filterButtonRef.current.contains(event.target)
      ) {
        setShowFilters(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showFilters]);

  return (
    <>
      <div className="px-2 mb:px-4 sm:px-6 md:px-10 mt-28">
        <div className="my-4 mb:my-6">
          <h2 className="text-xl mb:text-2xl font-extrabold mb-4">
            All Products
          </h2>

          <div className="flex flex-col mb:flex-row justify-between items-start mb:items-center mb-4 mb:mb-6">
            <div className="relative mb-4 mb:mb-0 w-full mb:w-auto">
              <button
                ref={filterButtonRef}
                onClick={toggleFilters}
                className="flex items-center justify-between space-x-2 px-3 mb:px-4 py-1 mb:py-2 border rounded-md shadow-sm bg-white hover:bg-gray-50 w-full mb:w-auto"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mb:h-5 mb:w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm mb:text-base">Filter By</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 mb:h-5 mb:w-5 transition-transform ${
                    showFilters ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {showFilters && (
                <div
                  ref={filterDropdownRef}
                  className="absolute left-0 mt-2 w-full mb:w-64 bg-white border rounded-md shadow-lg z-10 p-3 mb:p-4"
                >
                  <div className="mb-3 mb:mb-4">
                    <h3 className="font-semibold mb-1 mb:mb-2 text-sm mb:text-base">
                      Category
                    </h3>
                    <div className="max-h-32 mb:max-h-40 overflow-y-auto space-y-1 pr-1">
                      {categories.map((category) => (
                        <label
                          key={category}
                          className="flex items-center text-sm mb:text-base"
                        >
                          <input
                            type="radio"
                            name="category"
                            checked={filterOptions.category === category}
                            onChange={() =>
                              handleFilterChange("category", category)
                            }
                            className="mr-2"
                          />
                          {category}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3 mb:mb-4">
                    <h3 className="font-semibold mb-1 mb:mb-2 text-sm mb:text-base">
                      Price
                    </h3>
                    <div className="space-y-1">
                      <label className="flex items-center text-sm mb:text-base">
                        <input
                          type="radio"
                          name="price"
                          checked={filterOptions.price === "under1000"}
                          onChange={() =>
                            handleFilterChange("price", "under1000")
                          }
                          className="mr-2"
                        />
                        Under ₹1,000
                      </label>
                      <label className="flex items-center text-sm mb:text-base">
                        <input
                          type="radio"
                          name="price"
                          checked={filterOptions.price === "1000to5000"}
                          onChange={() =>
                            handleFilterChange("price", "1000to5000")
                          }
                          className="mr-2"
                        />
                        ₹1,000 - ₹5,000
                      </label>
                      <label className="flex items-center text-sm mb:text-base">
                        <input
                          type="radio"
                          name="price"
                          checked={filterOptions.price === "above5000"}
                          onChange={() =>
                            handleFilterChange("price", "above5000")
                          }
                          className="mr-2"
                        />
                        Above ₹5,000
                      </label>
                    </div>
                  </div>

                  <div className="mb-3 mb:mb-4">
                    <h3 className="font-semibold mb-1 mb:mb-2 text-sm mb:text-base">
                      Rating
                    </h3>
                    <div className="space-y-1">
                      {[4, 3, 2].map((rating) => (
                        <label
                          key={rating}
                          className="flex items-center text-sm mb:text-base"
                        >
                          <input
                            type="radio"
                            name="rating"
                            checked={filterOptions.rating === rating.toString()}
                            onChange={() =>
                              handleFilterChange("rating", rating.toString())
                            }
                            className="mr-2"
                          />
                          {rating}+ ★
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3 mb:mb-4">
                    <h3 className="font-semibold mb-1 mb:mb-2 text-sm mb:text-base">
                      Discount
                    </h3>
                    <div className="space-y-1">
                      {[10, 20, 30].map((discount) => (
                        <label
                          key={discount}
                          className="flex items-center text-sm mb:text-base"
                        >
                          <input
                            type="radio"
                            name="discount"
                            checked={
                              filterOptions.discount === discount.toString()
                            }
                            onChange={() =>
                              handleFilterChange(
                                "discount",
                                discount.toString()
                              )
                            }
                            className="mr-2"
                          />
                          {discount}% or more
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={clearFilters}
                    className="w-full py-1 mb:py-2 bg-red-500 text-white text-sm mb:text-base rounded-md hover:bg-red-600"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center w-full mb:w-auto">
              <span className="mr-2 text-sm mb:text-base text-gray-700">
                Sort by:
              </span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border rounded-md shadow-sm py-1 mb:py-2 px-2 mb:px-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm mb:text-base flex-grow mb:flex-grow-0"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Rating: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <BoatLoading />
        ) : (
          <>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 mb:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb:gap-4">
                {filteredProducts.map((items) => (
                  <ProductCard key={items._id} items={items} />
                ))}
              </div>
            ) : (
              <div className="text-center py-6 mb:py-10">
                <p className="text-base mb:text-lg text-gray-500">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-3 mb:mt-4 px-3 mb:px-4 py-1 mb:py-2 bg-blue-500 text-white text-sm mb:text-base rounded-md hover:bg-blue-600"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <br />
      <SocialMedia />
    </>
  );
};

export default AllProducts;
