import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import BoatLogoLoading from "../utils/boatLogoLoading";
import { FaArrowLeft } from "react-icons/fa";
import NoOrders from "../utils/NoOrders";
import SocialMedia from "../Components/Footer/socialMedia";

const OrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { loginStatus } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://boat-lifestyle-server.onrender.com/api/orders/user/${loginStatus.userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${loginStatus.token}`,
            },
          }
        );
        setOrderDetails(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, [loginStatus.userId, loginStatus.token]);

  const handleBack = () => {
    navigate("/");
  };

  if (loading) {
    return <BoatLogoLoading />;
  }

  if (!orderDetails.length) {
    return <NoOrders />;
  }

  return (
    <>
      <div className="pt-24 px-4 min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto">
          {/* Back button */}
          <button
            onClick={handleBack}
            className="mb-6 flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" />
            Back to Orders
          </button>

          {orderDetails.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-6"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 text-white">
                <h2 className="text-2xl font-bold">Order Details</h2>
                <p className="text-blue-100 mt-1">
                  Thank you for shopping with us
                </p>
              </div>

              {/* Order Info */}
              <div className="px-6 py-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                      Order ID
                    </p>
                    <p className="font-medium text-gray-800 break-all">
                      {order._id}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                      Total Amount
                    </p>
                    <p className="text-xl font-bold text-gray-900">
                      ₹{order.totalAmount}
                    </p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="mb-6 bg-green-50 text-green-700 px-4 py-3 rounded-lg flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="font-medium">Order Confirmed</span>
                </div>

                {/* Products */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                    Products
                  </h3>

                  <ul className="divide-y divide-gray-100">
                    {order.products &&
                      order.products.map((product) => (
                        <li
                          key={product._id}
                          className="py-4 flex justify-between items-center"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-gray-800">
                              {product.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              Quantity: {product.quantity}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900">
                              ₹{product.product.price}
                            </p>
                            <p className="text-sm text-gray-600">
                              Subtotal: ₹
                              {product.product.price * product.quantity}
                            </p>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Total Summary */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{order.totalAmount}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-100">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-lg font-bold">
                      ₹{order.totalAmount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <button
                    onClick={handleBack}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
                  >
                    Return to Home
                  </button>

                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium">
                    Download Invoice
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <SocialMedia />
    </>
  );
};

export default OrderDetails;
