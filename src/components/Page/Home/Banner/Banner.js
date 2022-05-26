import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="md:hero md:h-[600px]"
        style={{
          backgroundImage: `url(
            "https://baumeister.qodeinteractive.com/wp-content/uploads/2017/11/h9-parallax-1.jpg"
          )`,
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-8xl font-bold text-base-100">
              NEED NEW TOOLS?
            </h1>

            <button className="btn btn-primary text-base-100">See More</button>
          </div>
        </div>
      </div>
      {/* <img src={banner} alt="" /> */}
    </div>
  );
};

export default Banner;
