import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

const Protect = ({ children }) => {
  const { loginStatus } = useContext(AuthContext);
  if (!loginStatus.isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default Protect;
