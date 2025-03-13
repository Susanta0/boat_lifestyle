import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductCollection from "../Pages/ProductCollection";
import SingleProduct from "../Pages/SingleProduct";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:category" element={<ProductCollection />} />
        <Route path="/products/:category/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
