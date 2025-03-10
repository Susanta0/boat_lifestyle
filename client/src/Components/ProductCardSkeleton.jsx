import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="relative">
      <div className="relative rounded">
        {/* Skeleton for "New Launch" tag */}
        <div className="absolute py-[1.5px] px-2 w-20 h-4 bg-gray-200 animate-pulse rounded-tl-xl rounded-tr rounded-br"></div>

        {/* Skeleton for product image */}
        <div className="rounded-xl w-full h-[250px] bg-gray-200 animate-pulse"></div>

        {/* Skeleton for playback and rating bar */}
        <div className="bg-gray-200 animate-pulse absolute bottom-0 w-full flex justify-between items-center px-2 py-2 rounded-bl-lg rounded-br-lg">
          <div className="w-32 h-3 bg-gray-300 rounded"></div>
          <div className="w-12 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Skeleton for product details */}
      <div className="border bg-[#FAFAFA] rounded-b-xl relative bottom-1 -z-10 w-full p-3">
        {/* Skeleton for product name */}
        <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4 mb-3"></div>

        {/* Skeleton for dashed line */}
        <div className="border border-dashed border-gray-200 mb-2"></div>

        {/* Skeleton for price and color options */}
        <div className="mt-2 flex justify-between items-center">
          <div className="h-5 bg-gray-200 animate-pulse rounded w-16"></div>
          <div className="flex items-center space-x-1">
            <div className="bg-gray-300 rounded-full w-4 h-4"></div>
            <div className="bg-gray-400 rounded-full w-4 h-4"></div>
            <div className="bg-gray-300 rounded-full w-8 h-4"></div>
          </div>
        </div>

        {/* Skeleton for original price and discount */}
        <div className="mt-1 flex space-x-2">
          <div className="h-3 bg-gray-200 animate-pulse rounded w-12"></div>
          <div className="h-3 bg-gray-200 animate-pulse rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
