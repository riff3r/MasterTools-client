import React from "react";
import { Link } from "react-router-dom";

const HomeProduct = ({ product }) => {
  const { title, url: image, description, _id, price, quantity, moq } = product;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex justify-between">
          <h2 className="text-xl">Price: ${price}</h2>
          <h2 className="text-xl">Quantity: {quantity}</h2>
        </div>

        <h2 className="text-xl">Minimum Order Quantity: {moq}</h2>
        <div className="card-actions justify-center">
          <Link to={`/purchase/${_id}`} className="btn btn-primary btn-wide">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
