"use client";

import TabButton from "@/components/shared/TabButton";
import { LibrariesContext } from "@/context/LibrariesContext";
import { ILibrary } from "@/types/libraries.type";
import { useContext, useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

const MyPlan = () => {
  const { todayPlans } = useContext(LibrariesContext);
  console.log("today plan is", todayPlans);

  const totalMinutes = todayPlans.reduce(
    (total: number, todayPlan: ILibrary) => total + todayPlan.duration,
    0,
  );
  const totalCalories = todayPlans.reduce(
    (total: number, todayPlan: ILibrary) => total + todayPlan.caloriesBurned,
    0,
  );
  return (
    <section className="container mx-auto rounded-xl mt-20  sm:p-6">
      {/* Header */}
      <div>
        <h2 className="lg:text-[30px] font-bold tracking-tight text-white">
          MY PLAN
        </h2>

        <p className="mt-1 lg:text-[14px] ">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats Card */}
      <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-[#242831] bg-[#12151b]">
        {/* Exercises */}
        <div className="border-r border-[#242831] p-6">
          <p className="lg:text-[12px]">Exercises</p>

          <div className="mt-1 flex items-center gap-2">
            <span className="lg:text-[36px] font-bold text-[#CCFF00]">
              {todayPlans.length}
            </span>
          </div>
        </div>

        {/* Minutes */}
        <div className="border-r border-[#242831] lg:p-6">
          <p className="lg:text-[12px]">Minutes</p>

          <div className="mt-1 flex items-center gap-2">
            <span className="lg:text-[36px] font-bold text-white">
              {totalMinutes}
            </span>
          </div>
        </div>

        {/* Calories */}
        <div className="lg:p-6">
          <p className="lg:text-[12px]">Calories</p>

          <div className="mt-1 flex items-center gap-2">
            <span className="lg:text-[36px] font-bold text-white">
              {totalCalories}
            </span>
          </div>
        </div>
      </div>

      {/* Plan Header */}
      <div className="mt-4 flex items-center justify-between">
        {/* Tabs */}
        <TabButton></TabButton>
        {/* Sort */}
        <button className="flex items-center gap-1 text-[8px] text-gray-500">
          Sort By
          <span className="flex items-center gap-1 rounded-md border border-[#242831] px-2 py-1 text-gray-300">
            Duration
            <FaChevronDown className="text-[7px]" />
          </span>
        </button>
      </div>

      {/* Empty State */}
      <div className="mt-3 flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-dashed border-[#242831] bg-[#0d0f13] px-4 text-center">
        <h3 className="text-[10px] font-bold tracking-wide">
          NOTHING HERE YET
        </h3>

        <p className="mt-1 text-[7px] text-gray-500">
          Browse the library and add a lift to get today moving.
        </p>

        <button className="btn btn-xs mt-3 h-7 min-h-0 rounded-full border-0 bg-[#c2f800] px-4 text-[8px] font-bold text-black hover:bg-[#d0ff20]">
          Go to workouts
          <FaArrowRight className="text-[7px]" />
        </button>
      </div>
    </section>
  );
};

export default MyPlan;
