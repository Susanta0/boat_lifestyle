import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import UserList from "../components/users/userList";
import { Navigate, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("users");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { loginStatus, userLogout } = useContext(AuthContext);
const navigate=useNavigate()
  const handleLogout = () => {
    userLogout();
    setIsMenuOpen(false);
  }

  const userDetailsNavigate=()=>{
    return navigate('/userdetails')
  }

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
                    <button onClick={userDetailsNavigate} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
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
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-lg mb-4">Products List</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Product A</td>
                    <td className="px-6 py-4 whitespace-nowrap">$99.99</td>
                    <td className="px-6 py-4 whitespace-nowrap">250</td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Product B</td>
                    <td className="px-6 py-4 whitespace-nowrap">$149.99</td>
                    <td className="px-6 py-4 whitespace-nowrap">124</td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      Edit
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
