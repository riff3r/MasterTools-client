import React from "react";

const BusinessSummary = () => {
  return (
    <div className="py-24">
      <div className="stats stats-vertical lg:stats-horizontal shadow bg-primary min-w-full py-24 rounded-none">
        <div className="stat place-items-center gap-5">
          <div className="stat-title text-2xl">We Served</div>
          <div class="text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>

          <div className="stat-value">100+</div>
          <div className="stat-desc text-2xl">customers</div>
        </div>

        <div className="stat place-items-center gap-5">
          <div className="stat-title text-2xl">Annual revenue</div>
          <div class="text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-value text-secondary">120M+</div>
          <div className="stat-desc text-secondary text-2xl">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center gap-5">
          <div className="stat-title text-2xl">Reviews</div>
          <div class=" text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-value">33K+</div>
          <div className="stat-desc text-2xl">↗︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
