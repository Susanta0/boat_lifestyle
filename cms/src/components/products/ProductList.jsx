import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import axios from "axios";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios({
        method: "GET",
        url: "https://boat-lifestyle-server.onrender.com/api/products/all",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setAllProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center p-4 z-50">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/final-loader.gif?v=1670845994"
              alt="boat-gif"
            />
          </div>
        </div>
      ) : (
        <div className="container mx-auto">
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allProducts.length > 0 &&
                allProducts.map((product) => (
                  <ProductTable key={product._id} {...product} />
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ProductList;
