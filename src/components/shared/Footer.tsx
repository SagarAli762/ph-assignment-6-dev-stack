import React from "react";
import logo from "@/assets/SVG.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-auto mt-16 mb-8 px-4 lg:mt-32 lg:mb-16">
      <section className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row sm:gap-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} width={20} height={20} alt="FitLog logo" />

          <h4 className="text-[14px] font-bold text-white">FITLOG</h4>
        </div>

        {/* Copyright */}
        <div className="text-center sm:text-right">
          <p className="text-[11px] leading-5 text-[#6B7280] sm:text-[12px]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
