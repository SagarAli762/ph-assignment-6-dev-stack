"use client";
import { LibrariesContext } from "@/context/LibrariesContext";
import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";

const AddTodayPlanButton = () => {
  const { todayPlan } = useContext(LibrariesContext);
  console.log(todayPlan);
  return (
    <button className="btn btn-sm border-none bg-[#C2F800] px-4 text-[10px] font-bold text-black hover:bg-[#b4e900]">
      <FaCheck size={10} />
      Add to today's plan
    </button>
  );
};

export default AddTodayPlanButton;
