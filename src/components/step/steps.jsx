import React from "react";
import User from "../../assets/user.png";
import rocket from "../../assets/rocket.png";
import pakage from "../../assets/package.png";

const Steps = () => {
  return (
    <section className=" bg-[#F9FAFC] py-5 my-17">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-2">Get Started in 3 Steps</h2>
        <p>Start using premium digital tools in minutes, not hours.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-8 gap-5">
        <div className="text-center bg-white px-4 py-8 space-y-3 rounded-2xl relative">
          <div className="absolute top-3 right-3 w-7 h-7 text-white flex justify-center items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
            01
          </div>
          <div className="flex justify-center">
            <img
              className="bg-[#f0eafe] p-4   rounded-full"
              src={User}
              alt=""
            />
          </div>
          <h3 className="text-2xl font-bold">Create Account</h3>
          <p>
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="text-center bg-white px-4 py-8 space-y-3 rounded-2xl relative">
          <div className="absolute top-3 right-3 w-7 h-7 text-white flex justify-center items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
            02
          </div>
          <div className="flex justify-center">
            <img
              className="bg-[#f0eafe] p-4  rounded-full"
              src={pakage}
              alt=""
            />
          </div>
          <h3 className="text-2xl font-bold">Choose Products</h3>
          <p>Browse our catalog and select the toolsthat fit your needs.</p>
        </div>
        <div className="text-center bg-white px-4 py-8 rounded-2xl space-y-3 relative">
          <div className="absolute top-3 right-3 w-7 h-7 text-white flex justify-center items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
            03
          </div>
          <div className="flex justify-center">
            <img
              className="bg-[#f0eafe] p-4  rounded-full w-fit"
              src={rocket}
              alt=""
            />
          </div>
          <h3 className="text-2xl font-bold">Start Creating</h3>
          <p>Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
