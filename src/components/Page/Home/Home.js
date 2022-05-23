import React from "react";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import HomeProducts from "./HomeProducts/HomeProducts";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeProducts />
      <BusinessSummary />
      <Review />
    </div>
  );
};

export default Home;
