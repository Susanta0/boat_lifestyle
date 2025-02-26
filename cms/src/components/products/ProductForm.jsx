import React from 'react';

const ProductForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
      
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name *
            </label>
            <input
              type="text"
              name="name"
              value="Wireless Earbuds Pro"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
          
          {/* Image URL */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL *
            </label>
            <input
              type="text"
              name="image"
              value="https://example.com/images/earbuds-pro.jpg"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
          
          {/* Description */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              name="description"
              value="Premium wireless earbuds with active noise cancellation, deep bass, and crystal-clear sound. IPX7 waterproof rating and ergonomic design for comfort during long listening sessions."
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              readOnly
            ></textarea>
          </div>
          
          {/* Playback Hours */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Playback Hours *
            </label>
            <input
              type="number"
              name="playbackHours"
              value="24"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
          
          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating (0-5)
            </label>
            <input
              type="number"
              name="rating"
              value="4.7"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
          
          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price *
            </label>
            <input
              type="number"
              name="price"
              value="99.99"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
          
          {/* Before Offer Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Before Offer Price *
            </label>
            <input
              type="number"
              name="beforeOfferPrice"
              value="149.99"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
          
          {/* Discount Percentage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Discount Percentage *
            </label>
            <input
              type="number"
              name="discountPercentage"
              value="33.3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
          
          {/* Stock */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock *
            </label>
            <input
              type="number"
              name="stock"
              value="250"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
          
          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <input
              type="text"
              name="category"
              value="True Wireless Earbuds"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
          
          {/* Colors */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Colors * (Exactly 2 colors required)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Color 1 */}
              <div className="border p-3 rounded-md">
                <div className="mb-2">
                  <label className="block text-xs text-gray-500">Color 1 Name</label>
                  <input
                    type="text"
                    value="Black"
                    className="w-full px-3 py-1 border rounded-md"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Color 1 Code</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value="#000000"
                      className="w-full px-3 py-1 border rounded-md"
                      readOnly
                    />
                    <div
                      className="ml-2 w-6 h-6 border rounded"
                      style={{ backgroundColor: "#000000" }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Color 2 */}
              <div className="border p-3 rounded-md">
                <div className="mb-2">
                  <label className="block text-xs text-gray-500">Color 2 Name</label>
                  <input
                    type="text"
                    value="White"
                    className="w-full px-3 py-1 border rounded-md"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Color 2 Code</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value="#FFFFFF"
                      className="w-full px-3 py-1 border rounded-md"
                      readOnly
                    />
                    <div
                      className="ml-2 w-6 h-6 border rounded"
                      style={{ backgroundColor: "#FFFFFF" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-2 mt-4">
            <button
              type="button"
              className="px-6 py-2 bg-blue-600 text-white rounded-md"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;