"use client";
import { LibrariesContext } from "@/context/LibrariesContext";
import { ILibrary } from "@/types/libraries.type";
import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const AddTodayPlanButton = ({ library }: { library: ILibrary }) => {
  const { todayPlans, setTodayPlans } = useContext(LibrariesContext);
  const handleTodayPlan = (libraryId: number) => {
    const alreadyAdded = todayPlans.find(
      (plan: ILibrary) => plan.id === libraryId,
    );
    if (todayPlans.includes(alreadyAdded)) {
      return toast.error("Already in your plan");
    } else {
      setTodayPlans([...todayPlans, library]);
      toast.success("Added to today's plan");
    }
  };

  return (
    <button
      onClick={() => handleTodayPlan(library.id)}
      className="btn btn-sm border-none bg-[#C2F800] px-4 text-[10px] font-bold text-black hover:bg-[#b4e900]"
    >
      <FaCheck size={10} />
      Add to today's plan
    </button>
  );
};

export default AddTodayPlanButton;
