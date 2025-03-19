import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import SocialMedia from "../Components/Footer/SocialMedia";

const AdressPage = () => {
  const [address, setAddress] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  });
  const [savedAddresses, setSavedAddresses] = useState([]);
  const { loginStatus } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSavedAddresses = async () => {
      try {
        const response = await axios.get(
          "https://boat-lifestyle-server.onrender.com/api/address",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${loginStatus.token}`,
            },
          }
        );
        setSavedAddresses(response.data);
      } catch (error) {
        console.error("Error fetching saved addresses:", error);
      }
    };

    fetchSavedAddresses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://boat-lifestyle-server.onrender.com/api/address",
        address,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loginStatus.token}`,
          },
        }
      );
      navigate("/payment", { state: { totalAmount: 100 } }); // Pass the total amount to the payment page
    } catch (error) {
      console.error("Error submitting address:", error);
    }
  };

  const handleSelectAddress = (selectedAddress) => {
    navigate("/payment", {
      state: { totalAmount: 100, address: selectedAddress },
    });
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4 mb:p-6 mt-48">
        <h2 className="text-xl mb:text-2xl font-semibold text-gray-800 mb-4 mb:mb-6 border-b pb-2">
          Shipping Address
        </h2>
        {savedAddresses.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Saved Addresses
            </h3>
            {savedAddresses.map((savedAddress) => (
              <div
                key={savedAddress._id}
                className="border p-2 mb-2 cursor-pointer"
                onClick={() => handleSelectAddress(savedAddress)}
              >
                <p>{savedAddress.fullName}</p>
                <p>{savedAddress.addressLine1}</p>
                <p>
                  {savedAddress.city}, {savedAddress.state},{" "}
                  {savedAddress.zipCode}
                </p>
                <p>{savedAddress.country}</p>
                <p>{savedAddress.phoneNumber}</p>
              </div>
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-3 mb:space-y-4">
          <div className="grid grid-cols-1 gap-3 mb:gap-4">
            <div>
              <input
                type="text"
                name="fullName"
                value={address.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-3 mb:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm mb:text-base"
              />
            </div>

            <div>
              <input
                type="text"
                name="addressLine1"
                value={address.addressLine1}
                onChange={handleChange}
                placeholder="Address Line 1"
                required
                className="w-full px-3 mb:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm mb:text-base"
              />
            </div>

            <div>
              <input
                type="text"
                name="addressLine2"
                value={address.addressLine2}
                onChange={handleChange}
                placeholder="Address Line 2"
                className="w-full px-3 mb:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm mb:text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb:gap-4">
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="w-full px-3 mb:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm mb:text-base"
              />

              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                placeholder="State"
                required
                className="w-full px-3 mb:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm mb:text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb:gap-4">
              <input
                type="text"
                name="zipCode"
                value={address.zipCode}
                onChange={handleChange}
                placeholder="Zip Code"
                required
                className="w-full px-3 mb:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm mb:text-base"
              />

              <input
                type="text"
                name="country"
                value={address.country}
                onChange={handleChange}
                placeholder="Country"
                required
                className="w-full px-3 mb:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm mb:text-base"
              />
            </div>

            <div>
              <input
                type="text"
                name="phoneNumber"
                value={address.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-3 mb:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm mb:text-base"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 mb:py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm mb:text-base"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <br />
      <SocialMedia />
    </>
  );
};

export default AdressPage;
