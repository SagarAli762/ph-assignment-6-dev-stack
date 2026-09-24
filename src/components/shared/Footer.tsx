import React from "react";
import logo from "@/assets/SVG.png";
import Image from "next/image";
const Footer = () => {
  return (
    <section className="flex justify-between lg:mt-32 lg:mb-16 container mx-auto">
      <div className="flex gap-2 items-center">
        <Image src={logo} width={20} height={20} alt="footer logo" />
        <h4 className="text-white font-bold text-[14px]">FITLOG</h4>{" "}
      </div>
      <div>
        <p className="text-[12px] text-[#6B7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </section>
  );
};

export default Footer;
