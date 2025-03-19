import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { BoatLoading } from "../ProductCardSkeleton";

const Login = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  // context api
  const { loginStatus, userLogin, userLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  // for register
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // for login
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // state change for register
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // state change for login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Open login dialog when user clicks the icon
  const handleUserIconClick = () => {
    if (!loginStatus.isLoggedIn) {
      setIsLoginOpen(true);
    }
  };

  // register data submit
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios({
        method: "POST",
        url: "https://boat-lifestyle-server.onrender.com/api/users/register",
        headers: { "Content-Type": "application/json" },
        data: {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
      });
      console.log(response.data);
      setIsRegisterOpen(false);
      // Clear registration form
      setFormData({ name: "", email: "", password: "" });

      // Show login dialog after successful registration
      setTimeout(() => {
        setIsLoading(false);
        setLoginData({ email: formData.email, password: "" }); // Pre-fill email
        setIsLoginOpen(true);
      }, 1000);
    } catch (error) {
      console.error("Registration failed:", error);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  // login data submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios({
        method: "POST",
        url: "https://boat-lifestyle-server.onrender.com/api/users/login",
        headers: { "Content-Type": "application/json" },
        data: {
          email: loginData.email,
          password: loginData.password,
        },
      });

      const userName = response.data.name || response.data.user.name;
      const token = response.data.token;
      const userId = response.data.id;
      setIsLoginOpen(false);
      userLogin(token, userName, userId);

      // Clear login form
      setLoginData({ email: "", password: "" });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Login failed:", error);
      // Close login dialog and open register dialog on failed login
      setIsLoginOpen(false);
      setTimeout(() => {
        setIsLoading(false);
        setFormData({ name: "", email: loginData.email, password: "" });
        setIsRegisterOpen(true);
      }, 1000);
    }
  };

  const handleLogout = () => {
    userLogout();
    setShowTooltip(false);
  };

  let tooltipTimeout;

  const handleMouseEnter = () => {
    clearTimeout(tooltipTimeout);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    tooltipTimeout = setTimeout(() => {
      setShowTooltip(false);
    }, 300);
  };

  // Toggle between login and register form
  const toggleForm = (isRegister) => {
    if (isRegister) {
      setIsLoginOpen(false);
      setIsRegisterOpen(true);
    } else {
      setIsRegisterOpen(false);
      setIsLoginOpen(true);
    }
  };

  return (
    <>
      {isLoading ? (
        <BoatLoading />
      ) : (
        <>
          <div className="relative">
            <FaRegUser
              onClick={handleUserIconClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-200"
            />
            {loginStatus.isLoggedIn && showTooltip && (
              <div
                className="absolute z-50 top-8 right-0 bg-white border border-gray-200 rounded-lg shadow-xl w-56 mb:w-64 py-3 px-4"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center space-x-2 pb-3 border-b border-gray-200">
                  <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <FaRegUser className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="font-medium text-gray-800 truncate">
                    {loginStatus.userName}
                  </div>
                </div>

                <div className="pt-3 space-y-2">
                  <button
                    onClick={() => navigate("/orderdetails")}
                    className="w-full flex items-center text-left py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-gray-700">Order Details</span>
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 rounded-md transition-colors duration-200 flex items-center justify-center"
                  >
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Combined Login/Register Modal with Left Side Content */}
          {(isLoginOpen || isRegisterOpen) && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 mb:p-3 sm:p-4 z-50">
              <div className="bg-white rounded-lg w-full max-w-xl mb:max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl relative flex flex-col md:flex-row overflow-hidden">
                {/* Close button */}
                <button
                  onClick={() => {
                    setIsLoginOpen(false);
                    setIsRegisterOpen(false);
                  }}
                  className="absolute right-2 top-2 mb:right-3 mb:top-3 sm:right-4 sm:top-4 text-gray-500 hover:text-gray-700 z-10"
                >
                  <svg
                    className="w-5 h-5 mb:w-6 mb:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Left side content (brand and benefits) - Hidden on small screens */}
                <div className="hidden md:block w-1/2 bg-gradient-to-br from-blue-50 to-gray-200 p-4 md:p-6 lg:p-8  flex-col items-center justify-center">
                  <div className="w-full max-w-xs mx-auto">
                    {/* Brand logo */}
                    <div className="mb-4 md:mb-6 lg:mb-8 flex justify-center">
                      <img
                        className="h-14 md:h-16 lg:h-20 w-auto"
                        src="https://d1nl4izteao6lk.cloudfront.net/uploads/1717587342763_logo%20png_.png"
                        alt="Brand Logo"
                      />
                    </div>

                    {/* Welcome text */}
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-8 lg:mb-10 text-center text-gray-800">
                      Welcome! Register to avail the best deals!
                    </h2>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                      <div className="bg-white bg-opacity-80 p-3 md:p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-opacity-100">
                        <div className="flex items-center">
                          <div className="h-8 md:h-10 w-8 md:w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <img
                              className="h-4 md:h-5 w-4 md:w-5"
                              src="https://d1nl4izteao6lk.cloudfront.net/uploads/1717587342763_logo%20png_.png"
                              alt=""
                            />
                          </div>
                          <p className="font-medium text-sm md:text-base text-gray-700">
                            1 Year Warranty
                          </p>
                        </div>
                      </div>

                      <div className="bg-white bg-opacity-80 p-3 md:p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-opacity-100">
                        <div className="flex items-center">
                          <div className="h-8 md:h-10 w-8 md:w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <img
                              className="h-4 md:h-5 w-4 md:w-5"
                              src="https://d1nl4izteao6lk.cloudfront.net/uploads/1717587342763_logo%20png_.png"
                              alt=""
                            />
                          </div>
                          <p className="font-medium text-sm md:text-base text-gray-700">
                            7 Days Replacement
                          </p>
                        </div>
                      </div>

                      <div className="bg-white bg-opacity-80 p-3 md:p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-opacity-100">
                        <div className="flex items-center">
                          <div className="h-8 md:h-10 w-8 md:w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <img
                              className="h-4 md:h-5 w-4 md:w-5"
                              src="https://d1nl4izteao6lk.cloudfront.net/uploads/1717587342763_logo%20png_.png"
                              alt=""
                            />
                          </div>
                          <p className="font-medium text-sm md:text-base text-gray-700">
                            Free Shipping
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side content (login/register) - Full width on small screens */}
                <div className="w-full md:w-1/2 p-4 mb:p-5 sm:p-6 md:p-8 flex flex-col justify-center bg-white">
                  {/* Condensed logo and benefits for small screens */}
                  <div className="md:hidden mb-4 flex flex-col items-center">
                    <img
                      className="h-12 mb:h-14 w-auto mb-2 mb:mb-3"
                      src="https://d1nl4izteao6lk.cloudfront.net/uploads/1717587342763_logo%20png_.png"
                      alt="Brand Logo"
                    />
                    <h2 className="text-base mb:text-lg font-bold mb-3 text-center text-gray-800">
                      Welcome to boAt!
                    </h2>
                    <div className="flex justify-center space-x-2 mb:space-x-3 mb-1">
                      <div className="bg-blue-50 p-2 rounded-md text-xs mb:text-sm text-center text-gray-700">
                        1 Year Warranty
                      </div>
                      <div className="bg-blue-50 p-2 rounded-md text-xs mb:text-sm text-center text-gray-700">
                        7 Days Replacement
                      </div>
                      <div className="bg-blue-50 p-2 rounded-md text-xs mb:text-sm text-center text-gray-700">
                        Free Shipping
                      </div>
                    </div>
                  </div>

                  <div className="max-w-sm mb:max-w-md mx-auto w-full">
                    {/* Login form */}
                    {isLoginOpen && (
                      <>
                        <h2 className="text-lg mb:text-xl md:text-2xl font-bold mb-3 mb:mb-4 md:mb-6 text-gray-800">
                          Login
                        </h2>
                        <form
                          className="space-y-3 md:space-y-4"
                          onSubmit={handleLoginSubmit}
                        >
                          <div>
                            <label
                              htmlFor="loginEmail"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Email
                            </label>
                            <input
                              id="loginEmail"
                              name="email"
                              type="email"
                              required
                              value={loginData.email}
                              onChange={handleLoginChange}
                              className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="loginPassword"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Password
                            </label>
                            <input
                              id="loginPassword"
                              name="password"
                              type="password"
                              required
                              value={loginData.password}
                              onChange={handleLoginChange}
                              className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                              placeholder="Enter your password"
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow"
                          >
                            Login
                          </button>
                        </form>
                        <p className="mt-4 text-center text-gray-600 text-sm md:text-base">
                          Don't have an account?{" "}
                          <button
                            onClick={() => toggleForm(true)}
                            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                          >
                            Register
                          </button>
                        </p>
                      </>
                    )}

                    {/* Register form */}
                    {isRegisterOpen && (
                      <>
                        <h2 className="text-lg mb:text-xl md:text-2xl font-bold mb-3 mb:mb-4 md:mb-6 text-gray-800">
                          Register
                        </h2>
                        <form
                          onSubmit={handleRegisterSubmit}
                          className="space-y-3 md:space-y-4"
                        >
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Name
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                              placeholder="Enter your name"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Email
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Password
                            </label>
                            <input
                              id="password"
                              name="password"
                              type="password"
                              required
                              value={formData.password}
                              onChange={handleInputChange}
                              className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                              placeholder="Create a password"
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow"
                          >
                            Register
                          </button>
                        </form>
                        <p className="mt-4 text-center text-gray-600 text-sm md:text-base">
                          Already have an account?{" "}
                          <button
                            onClick={() => toggleForm(false)}
                            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                          >
                            Login
                          </button>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Login;
