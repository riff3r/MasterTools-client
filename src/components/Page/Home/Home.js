import React from "react";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import HomeOffer from "./HomeOffer";
import HomeProducts from "./HomeProducts/HomeProducts";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeOffer />
      <HomeProducts />
      <div className="container mx-auto mt-36 mb-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 item-center justify-center">
          <img
            src="https://baumeister.qodeinteractive.com/wp-content/uploads/2017/11/h5-client-5.png"
            alt=""
          />
          <img
            src="https://baumeister.qodeinteractive.com/wp-content/uploads/2017/11/h5-client-1.png"
            alt=""
          />
          <img
            src="https://baumeister.qodeinteractive.com/wp-content/uploads/2017/11/h5-client-2.png"
            alt=""
          />
          <img
            src="https://baumeister.qodeinteractive.com/wp-content/uploads/2017/11/h5-client-4.png"
            alt=""
          />
        </div>
      </div>
      <BusinessSummary />
      <Review />
    </div>
  );
};

export default Home;
