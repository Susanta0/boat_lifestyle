import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import axios from "axios";
import { AuthContex } from "../../Context/AuthContextProvider";

const Login = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  // context api
  const { loginStatus, userLogin, userLogout } = useContext(AuthContex);

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
      setIsLoginOpen(false);
      userLogin(token, userName);

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

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center p-4 z-50">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/final-loader.gif?v=1670845994"
              alt="boat-gif"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="relative">
            <FaRegUser
              onClick={handleUserIconClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="h-5 w-5 cursor-pointer"
            />
            {loginStatus.isLoggedIn && showTooltip && (
              <div
                className="absolute z-50 top-7 right-0 bg-gray-800 text-white text-sm py-1 px-2 rounded shadow-lg whitespace-nowrap"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div>{loginStatus.userName}</div>
                <button
                  onClick={handleLogout}
                  className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Registration Modal */}
          {isRegisterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg w-full mb:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl relative">
                {/* Close button */}
                <button
                  onClick={() => setIsRegisterOpen(false)}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
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

                {/* Modal content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Register</h2>
                  <form onSubmit={handleRegisterSubmit} className="space-y-4">
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Login Modal */}
          {isLoginOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg w-full mb:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl relative">
                {/* Close button */}
                <button
                  onClick={() => setIsLoginOpen(false)}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
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

                {/* Modal content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Login</h2>
                  <form className="space-y-4" onSubmit={handleLoginSubmit}>
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                      Login
                    </button>
                  </form>
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
