import React from "react";
import ImageSlider from "../Components/ImageSlider";
import Fecility from "../Components/Fecility";
import Sale from "../Components/sale";
import DisplayProducts from "../Components/DisplayProducts";
import Categories from "../Components/Categories";
import BestSeller from "../Components/BestSeller";
import TopPicks from "../Components/TopPicks";
import LifeStyle from "../Components/LifeStyle";
import BestOfBoat from "../Components/BestOfBoat";
import JoinTribe from "../Components/JoinTribe";
import Blogs from "../Components/Blogs";
import Press from "../Components/Press";
import Footer1 from "../Components/Footer1";

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
      <br />
      <BestOfBoat/>
      <JoinTribe/>
      <br />
      <Blogs/>
      <br />
      <Press/>
      <br />
      <br />
      <br />
      <Footer1/>
    </>
  );
};

export default Home;
