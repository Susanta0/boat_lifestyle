import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${product.category}/${product._id}`)}
      key={product._id || product.id}
      className="flex items-center border-b border-gray-100 py-2 hover:bg-gray-50"
    >
      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded">
        <img
          src={product.image || "/api/placeholder/48/48"}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="ml-3 flex-1">
        <p className="text-sm font-medium text-gray-800 truncate">
          {product.name}
        </p>
      </div>
    </div>
  );
};

export default SearchResult;
