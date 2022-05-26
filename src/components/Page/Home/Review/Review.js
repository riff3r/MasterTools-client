import React, { useEffect, useState } from "react";
import axios from "axios";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  const [rating, setRating] = useState(4);

  useEffect(() => {
    axios
      .get("https://peaceful-lowlands-36792.herokuapp.com/review")
      .then((res) => setReviews(res.data));
  }, []);

  console.log(reviews);
  return (
    <div className="container mx-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {reviews?.map((review) => (
          <div key={review._id} className="shadow-lg p-10">
            <h3 className="text-center font-bold text-xl">{review.name}</h3>

            <div className="flex justify-center py-5">
              <div className="rating rating-md">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
              </div>
            </div>

            <div className="h-3 text-3xl text-left text-gray-600">“</div>
            <p className="px-4 text-sm text-center text-gray-600">
              {review.description}
            </p>
            <div className="h-3 text-3xl text-right text-gray-600">”</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
