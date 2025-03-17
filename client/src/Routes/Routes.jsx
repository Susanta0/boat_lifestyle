import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductCollection from "../Pages/ProductCollection";
import SingleProduct from "../Pages/SingleProduct";
import AdressPage from "../Pages/AdressPage";
import Payment from "../Pages/Payment";
import OrderDetails from "../Pages/OrderDetails";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:category" element={<ProductCollection />} />
        <Route path="/products/:category/:id" element={<SingleProduct />} />
        <Route path="/address" element={<AdressPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
