import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Protect from "../protectRoute/Protect";
import UserDetails from "../pages/UserDetails";

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
      </Routes>
    </>
  );
};

export default AllRoutes;
