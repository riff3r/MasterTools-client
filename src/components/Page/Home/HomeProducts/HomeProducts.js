import React from "react";
import PrimaryHeadline from "../../../Layout/PrimaryHeadline/PrimaryHeadline";

const HomeProducts = () => {
  return (
    <div className="container mx-auto">
      <PrimaryHeadline title="Our Products" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* <div class="card lg:card-side bg-base-100 shadow-2xl">
          <figure>
            <img
              src="https://api.lorem.space/image/album?w=400&h=400"
              alt="Album"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>

        <div class="card lg:card-side bg-base-100 shadow-2xl">
          <figure>
            <img
              src="https://api.lorem.space/image/album?w=400&h=400"
              alt="Album"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Listen</button>
            </div>
          </div>
        </div> */}

        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
