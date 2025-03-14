import React, { useState, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          "https://boat-lifestyle-server.onrender.com/api/carts/user/:userId"
        ); // Replace :userId with actual user ID
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    if (isOpen) {
      fetchCartItems();
    }
  }, [isOpen]);

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`/api/carts/${itemId}`);
      setCartItems(cartItems.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <>
      {/* Cart Icon */}
      <div className="relative">
        <HiOutlineShoppingBag
          className="w-6 h-6 cursor-pointer"
          onClick={toggleCart}
        />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleCart}
        />
      )}

      {/* Sliding Cart Drawer */}
      <div
        className={`fixed top-0 right-0 w-1/4 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          {/* Cart Header */}
          <div className="flex items-center justify-between pb-4 border-b">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button
              onClick={toggleCart}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <IoCloseOutline className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between py-2 border-b"
                >
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="p-4 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="112.731"
                        height="124.316"
                        viewBox="0 0 112.731 124.316"
                      >
                        <g transform="translate(-3235.117 6880.904)">
                          <path
                            d="M509.34,3199.823a.947.947,0,0,1-.947-.947v-11.064a19.073,19.073,0,1,0-38.146,0v11.064a.947.947,0,0,1-1.894,0v-11.064a21.145,21.145,0,0,1,6.085-14.89,20.882,20.882,0,0,1,22.993-4.559,21.1,21.1,0,0,1,12.857,19.449v11.064A.947.947,0,0,1,509.34,3199.823Z"
                            transform="translate(2799.417 -10047.617)"
                            fill="#4e5358"
                          ></path>
                          <path
                            d="M521.3,3254.225a.306.306,0,0,1-.137-.58,3.165,3.165,0,0,0,.457-.287,2.115,2.115,0,0,1,.791-.4.306.306,0,0,1,.148.594,1.522,1.522,0,0,0-.582.3,3.688,3.688,0,0,1-.541.337A.3.3,0,0,1,521.3,3254.225Z"
                            transform="translate(2815.908 -10020.475)"
                            fill="#4e5358"
                          ></path>
                          <g transform="translate(1018.755 -698.496)">
                            <path
                              d="M459.184,3175.473l-14.666,1.042-.2,106.408,15.187,2.169Z"
                              transform="translate(1772.545 -9346.648)"
                              fill="#d0d9de"
                            ></path>
                            <path
                              d="M459.683,3174.936l.323,110.732-16.189-2.312.2-107.307ZM459,3284.515l-.317-108.506-13.669.971-.2,105.508Z"
                              transform="translate(1772.545 -9346.648)"
                              fill="#4e5358"
                            ></path>
                            <path
                              d="M459.7,3174.386l-16,1.074v94.6l.036,15.031,16.028,2.862h.136Z"
                              transform="translate(1787.925 -9346.648)"
                              fill="#d0d9de"
                            ></path>
                            <path
                              d="M460.2,3173.852l.2,114.6h-.681l-.044-.008-16.439-2.936-.037-15.448v-95.069l.466-.031Zm-.8,113.53-.2-112.46-15,1.007v94.133l.035,14.612Z"
                              transform="translate(1787.925 -9346.648)"
                              fill="#4e5358"
                            ></path>
                          </g>
                          <g transform="translate(3266.214 -6869.684)">
                            <path
                              d="M548.666,3175.46l-80.906-.082.084,113.638,80.69-6.159v-107.4Z"
                              transform="translate(-467.4 -3176.46)"
                              fill="#fff"
                            ></path>
                            <path
                              d="M467.259,3174.878h.5l80.906.082v.5h.368v107.86l-.462.035-81.228,6.2v-.539Zm80.775,1.081-79.774-.08.083,112.6,79.691-6.083Z"
                              transform="translate(-467.4 -3176.46)"
                              fill="#4e5358"
                            ></path>
                          </g>
                          <path
                            d="M472.15,3263.515l-28.419-4.646,14.146-10.568Z"
                            transform="translate(2792.976 -10021.005)"
                            fill="#868c91"
                          ></path>
                          <path
                            d="M473.521,3264.246l-31.032-5.073,15.446-11.54Zm-28.548-5.68,25.806,4.219-12.961-13.816Z"
                            transform="translate(2792.976 -10021.005)"
                            fill="#4e5358"
                          ></path>
                          <path
                            d="M483.283,3196.426a4.083,4.083,0,1,0-4.083-4.083A4.1,4.1,0,0,0,483.283,3196.426Z"
                            transform="translate(2802.558 -10041.086)"
                            fill="#c7d2dd"
                          ></path>
                          <path
                            d="M513.683,3196.426a4.083,4.083,0,1,0-4.083-4.083A4.192,4.192,0,0,0,513.683,3196.426Z"
                            transform="translate(2812.197 -10041.086)"
                            fill="#c7d2dd"
                          ></path>
                          <path
                            d="M522.34,3199.823a.947.947,0,0,1-.947-.947v-11.064a19.074,19.074,0,1,0-38.146,0v11.064a.947.947,0,0,1-1.894,0v-11.064a21.145,21.145,0,0,1,6.085-14.89,20.882,20.882,0,0,1,22.993-4.559,21.1,21.1,0,0,1,12.857,19.449v11.064A.947.947,0,0,1,522.34,3199.823Z"
                            transform="translate(2803.541 -10047.617)"
                            fill="#4e5358"
                          ></path>
                          <path
                            d="M20.865,29.139l3.147-7.123L.777,22.9l3.812,6.906Zm-2.695-12.1L11.773.328,5.329,22.076Z"
                            transform="translate(3297.439 -6829.365)"
                            fill="#4e5358"
                          ></path>
                          <path
                            d="M22.032,31.149l-16.856.7L.812,23.946l4.822-.184L12.573.345l7.084,18.5L7.314,23.7,25.632,23ZM5.72,30.809l15.7-.647,2.694-6.1L2.461,24.9Zm6.971-27.46L6.943,22.757l11.459-4.5Z"
                            transform="translate(3296.58 -6830.877)"
                            fill="#4e5358"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>

                  <p className="text-lg font-extrabold text-gray-700 pt-6">
                    Your cart is feeling lonely
                  </p>
                </div>

                {/* Start Shopping Button */}
                <button className="mt-4 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                  Start Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
