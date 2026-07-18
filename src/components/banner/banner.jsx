import React from "react";
import Group from "../../assets/Group-5.png";
import { TbPlayerPlay } from "react-icons/tb";
import BannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row  lg:justify-between container mx-auto items-center my-8">
      <div className="text-center lg:text-left">
        <div className="bg-[#e1e7ff] w-fit p-2 mx-auto lg:mx-0 mt-3 lg:mt-0 rounded-2xl">
          <p className="flex items-center  gap-1  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            <img src={Group} alt="" /> New: AI-Powered Tools Available
          </p>
        </div>
        <h2 className="text-3xl lg:text-6xl font-bold text-[#101727] leading-10 lg:leading-20">
          Supercharge Your <br /> Digital Workflow
        </h2>
        <p className="text-[#627382] leading-5 my-5">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl mr-2.5">
          Explore Products
        </button>
        <button className="btn btn-outline rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          <TbPlayerPlay className="text-[#9514FA] text-xl" /> Watch Demo
        </button>
      </div>
      <div>
        <img src={BannerImg} alt="" />
      </div>
    </section>
  );
};

export default Banner;
