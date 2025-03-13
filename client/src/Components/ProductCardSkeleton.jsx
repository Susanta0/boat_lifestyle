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

export const ItemsCardSkeleton = () => {
  return (
    <div className="relative border flex px-1 pt-1 pb-3 rounded-lg animate-pulse">
      <div className="relative rounded">
        {/* Tag placeholder */}
        <div className="absolute py-[1.5px] px-2 w-24 h-4 bg-gray-200 rounded-tl-xl rounded-tr rounded-br"></div>

        {/* Image placeholder */}
        <div className="rounded-xl w-[280px] h-[171px] bg-gray-200"></div>

        {/* Playback hours placeholder */}
        <div className="bg-gray-200 absolute w-full bottom-0 h-8 rounded-bl-lg rounded-br-lg"></div>
      </div>

      <div className="w-full">
        {/* Rating and bestseller section */}
        <div className="px-2 w-full flex items-center justify-between rounded mt-2">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-8 bg-gray-200 rounded"></div>
          </div>
          <div className="flex items-center rounded-md bg-gray-200 h-6 w-24"></div>
        </div>

        <div className="bg-[#FAFAFA] rounded-b-xl relative bottom-1 -z-10 w-full pt-2">
          {/* Product name placeholder */}
          <div className="pl-3 h-5 w-3/4 bg-gray-200 rounded my-4"></div>

          <div className="mt-2 flex justify-between">
            <div className="flex items-center">
              {/* Price placeholders */}
              <div className="h-5 w-12 bg-gray-200 rounded ml-3"></div>
              <div className="h-3 w-24 bg-gray-200 rounded ml-3"></div>
            </div>

            {/* Color options placeholder */}
            <div className="mr-2 flex items-center space-x-1">
              <div className="bg-gray-200 rounded-full w-4 h-4"></div>
              <div className="bg-gray-200 rounded-full w-4 h-4"></div>
              <div className="h-4 w-6 bg-gray-200 rounded"></div>
            </div>
          </div>

          <div className="ml-3 mr-2 mt-1 border border-solid border-gray-200" />

          {/* Features placeholders */}
          <div className="ml-3 mt-2 flex items-center gap-x-4">
            <div className="h-5 w-28 bg-gray-200 rounded-sm"></div>
            <div className="h-5 w-24 bg-gray-200 rounded-sm"></div>
          </div>
        </div>

        {/* Button placeholder */}
        <div className="bg-gray-200 h-10 w-full mt-1 rounded-lg"></div>
      </div>
    </div>
  );
};
