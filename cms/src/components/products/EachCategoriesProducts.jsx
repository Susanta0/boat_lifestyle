import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IsLoading from "../IsLoading";
import { Pencil, Trash } from "lucide-react";
import { AuthContext } from "../../context/AuthContextProvider";

const EachCategoriesProducts = () => {
  const { category } = useParams();
  const { loginStatus } = useContext(AuthContext);

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);

  const navigate = useNavigate();

  const fetchCategoryProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/products/category/${category}`
      );
      setCategoryProducts(response.data.products);
      console.log(response.data.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [category]);

  const handleAddProduct = () => {
    navigate(`/products/admin/${category}`);
  };

  const handleEditProduct = (productId) => {
    navigate(`/products/admin/${category}/edit/${productId}`);
  };

  if (loading) {
    return <IsLoading />;
  }

  const deleteData = async (productId) => {
    try {
      await axios.delete(
        `https://boat-lifestyle-server.onrender.com/api/products/admin/${category}/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loginStatus.token}`,
          },
        }
      );
      setCategoryProducts((prev) =>
        prev.filter((product) => product._id !== productId)
      );
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteConfirmation = (productId) => {
    setDeleteProductId(productId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setDeleteProductId(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Products in {category}
        </h2>
        <button
          onClick={handleAddProduct}
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          Add New Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-3 text-left">Image</th>
              <th className="px-4 py-3 text-left">Product Name</th>
              <th className="px-4 py-3 text-left">Original Price</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Stock</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {categoryProducts.length > 0 ? (
              categoryProducts.map((product) => (
                <tr key={product._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {product.name}
                  </td>
                  <td className="px-4 py-3 text-gray-500 line-through">
                    ₹{product.beforeOfferPrice}
                  </td>
                  <td className="px-4 py-3 font-medium text-green-600">
                    ₹{product.price}
                  </td>
                  <td className="px-4 py-3">
                    {product.stock > 0 ? (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        In Stock ({product.stock})
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                        Out of Stock
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button
                        className="p-1 text-blue-600 hover:text-blue-800"
                        title="Edit"
                        onClick={() => handleEditProduct(product._id)}
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        className="p-1 text-red-600 hover:text-red-800"
                        title="Delete"
                        onClick={() => handleDeleteConfirmation(product._id)}
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-8 text-center text-gray-500 italic"
                >
                  No products found in this category.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-96">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Confirm Delete
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleModalClose}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => deleteData(deleteProductId)}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EachCategoriesProducts;
