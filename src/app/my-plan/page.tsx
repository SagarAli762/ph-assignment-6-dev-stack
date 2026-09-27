"use client";

import MyPlanCard from "@/components/shared/MyPlanCard";
import SavredCard from "@/components/shared/SavredCard";
import TabButton from "@/components/shared/TabButton";
import TodayPlanCard from "@/components/shared/TodayPlanCard";
import { LibrariesContext } from "@/context/LibrariesContext";
import { ILibrary } from "@/types/libraries.type";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

const MyPlan = () => {
  const { todayPlans, savedData, isActive } = useContext(LibrariesContext);
  console.log("today plan is", todayPlans);
  console.log(isActive);
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );
  const sortLibraries = (libraries: ILibrary[]) => {
    const sortedLibraries = [...libraries];
    if (sortBy === "duration") {
      sortedLibraries.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedLibraries.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedLibraries.sort((a, b) => b.rating - a.rating);
    }
    return sortedLibraries;
  };
  const sortByTodayPlans = sortLibraries(todayPlans);
  const sortBySavedForLater = sortLibraries(savedData);
  sortLibraries(savedData);
  console.log(sortBy);
  //today's plan calculate
  const totalMinutes = todayPlans.reduce(
    (total: number, todayPlan: ILibrary) => total + todayPlan.duration,
    0,
  );
  const totalCalories = todayPlans.reduce(
    (total: number, todayPlan: ILibrary) => total + todayPlan.caloriesBurned,
    0,
  );
  //saved data calculate
  const totalSavedMinutes = savedData.reduce(
    (total: number, data: ILibrary) => total + data.duration,
    0,
  );
  const totalSavedCalories = savedData.reduce(
    (total: number, data: ILibrary) => total + data.caloriesBurned,
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
              {isActive === "today" ? todayPlans.length : savedData.length}
            </span>
          </div>
        </div>

        {/* Minutes */}
        <div className="border-r border-[#242831] lg:p-6">
          <p className="lg:text-[12px]">Minutes</p>

          <div className="mt-1 flex items-center gap-2">
            <span className="lg:text-[36px] font-bold text-white">
              {isActive === "today" ? totalMinutes : totalSavedMinutes}
            </span>
          </div>
        </div>

        {/* Calories */}
        <div className="lg:p-6">
          <p className="lg:text-[12px]">Calories</p>

          <div className="mt-1 flex items-center gap-2">
            <span className="lg:text-[36px] font-bold text-white">
              {isActive === "today" ? totalCalories : totalSavedCalories}
            </span>
          </div>
        </div>
      </div>

      {/* Plan Header */}
      <div className="mt-4 flex items-center justify-between">
        {/* Tabs */}
        <TabButton></TabButton>
        {/* Sort */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-[12px] text-[#8A92A0]">
            Sort By
          </legend>
          <select
            value={sortBy}
            className="select bg-[#13161D] rounded text-white text-[12px]"
            onChange={(e) =>
              setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
          >
            <option value={"duration"}>Duration</option>
            <option value={"calories"}>Calories</option>
            <option value={"rating"}>Rating</option>
          </select>
        </fieldset>
      </div>

      {/* Empty State */}
      {todayPlans.length > 0 || savedData.length > 0 ? (
        isActive === "today" ? (
          <TodayPlanCard sortByTodayPlans={sortByTodayPlans}></TodayPlanCard>
        ) : (
          <SavredCard sortBySavedForLater={sortBySavedForLater}></SavredCard>
        )
      ) : (
        <div className="mt-3 flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-dashed border-[#242831] bg-[#0d0f13] px-4 text-center">
          <h3 className="text-[10px] lg:text-[20px] font-bold text-white">
            NOTHING HERE YET
          </h3>

          <p className="mt-1 text-[7px] lg:text-[12px] text-gray-500">
            Browse the library and add a lift to get today moving.
          </p>

          <Link href={`/`}>
            {" "}
            <button className="btn btn-xs mt-3 h-7 min-h-0 rounded-full border-0 bg-[#c2f800] px-4 text-[8px] lg:text-[12px] font-semibold text-black hover:bg-[#d0ff20]">
              Go to workouts
              <FaArrowRight className="text-[7px]" />
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default MyPlan;
