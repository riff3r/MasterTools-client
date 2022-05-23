import React from "react";

const BusinessSummary = () => {
  return (
    <div className="py-24">
      <div class="stats shadow bg-primary min-w-full py-24 rounded-none">
        <div class="stat place-items-center gap-5">
          <div class="stat-title text-2xl">We Served</div>
          <div class="stat-value">100+</div>
          <div class="stat-desc text-2xl">customers</div>
        </div>

        <div class="stat place-items-center gap-5">
          <div class="stat-title text-2xl">Annual revenue</div>
          <div class="stat-value text-secondary">120M+</div>
          <div class="stat-desc text-secondary text-2xl">↗︎ 40 (2%)</div>
        </div>

        <div class="stat place-items-center gap-5">
          <div class="stat-title text-2xl">Reviews</div>
          <div class="stat-value">33K+</div>
          <div class="stat-desc text-2xl">↗︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
