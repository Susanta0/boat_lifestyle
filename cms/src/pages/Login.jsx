
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import IsLoading from "../components/IsLoading";
const Login = () => {
  const navigate = useNavigate();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  // context api
  const { loginStatus, userLogin, userLogout } = useContext(AuthContext);

  // for register
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    admincode: 321
  });

  // for login
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
  
    if (!loginStatus.isLoggedIn) {
      setIsLoginOpen(true);
    } else {
      
      navigate('/dashboard'); 
    }
  }, [loginStatus.isLoggedIn, navigate]); 

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
          role: formData.role,
          admincode: formData.admincode
        },
      });
      console.log(response.data);
      setIsRegisterOpen(false);
      // Clear registration form
      setFormData({ name: "", email: "", password: "", role: "", admincode: 321 });

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
      userLogin(token, userName);

      setIsLoginOpen(false);

      // Clear login form
      setLoginData({ email: "", password: "" });

      setTimeout(() => {
        setIsLoading(false);
        navigate('/dashboard');
      }, 1000);
    } catch (error) {
      console.error("Login failed:", error);
      // Close login dialog and open register dialog on failed login
      setIsLoginOpen(false);
      setTimeout(() => {
        setIsLoading(false);
        setFormData({ name: "", email: loginData.email, password: "", role: "", admincode: 321 });
        setIsRegisterOpen(true);
      }, 1000);
    }
  };

  return (
    <>
     {isLoading ? (
        <IsLoading/>
      ) : (
        <>
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
                    <div>
                      <label
                        htmlFor="role"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Role</option>
                        <option value="user" disabled={true}>User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                    {formData.role === "admin" && (
                      <div>
                        <label
                          htmlFor="admincode"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Admin Code
                        </label>
                        <input
                          id="admincode"
                          name="admincode"
                          type="number"
                          required
                          value={formData.admincode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    )}
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
                    <div className="text-center mt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setIsLoginOpen(false);
                          setIsRegisterOpen(true);
                        }}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Don't have an account? Register
                      </button>
                    </div>
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