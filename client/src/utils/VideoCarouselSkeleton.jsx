import React from "react";

const VideoCarouselSkeleton = () => {
  // Create an array of 5 items to match the slice(0, 5) in your original code
  const skeletonItems = Array(5).fill(null);

  return (
    <div className="introvideo mt-5 flex items-center justify-between gap-x-2 overflow-x-scroll w-[93%] m-auto">
      {skeletonItems.map((_, ind) => (
        <div key={ind} className="flex flex-col items-center">
          {/* Skeleton for video element */}
          <div className="max-w-[320px] w-[280px] h-[300px] rounded-xl bg-gray-200 animate-pulse"></div>

          {/* Skeleton for text */}
          <div className="mt-2 h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default VideoCarouselSkeleton;
