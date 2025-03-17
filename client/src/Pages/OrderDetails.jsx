import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { AuthContex } from "../Context/AuthContextProvider";

const OrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const { loginStatus } = useContext(AuthContex);
  const location = useLocation();
  const { order_id } = location.state;

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(
          `https://boat-lifestyle-server.onrender.com/api/orders/${order_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${loginStatus.token}`,
            },
          }
        );
        setOrderDetails(response.data);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, [order_id, loginStatus.token]);

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-48">
      <h2>Order Details</h2>
      <p>Order ID: {orderDetails._id}</p>
      <p>Total Amount: ₹{orderDetails.totalAmount}</p>
      <h3>Products:</h3>
      <ul>
        {orderDetails.products.map((product) => (
          <li key={product._id}>
            {product.name} - ₹{product.price} x {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
