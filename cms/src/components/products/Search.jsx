import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="max-w-md mx-auto my-4">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Search;
