"use client";
import { LibrariesContext } from "@/context/LibrariesContext";
import React, { useContext, useState } from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaCheck,
  FaClock,
  FaFire,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import { toast } from "react-toastify";
import Link from "next/link";
import { ILibrary } from "@/types/libraries.type";
interface TodayPlanCardProps {
  sortByTodayPlans: ILibrary[];
}
const TodayPlanCard = ({ sortByTodayPlans }: TodayPlanCardProps) => {
  const { todayPlans, setTodayPlans } = useContext(LibrariesContext);
  const [markIds, setMarkIds] = useState<number[]>([]);
  const handlemarkIds = (id: number) => {
    if (markIds.includes(id)) {
      return;
    }
    setMarkIds([...markIds, id]);
    toast.success("marks the workout done");
  };
  console.log("ttt", todayPlans);
  const handleRemovePlan = (id: number) => {
    const updatedPlan = todayPlans.filter((plan) => plan.id !== id);
    setTodayPlans(updatedPlan);
    toast.success("Removed from today's plan ");
  };
  return (
    <>
      {sortByTodayPlans.length > 0 ? (
        sortByTodayPlans.map((todayPlan) => (
          <div
            key={todayPlan.id}
            className="
    group
    my-2
    flex
    w-full
    items-center
    gap-2
    rounded-sm
    border
    border-[#34445A]
    bg-[#15181E]
    px-2
    py-2
    transition-all
    duration-200
    hover:border-[#C2F800]/50

    sm:gap-3
    sm:px-2
    sm:py-2
  "
          >
            {/* Image */}

            <Image
              src={todayPlan.image}
              alt={todayPlan.name}
              width={100}
              height={60}
              unoptimized
              className="object-cover"
            />

            {/* Content */}
            <div className="min-w-0 flex-1">
              {/* Name */}
              <h3
                className="
        text-[9px]
        font-bold
        uppercase
        tracking-wide
        text-white
lg:text-[16px]
        sm:text-[11px] 
      "
              >
                {todayPlan.name}
              </h3>

              {/* Equipment */}
              <p
                className="
        text-[10px]
        text-[#737985]
lg:text-[12px]
        
      "
              >
                {todayPlan.equipment}
              </p>

              {/* Stats */}
              <div
                className="
        mt-1
        flex
        items-center
        gap-2
        text-[10px]
        text-[#B7BBC3]
        lg:text-[12px]
        sm:gap-3
        
      "
              >
                {/* Duration */}
                <span className="flex items-center gap-1 text-[10px] lg:text-[12px]">
                  <FaClock className="text-[#C2F800] " />
                  {todayPlan.duration} min
                </span>

                {/* Calories */}
                <span className="flex text-[10px] lg:text-[12px] items-center gap-1">
                  <FaFire className="text-[#C2F800]" />
                  {todayPlan.caloriesBurned} kcal
                </span>

                {/* Rating */}
                <span className="flex items-center text-[10px] lg:text-[12px] gap-1">
                  <FaStar className="text-[#C2F800] " />
                  {todayPlan.rating}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div
              className="
      flex
      shrink-0
      items-center
      gap-1

      sm:gap-2
    "
            >
              {/* View Details */}
              <Link href={`/libraries/${todayPlan.id}`}>
                {" "}
                <button
                  className="
        btn
        btn-xs
        min-h-6
        h-6
        rounded-full
        border
        border-[#30343D]
        bg-[#191C22]
        px-2
        text-[10px]  lg:text-[12px]
        font-normal
        text-white
        hover:border-[#C2F800]
        hover:bg-[#20242B]

        sm:min-h-7
        sm:h-7
        sm:px-3
        
      "
                >
                  View Details
                </button>
              </Link>

              {/* Mark as Done */}
              <button
                onClick={() => handlemarkIds(todayPlan.id)}
                className={`btn
        btn-xs
        min-h-6
        h-6
        rounded-full
        border-none
        
        px-2
        text-[10px]  lg:text-[12px]
        font-bold

        sm:min-h-7
        sm:h-7
        sm:px-3 ${markIds.includes(todayPlan.id) ? "bg-gray-600 text-gray-300" : "bg-[#C2F800] text-black hover:bg-[#B4E900]"}`}
              >
                <FaCheck className="text-[10px]  lg:text-[12px]" />
                {markIds.includes(todayPlan.id) ? "Completed" : "Mark as Done"}
              </button>

              {/* Remove */}
              <button
                onClick={() => handleRemovePlan(todayPlan.id)}
                className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-full
        text-[#555A64]
        transition
        hover:bg-[#252931]
        hover:text-white

        sm:h-10
        sm:w-10
      "
                aria-label="Remove from today's plan"
              >
                <FaTimes className="text-[10px]  lg:text-[12px]" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="mt-3 flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-dashed border-[#242831] bg-[#0d0f13] px-4 text-center">
          <h3 className="text-[10px] font-bold tracking-wide">
            NOTHING HERE YET
          </h3>

          <p className="mt-1 text-[7px] text-gray-500">
            Browse the library and add a lift to get today moving.
          </p>

          <Link href={`/`}>
            {" "}
            <button className="btn btn-xs mt-3 h-7 min-h-0 rounded-full border-0 bg-[#c2f800] px-4 text-[8px] font-bold text-black hover:bg-[#d0ff20]">
              Go to workouts
              <FaArrowRight className="text-[7px]" />
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default TodayPlanCard;
