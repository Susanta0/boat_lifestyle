import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { useParams } from "react-router-dom";
import { getInitialSchema } from "../utils/AllCategoriesObjects";

const ProductForm = () => {
  const [loading, setLoading] = useState(false);
  const { category } = useParams();
  const { loginStatus } = useContext(AuthContext);
  const [formData, setFormData] = useState(() => {
    const initialSchema = getInitialSchema(category);
    return {
      ...initialSchema,
      category: category, 
    };
  });

  // Handle basic input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle checkbox inputs
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
      return;
    }
    
    // Handle number inputs
    const updatedValue = type === "number" ? Number(value) : value;
    
    // Handle nested properties
    if (name.includes(".")) {
      const keys = name.split(".");
      const nestedUpdate = { ...formData };
      
      // Navigate to the appropriate nested object
      let current = nestedUpdate;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }
      
      // Set the value
      current[keys[keys.length - 1]] = updatedValue;
      setFormData(nestedUpdate);
    } else {
      // Handle regular properties
      setFormData({
        ...formData,
        [name]: updatedValue,
      });
    }
  };

  // Handle color input changes
  const handleColorChange = (index, field, value) => {
    const updatedColors = [...formData.colors];
    updatedColors[index] = {
      ...updatedColors[index],
      [field]: value,
    };

    setFormData({
      ...formData,
      colors: updatedColors,
    });
  };

  const addData = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: "POST",
        url: `https://boat-lifestyle-server.onrender.com/api/products/${`admin/${category}`}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loginStatus.token}`,
        },
        data: formData,
      });
      setLoading(false);
      // Reset form after successful submission
      setFormData(() => {
        const initialSchema = getInitialSchema(category);
        return {
          ...initialSchema,
          category: category,
        };
      });
      console.log(response);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    addData();
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const {
    name,
    image,
    description,
    playbackHours,
    rating,
    price,
    colors,
    beforeOfferPrice,
    discountPercentage,
    stock,
  } = formData;

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div className="mb-8 border-b pb-4">
        <h2 className="text-3xl font-bold text-gray-800">Add New Product</h2>
        <p className="text-gray-500 mt-2">
          Fill in the details to add a new product to your inventory
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Basic Information
              </h3>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter product name"
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  rows="4"
                  onChange={handleChange}
                  value={description}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter product description"
                ></textarea>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={category}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700"
                  readOnly
                />
                <p className="text-xs text-gray-500 mt-1">
                  Category is automatically set based on the current section
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Pricing Information
              </h3>

              {/* Price Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price (₹) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">₹</span>
                    </div>
                    <input
                      type="number"
                      name="price"
                      onChange={handleChange}
                      value={price}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Before Offer Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Original Price (₹) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">₹</span>
                    </div>
                    <input
                      type="number"
                      name="beforeOfferPrice"
                      onChange={handleChange}
                      value={beforeOfferPrice}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Discount Percentage & Stock */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Discount (%)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">%</span>
                    </div>
                    <input
                      type="number"
                      name="discountPercentage"
                      onChange={handleChange}
                      value={discountPercentage}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stock <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="stock"
                    onChange={handleChange}
                    value={stock}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Additional Specifications
              </h3>

              {/* Charging Case */}
              {formData.chargingCase && (
                <>
                  <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
                    Charging Case
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Battery Life (hrs) *
                      </label>
                      <input
                        type="number"
                        name="chargingCase.batteryLife"
                        value={formData.chargingCase.batteryLife}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type *
                      </label>
                      <input
                        type="text"
                        name="chargingCase.type"
                        value={formData.chargingCase.type}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Noise Control */}
              {'noiseControl' in formData && (
                <div className="mb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="noiseControl"
                      checked={formData.noiseControl}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Noise Control
                    </span>
                  </label>
                </div>
              )}

              {/* Water Resistance */}
              {'waterResistance' in formData && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Water Resistance
                  </label>
                  <input
                    type="text"
                    name="waterResistance"
                    value={formData.waterResistance}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              )}

              {/* Connectivity */}
              {formData.connectivity && formData.connectivity.bluetooth && (
                <>
                  <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
                    Connectivity
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bluetooth Version
                      </label>
                      <input
                        type="text"
                        name="connectivity.bluetooth.version"
                        value={formData.connectivity.bluetooth.version}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Range (m)
                      </label>
                      <input
                        type="number"
                        name="connectivity.bluetooth.range"
                        value={formData.connectivity.bluetooth.range}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Category-specific fields */}
              {formData.driverSize !== undefined && (
                <div className="mb-4 mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Driver Size (mm)
                  </label>
                  <input
                    type="text"
                    name="driverSize"
                    value={formData.driverSize}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              )}

              {formData.displayType !== undefined && (
                <div className="mb-4 mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Display Type
                  </label>
                  <input
                    type="text"
                    name="displayType"
                    value={formData.displayType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Product Image
              </h3>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="image"
                  onChange={handleChange}
                  value={image}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter image URL"
                />
              </div>

              <div className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <div className="flex justify-center">
                  {image ? (
                    <img
                      src={image}
                      alt="Product preview"
                      className="h-40 w-40 object-contain rounded mb-2"
                    />
                  ) : (
                    <div className="h-40 w-40 flex items-center justify-center bg-gray-100 rounded">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Preview will appear here
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Product Specifications
              </h3>

              {/* Playback Hours & Rating */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Playback Hours
                  </label>
                  <input
                    type="number"
                    name="playbackHours"
                    onChange={handleChange}
                    value={playbackHours}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating (0-5)
                  </label>
                  <input
                    type="number"
                    name="rating"
                    onChange={handleChange}
                    value={rating}
                    step="0.1"
                    min="0"
                    max="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Colors */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Available Colors <span className="text-red-500">*</span>
                </label>

                <div className="space-y-4">
                  {/* Color 1 */}
                  <div className="p-4 border border-gray-200 rounded-lg bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">Color 1</span>
                      <div
                        className="inline-flex items-center justify-center h-6 w-6 rounded-full"
                        style={{
                          backgroundColor: colors[0].code || "#FFFFFF",
                          border: colors[0].code ? "none" : "1px solid #d1d5db",
                        }}
                      ></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          value={colors[0].name}
                          onChange={(e) =>
                            handleColorChange(0, "name", e.target.value)
                          }
                          placeholder="Color name"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Color code"
                          value={colors[0].code}
                          onChange={(e) =>
                            handleColorChange(0, "code", e.target.value)
                          }
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Color 2 */}
                  <div className="p-4 border border-gray-200 rounded-lg bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">Color 2</span>
                      <div
                        className="inline-flex items-center justify-center h-6 w-6 rounded-full"
                        style={{
                          backgroundColor: colors[1].code || "#FFFFFF",
                          border: colors[1].code ? "none" : "1px solid #d1d5db",
                        }}
                      ></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          placeholder="Color name"
                          value={colors[1].name}
                          onChange={(e) =>
                            handleColorChange(1, "name", e.target.value)
                          }
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Color code"
                          value={colors[1].code}
                          onChange={(e) =>
                            handleColorChange(1, "code", e.target.value)
                          }
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              "Add Product"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;