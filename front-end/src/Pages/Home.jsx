import React from "react";
import Hero from "../component/Hero";
import LatestCollection from "../component/LatestCollection";
import BestSeller from "../component/BestSeller";
import Policy from "../component/Policy";
import NewsLettersBox from "../component/NewsLettersBox";
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <NewsLettersBox />
    </div>
  );
};

export default Home;
