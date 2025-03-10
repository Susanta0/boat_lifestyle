import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Protect from "../protectRoute/Protect";
import UserDetails from "../pages/UserDetails";
import EachCategoriesProducts from "../components/products/EachCategoriesProducts";
import ProductForm from "../pages/ProductForm";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Protect>
              <Dashboard />
            </Protect>
          }
        />
        <Route
          path="/userdetails"
          element={
            <Protect>
              <UserDetails />
            </Protect>
          }
        />
        <Route
          path="/products/:category"
          element={
            <Protect>
              <EachCategoriesProducts />
            </Protect>
          }
        />
        <Route
          path="/products/admin/:category"
          element={
            <Protect>
              <ProductForm />
            </Protect>
          }
        />
        <Route
          path="/products/admin/:category/edit/:id"
          element={
            <Protect>
              <ProductForm />
            </Protect>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
