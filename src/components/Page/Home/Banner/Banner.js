import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        class="hero h-[600px]"
        style={{
          backgroundImage: `url(
            "https://baumeister.qodeinteractive.com/wp-content/uploads/2017/11/h9-parallax-1.jpg"
          )`,
        }}
      >
        <div class="hero-overlay bg-opacity-10"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-lg">
            <h1 class="mb-5 text-8xl font-bold text-base-100">
              NEED NEW TOOLS?
            </h1>

            <button class="btn btn-primary text-base-100">See More</button>
          </div>
        </div>
      </div>
      {/* <img src={banner} alt="" /> */}
    </div>
  );
};

export default Banner;
