import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaShoppingBag, FaShoppingCart } from "react-icons/fa";

const NoOrders = () => {
  const navigate = useNavigate();
  // const { category } = useParams();

  const handleBack = () => {
    navigate("/");
  };

  // const handleShopNow = () => {
  //   navigate(`/collection/${category}`);
  // };

  return (
    <div className="pt-24 px-4 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="mb-6 flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 text-white">
            <h2 className="text-2xl font-bold">Your Orders</h2>
            <p className="text-blue-100 mt-1">
              View and track your purchase history
            </p>
          </div>

          {/* Empty state content */}
          <div className="px-6 py-12 flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <FaShoppingBag className="text-blue-600 text-4xl" />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No Orders Yet
            </h3>
            <p className="text-gray-600 text-center max-w-md mb-8">
              You haven't placed any orders with us yet. Start shopping to see
              your orders appear here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBack}
                className="px-5 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium flex items-center justify-center"
              >
                <FaArrowLeft className="mr-2" /> Return to Home
              </button>

              {/* <button
                onClick={handleShopNow}
                className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium flex items-center justify-center"
              >
                <FaShoppingCart className="mr-2" /> Start Shopping
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoOrders;
