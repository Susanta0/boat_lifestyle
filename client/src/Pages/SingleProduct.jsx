import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";
import { BoatLoading } from "../Components/ProductCardSkeleton";
import { AuthContext } from "../Context/AuthContextProvider";
import { ToastContainer, toast } from "react-toastify";

const SingleProduct = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState("popular");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { loginStatus } = useContext(AuthContext);
  const navigate = useNavigate();
  const [deliveryPin, setDeliveryPin] = useState("122008");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios({
          method: "GET",
          url: `https://boat-lifestyle-server.onrender.com/api/products/category/${category}/${id}`,
        });
        setProduct(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [category, id]);

  // Get product images from the API response
  const productImages = product.images || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const getColorStyle = (colorName) => {
    switch (colorName.toLowerCase()) {
      case "black":
        return "bg-black";
      case "blue":
        return "bg-blue-500";
      case "gray":
        return "bg-gray-500";
      case "white":
        return "bg-[#FFFFFF]";
      case "yellow":
        return "bg-[#FCC50B]";
      case "till":
        return "bg-[#85C2AA]";
      case "green":
        return "bg-[#08C88F]";
      default:
        return "bg-gray-200";
    }
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [productImages]);

  const categoryToModelMap = {
    "True Wireless Earbuds": "TrueWireless",
    Neckbands: "Neckband",
    "Smart Watches": "SmartWatch",
    Nirvana: "Nirvana",
    "Wireless Headphones": "WirelessHeadphones",
    "Wireless Speakers": "WirelessSpeakers",
    "Wired Headphones": "WiredHeadphones",
    "Wired Earphones": "WiredEarphones",
    Soundbars: "Soundbar",
    "Gaming Headphones": "GamingHeadphones",
  };

  const addToCart = async () => {
    if (!loginStatus.token) {
      toast("Please log in to add items to the cart.");
      return;
    }
    try {
      const response = await axios({
        method: "POST",
        url: `https://boat-lifestyle-server.onrender.com/api/carts`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loginStatus.token}`,
        },
        data: {
          products: [
            {
              productId: product._id,
              name: product.name,
              category: product.category,
              price: product.price,
              beforeOfferPrice: product.beforeOfferPrice,
              image: product.image,
              quantity: 1,
              onModel: categoryToModelMap[product.category], // Map category to model
            },
          ],
        },
      });
      console.log("Product added to cart:", response.data);
    } catch (error) {
      toast("Error adding product to cart.");
      console.error("Error adding product to cart:", error);
    }
  };

  const buyNow = async () => {
    if (!loginStatus.token) {
      toast("Please log in to proceed with the purchase.");
      return;
    }
    try {
      await addToCart(); // Reuse the addToCart function
      navigate("/address"); // Redirect to the cart page
    } catch (error) {
      console.error("Error during buy now process:", error);
    }
  };

  const handlePinChange = (e) => {
    setDeliveryPin(e.target.value);
  };

  if (loading) {
    return <BoatLoading />;
  }

  return (
    <>
      <ToastContainer />
      <div className="mt-36 max-w-6xl mx-auto bg-gray-50 p-4 md:p-6">
        {/* Product Image and Details Section */}
        <div className="flex flex-col md:flex-row mb-8">
          {/* Thumbnails - Visible on md and larger screens */}
          <div className="hidden md:flex flex-col gap-2 mr-4">
            {productImages.slice(0, 5).map((image, index) => (
              <div
                key={index}
                className={`border cursor-pointer w-20 h-20 ${
                  currentImageIndex === index
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => selectImage(index)}
              >
                <img
                  src={image}
                  alt={`Product thumbnail ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Product Image with Navigation Arrows */}
          <div className="relative bg-white flex-grow mb-4 md:mb-0">
            <div className="relative h-80 sm:h-96 md:h-[400px] lg:h-[500px] transition-all duration-500 ease-in-out">
              {productImages.length > 0 ? (
                <img
                  src={productImages[currentImageIndex]}
                  alt="Product"
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={product.image}
                  alt="Product"
                  className="w-full h-full object-contain"
                />
              )}
              {/* Navigation Arrows - Only show if multiple images exist */}
              {productImages.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white"
                    onClick={prevImage}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white"
                    onClick={nextImage}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Mobile Thumbnails - Only visible on smaller screens */}
            <div className="flex md:hidden justify-center gap-2 mt-4">
              {productImages.slice(0, 5).map((image, index) => (
                <div
                  key={index}
                  className={`border cursor-pointer w-12 h-12 ${
                    currentImageIndex === index
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => selectImage(index)}
                >
                  <img
                    src={image}
                    alt={`Product thumbnail ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Section - Right Side */}
          <div className="md:w-1/2 md:ml-6 lg:ml-8 overflow-y-auto max-h-[500px]">
            {/* Basic Product Information - Added from the removed section */}
            <div className="px-2 w-full mb-6">
              <div className="flex items-center">
                <FaStar className="h-4 w-4 text-[#FCC50B]" />
                <span className="text-[12px] mt-1">{product.rating}</span>
                <span className="mx-1 text-gray-400">|</span>
                <span className="text-sm text-gray-600">32</span>
                <img
                  className="w-3 h-3"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mask_group-10.png?v=1677571152"
                  alt=""
                />
              </div>
              <h1 className="text-2xl font-extrabold mt-4">{product.name}</h1>
              <span className="text-sm text-[#5F656B] mt-2 block">
                {product.description}
              </span>
              <div className="flex items-center justify-between w-full mt-4">
                <div className="flex items-center">
                  <p className="font-bold text-xl">₹{product.price}</p>
                  <span className="ml-3 text-[15px] text-[#B2C4DA] space-x-1">
                    <span className="line-through">
                      {product.beforeOfferPrice}{" "}
                    </span>
                    <span>
                      <b className="text-[#12B985]">
                        {product.discountPercentage}% off
                      </b>
                    </span>
                  </span>
                </div>
              </div>
              <div className="border px-2 py-2 rounded-lg flex items-center justify-between mt-4 border-[#FFF2CC] bg-[#FFF2CC]">
                <p className="text-sm">Get a silicone case @ ₹29</p>
                <p className="text-[#32558C] text-sm">know more</p>
              </div>
              {/* Render colors */}
              <div className="mt-4">
                <p className="text-lg font-semibold">Choose your colour:</p>
                <div className="flex gap-2 mt-2">
                  {product.colors?.map((color) => (
                    <div key={color._id} className="flex items-center gap-1">
                      <span
                        className={`block w-4 h-4 border border-gray-400 ${getColorStyle(
                          color.name
                        )}`}
                      ></span>
                      <p className="text-sm">{color.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Make Your Product Personalised Section */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold mb-1">
                  Make Your Product Personalised
                </h2>
                <p className="text-blue-700">
                  Get A Customized Engraving And Make It Unmistakably Yours.
                </p>
              </div>
              <div className="text-gray-800">
                <img
                  className="w-[34px] h-[28px]"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Layer_1_3.png?v=1730964519"
                  alt=""
                />
              </div>
            </div>

            {/* Check Delivery Section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Check Delivery</h2>
              <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <input
                      type="text"
                      value={deliveryPin}
                      onChange={handlePinChange}
                      className="border-b-2 border-gray-300 bg-transparent py-1 w-24 focus:outline-none"
                    />
                    <button className="bg-black text-white px-4 py-1 rounded-md ml-4">
                      Change
                    </button>
                  </div>
                  <p className="text-green-500 font-medium">
                    Free delivery | By Saturday, 15 Mar
                  </p>
                </div>
                <div className="ml-4">
                  <img
                    className="w-[34px] h-[25px]"
                    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Layer_1_2_da487286-f7ce-4762-87ca-5e9ebebbc3b5.png?v=1730964519"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Users' Love Section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Users' Love</h2>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-medium mb-2">
                    75 Lacs+ units sold on Flipkart
                  </p>
                  <div className="flex items-center">
                    <p className="font-medium">8 Lacs+ 5</p>
                    <span className="text-yellow-400 mx-1">★</span>
                    <p className="font-medium">reviews</p>
                  </div>
                </div>
                <div className="ml-4">
                  <img
                    className="w-[34px] h-[34px]"
                    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Active Offers Section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Active Offers</h2>
              <div className="flex flex-col sm:flex-row gap-3 justify-between">
                {/* First Offer Card */}
                <div
                  className={`border rounded-lg bg-green-50 border-green-200 flex-1 mb-2 sm:mb-0 ${
                    selectedOffer === "popular" ? "border-green-400" : ""
                  }`}
                  onClick={() => setSelectedOffer("popular")}
                >
                  <div className="p-4 flex flex-col items-center">
                    <p className="font-medium text-center mb-2">
                      More than
                      <br />2 Items
                    </p>
                    <div className="w-full border-t border-dashed border-gray-300 my-2"></div>
                    <p className="text-blue-600 font-medium mb-2">Get 5% Off</p>
                    <p className="text-lg font-bold">
                      ₹711
                      <span className="text-gray-400 text-sm font-normal">
                        /item
                      </span>
                    </p>
                  </div>
                  <div className="bg-green-500 text-white py-1 px-2 text-center text-sm font-medium rounded-b-lg">
                    MOST POPULAR
                  </div>
                </div>

                {/* Second Offer Card */}
                <div
                  className={`border rounded-lg bg-green-50 border-green-200 flex-1 mb-2 sm:mb-0 ${
                    selectedOffer === "value" ? "border-green-400" : ""
                  }`}
                  onClick={() => setSelectedOffer("value")}
                >
                  <div className="p-4 flex flex-col items-center">
                    <p className="font-medium text-center mb-2">
                      More than
                      <br />5 Items
                    </p>
                    <div className="w-full border-t border-dashed border-gray-300 my-2"></div>
                    <p className="text-blue-600 font-medium mb-2">Get 7% Off</p>
                    <p className="text-lg font-bold">
                      ₹696
                      <span className="text-gray-400 text-sm font-normal">
                        /item
                      </span>
                    </p>
                  </div>
                  <div className="bg-gray-800 text-white py-1 px-2 text-center text-sm font-medium rounded-b-lg">
                    BEST VALUE
                  </div>
                </div>

                {/* Third Offer Card */}
                <div
                  className={`border rounded-lg bg-green-50 border-green-200 flex-1 ${
                    selectedOffer === "savings" ? "border-green-400" : ""
                  }`}
                  onClick={() => setSelectedOffer("savings")}
                >
                  <div className="p-4 flex flex-col items-center">
                    <p className="font-medium text-center mb-2">
                      More than
                      <br />
                      10 Items
                    </p>
                    <div className="w-full border-t border-dashed border-gray-300 my-2"></div>
                    <p className="text-blue-600 font-medium mb-2">
                      Get 10% Off
                    </p>
                    <p className="text-lg font-bold">
                      ₹674
                      <span className="text-gray-400 text-sm font-normal">
                        /item
                      </span>
                    </p>
                  </div>
                  <div className="bg-gray-800 text-white py-1 px-2 text-center text-sm font-medium rounded-b-lg">
                    MOST SAVINGS
                  </div>
                </div>
              </div>
            </div>

            {/* Rewards and Payment Offers Section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">
                Rewards and Payment Offers
              </h2>
              <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                <p className="font-medium">
                  Redeem upto 10% off additionally with boAt rewards
                </p>
                <div className="ml-4">
                  <img
                    className="w-[44px] h-[44px]"
                    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_Rewards_logo.png?v=1694079279"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Add to Cart and Buy Now Section */}
            <div className="mt-6">
              <div className="bg-green-500 text-white py-2 text-center rounded-t-lg">
                Personalise your product
              </div>
              <div className="flex gap-3 mt-2">
                <button
                  className="flex-1 bg-gray-800 text-white py-3 px-4 rounded-lg font-medium"
                  onClick={addToCart}
                >
                  Add To Cart
                </button>
                <button
                  className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg font-medium"
                  onClick={buyNow}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
