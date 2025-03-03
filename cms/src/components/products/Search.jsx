import React from "react";

const Search = () => {
  return (
    <div class="max-w-md mx-auto my-4">
      <div class="relative flex items-center">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            class="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        <input
          type="text"
          class="w-full pl-10 pr-4 py-2 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          placeholder="Search for products..."
        />

        <button
          type="button"
          class="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
