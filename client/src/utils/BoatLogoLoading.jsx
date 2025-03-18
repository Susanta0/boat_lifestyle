import React from "react";

const BoatLogoLoading = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center p-4 z-50">
      <div className="flex flex-col items-center space-y-4">
        <img
          className="h-20 w-20"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/final-loader.gif?v=1670845994"
          alt="boat-gif"
        />
      </div>
    </div>
  );
};

export default BoatLogoLoading;
