import React from "react";
import bannerImg from "@/assets/banner.png";
import Image from "next/image";
const Banner = () => {
  return (
    <section className="container mx-auto mt-8">
      <div className="grid grid-cols-2 gap-24 justify-between items-center rounded-[16px] bg-[#15171D] p-[56px]">
        <div className="col-span-1 space-y-6">
          <p className="lg:text-[#C2F800] font-bold">WORKOUT LIBRARY</p>
          <h1 className="font-bold text-[60px] text-white leading-16">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="text-[16px] max-w-[600px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <button className="font-bold lg:text-[12px] bg-[#C2F800] text-[#000000] lg:px-[24px] lg:py-[12px] rounded-[6px]">
            BROWSE WORKOUTS
          </button>
        </div>
        <div className="col-span-1 lg:ps-[14rem]">
          <Image src={bannerImg} alt="bannerImg"></Image>
        </div>
      </div>
    </section>
  );
};

export default Banner;
