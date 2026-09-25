import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const links = (
    <>
      <li>
        <Link className="text-[12px]" href="/">
          Workouts
        </Link>
      </li>
      <li className="text-[12px]">
        <Link href="/my-plan">My Plan</Link>
      </li>
    </>
  );
  return (
    <div className=" shadow-sm">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu "
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#9CA3AF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2">
            <Image
              className="lg:w-[28px] lg:h-[28px] w-[20px] h-[20px]"
              src={logo}
              alt="logo"
            ></Image>
            <h3 className="text-[14px] lg:text-[18px] text-white font-bold">
              FITLOG
            </h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-6">
            {/* Plan */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-white">Plan</span>

              <span className="badge badge-success rounded-full bg-[#B6FF00] text-black border-none w-5 h-5 p-0">
                0
              </span>
            </div>

            {/* Saved */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Saved</span>

              <span className="badge rounded-full border border-gray-600 bg-transparent text-gray-400 w-5 h-5 p-0">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
