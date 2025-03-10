import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import axios from "axios";
import IsLoading from "../IsLoading";
import Search from "./Search";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async (query = "") => {
    try {
      setLoading(true);
      const response = await axios({
        method: "GET",
        url: "https://boat-lifestyle-server.onrender.com/api/products/search",
        params: { query },
        headers: {
          "Content-Type": "application/json",
        },
      });

      setAllProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch all products initially
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchProducts(searchTerm);
    }, 1000); // Delay API call by 500ms for debouncing

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <>
      {loading ? (
        <IsLoading />
      ) : (
        <div className="container mx-auto">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Off
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allProducts.length > 0 ? (
                allProducts.map((product) => (
                  <ProductTable key={product._id} {...product} />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No matching products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ProductList;
