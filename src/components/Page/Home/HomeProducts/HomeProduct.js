import React from "react";
import { Link } from "react-router-dom";

const HomeProduct = ({ product }) => {
  const { title, url: image, description, _id, price, quantity, moq } = product;
  return (
    <div class="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex justify-between">
          <h2 class="text-xl">Price: ${price}</h2>
          <h2 class="text-xl">Quantity: {quantity}</h2>
        </div>

        <h2 class="text-xl">Minimum Order Quantity: {moq}</h2>
        <div class="card-actions justify-center">
          <Link to={`/purchase/${_id}`} class="btn btn-primary btn-wide">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
