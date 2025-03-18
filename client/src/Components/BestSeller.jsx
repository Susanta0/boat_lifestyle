import React, { useEffect, useState } from "react";
import ProductsNameViewAll from "./ProductsNameViewAll";
import { useNavigate } from "react-router-dom";
import { categoriesVideos } from "../utils/categoriesImages";
import axios from "axios";
import VideoCarouselSkeleton from "../utils/VideoCarouselSkeleton";

const BestSeller = () => {
  const navigate = useNavigate();
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        setLoading(true);
        const response = await axios({
          method: "GET",
          url: "https://boat-lifestyle-server.onrender.com/api/products/categories",
        });
        setCategoriesData(response.data);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoriesData();
  }, []);

  // Function to find matching image for a category
  const getCategoryVideo = (categoryName) => {
    const categoryVideo = categoriesVideos.find(
      (item) => item.title.toLowerCase() === categoryName.toLowerCase()
    );

    // Return the found image or a default image if not found
    return categoryVideo ? categoryVideo.image : categoriesVideos[4].image;
  };

  return (
    <>
      <ProductsNameViewAll
        text1="Explore"
        // text2="by"
        text3="Bestsellers"
        text4="View All"
      />
      {loading ? (
        <VideoCarouselSkeleton />
      ) : (
        <div className="introvideo mt-5 flex items-center justify-between gap-x-2 overflow-x-scroll w-[93%] m-auto">
          {categoriesData.slice(0, 5).map((categoryName, ind) => (
            <div
              key={ind}
              className="flex flex-col items-center"
              onClick={() => navigate(`/collection/${categoryName}`)}
            >
              <video
                muted
                className="max-w-[320px] rounded-xl"
                src={getCategoryVideo(categoryName)}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              ></video>
              <p className="font-extrabold text-base">{categoryName}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BestSeller;
