import React, { useState } from "react";

const Review = () => {
  const [rating, setRating] = useState(4);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        <div className="shadow-lg p-10">
          <div class="flex flex-wrap justify-center">
            <div class="w-6/12 sm:w-8/12 px-4 mb-5">
              <img
                src="https://i.ibb.co/d613gFq/review-2.jpg"
                alt="..."
                class="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
          </div>

          <div className="flex justify-center py-5">
            <div class="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
            </div>
          </div>

          <h3 className="text-center font-bold text-xl">User Name</h3>
          <div class="h-3 text-3xl text-left text-gray-600">“</div>
          <p class="px-4 text-sm text-center text-gray-600">
            You can select from couple of pre-made menus for every occasion that
            should please many different palates or work with us to create your
            own menu.
          </p>
          <div class="h-3 text-3xl text-right text-gray-600">”</div>
        </div>

        <div className="shadow-lg p-10">
          <div class="flex flex-wrap justify-center">
            <div class="w-6/12 sm:w-8/12 px-4 mb-5">
              <img
                src="https://i.ibb.co/JHZxjM6/review-3.jpg"
                alt="..."
                class="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
          </div>

          <div class="h-3 text-3xl text-left text-gray-600">“</div>
          <p class="px-4 text-sm text-center text-gray-600">
            Planning an important business meeting with your partners? Impress
            them with lunch in Royal Plate. Royal Plate covers everything from
            business lunches, to custom team building programs and corporate
            parties.
          </p>
          <div class="h-3 text-3xl text-right text-gray-600">”</div>
        </div>

        <div className="shadow-lg p-10">
          <div class="flex flex-wrap justify-center">
            <div class="w-6/12 sm:w-8/12 px-4 mb-5">
              <img
                src="https://i.ibb.co/brNM3Zq/review-1.jpg"
                alt="..."
                class="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
          </div>

          <div class="h-3 text-3xl text-left text-gray-600">“</div>
          <p class="px-4 text-sm text-center text-gray-600">
            Weather you are celebrating your birthday, have a family reunion or
            something else, we'll make it enjoying and memorable. Our experts
            have years of experience in party planning
          </p>
          <div class="h-3 text-3xl text-right text-gray-600">”</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
