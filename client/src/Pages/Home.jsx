import React from "react";
import ImageSlider from "../Components/ImageSlider";
import Fecility from "../Components/Fecility";
import Sale from "../Components/sale";
import DisplayProducts from "../Components/DisplayProducts";
import Categories from "../Components/Categories";
import BestSeller from "../Components/BestSeller";
import TopPicks from "../Components/TopPicks";
import LifeStyle from "../Components/LifeStyle";

const Home = () => {
  return (
    <>
      <ImageSlider />
      <Fecility />
      <Sale />
      <DisplayProducts />
      <Categories />
      <BestSeller />
      <br />
      <TopPicks />
      <br />
      <LifeStyle />
    </>
  );
};

export default Home;
