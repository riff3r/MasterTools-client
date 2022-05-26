import React from "react";

const BusinessSummary = () => {
  return (
    <div className="py-24">
      <div className="stats stats-vertical lg:stats-horizontal shadow bg-primary min-w-full py-24 rounded-none">
        <div className="stat place-items-center gap-5">
          <div className="stat-title text-2xl">We Served</div>
          <div className="stat-value">100+</div>
          <div className="stat-desc text-2xl">customers</div>
        </div>

        <div className="stat place-items-center gap-5">
          <div className="stat-title text-2xl">Annual revenue</div>
          <div className="stat-value text-secondary">120M+</div>
          <div className="stat-desc text-secondary text-2xl">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center gap-5">
          <div className="stat-title text-2xl">Reviews</div>
          <div className="stat-value">33K+</div>
          <div className="stat-desc text-2xl">↗︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
