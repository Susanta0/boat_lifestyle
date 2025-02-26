import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import UserList from "../components/users/userList";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/products/ProductList";
import ProductsCategory from "../components/products/ProductsCategory";
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("users");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { loginStatus, userLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    userLogout();
    setIsMenuOpen(false);
  };

  const userDetailsNavigate = () => {
    return navigate("/userdetails");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        {/* Logo/Brand */}
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <ul>
            <li className="mb-2">
              <button
                onClick={() => setActiveSection("users")}
                className={`flex items-center w-full px-4 py-2 ${
                  activeSection === "users"
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                Users
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setActiveSection("products")}
                className={`flex items-center w-full px-4 py-2 ${
                  activeSection === "products"
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                Products
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header with Admin Profile */}
        <header className="bg-white shadow-sm">
          <div className="px-4 py-3 flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              {activeSection === "users"
                ? "Users Management"
                : "Products Management"}
            </h2>

            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <span className="text-sm font-medium text-gray-700">
                  {loginStatus.userName}
                </span>
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="/public/icons8-user-64.png"
                  alt="Admin profile"
                />
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border">
                  <div className="py-2">
                    <p className="px-4 py-2 text-gray-800 text-sm font-semibold">
                      {loginStatus.userName}
                    </p>
                    <button
                      onClick={userDetailsNavigate}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      Profile Details
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          {activeSection === "users" ? (
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-lg mb-4">Users List</h3>
              <UserList />
            </div>
          ) : (
            <>
              <h3 className="font-semibold text-lg mb-4">Product Categories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <ProductsCategory />
              </div>
              <br />
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-lg mb-4">Products List</h3>
                <ProductList />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
