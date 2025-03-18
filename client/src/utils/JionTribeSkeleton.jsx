import React from "react";

const JionTribeSkeleton = () => {
  return (
    <div className="flex flex-col border rounded-lg animate-pulse">
      <div className="relative">
        {/* Video placeholder */}
        <div className="bg-gray-200 w-[238.4px] h-[409.2px] rounded-tr-lg rounded-tl-lg rounded-bl-sm rounded-br-sm"></div>
        {/* Image placeholder */}
        <div className="h-[50px] w-[50px] bg-gray-300 border rounded-sm absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      {/* Name placeholder */}
      <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mt-12"></div>
      {/* Price placeholder */}
      <div className="flex justify-center space-x-2 py-4">
        <div className="h-5 bg-gray-200 rounded w-12"></div>
        <div className="h-5 bg-gray-200 rounded w-16"></div>
        <div className="h-5 bg-gray-200 rounded w-14"></div>
      </div>
    </div>
  );
};

export default JionTribeSkeleton;
