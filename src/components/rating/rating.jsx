import React from "react";

const Rating = () => {
  return (
    <section className="p-5 text-white flex items-center sm:justify-around flex-col sm:flex-row gap-5 sm:gap-0 bg-linear-to-r from-[#4F39F6] to-[#9514FA] my-15">
      <div className="border-0 sm:border-r-2  sm:border-white p-0 sm:pr-20">
        <h3 className="text-5xl font-bold mb-2">50K+</h3>
        <p className="text-xl">Active Users</p>
      </div>
      <div className="border-0 sm:border-r-2  sm:border-white p-0 sm:pr-20">
        <h3 className="text-5xl font-bold mb-2">200+</h3>
        <p className="text-xl"> Premium Tools</p>
      </div>
      <div>
        <h3 className="text-5xl font-bold mb-2">4.9</h3>
        <p className="text-xl">Rating</p>
      </div>
    </section>
  );
};

export default Rating;
