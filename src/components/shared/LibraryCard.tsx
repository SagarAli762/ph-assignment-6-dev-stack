import { ILibrary } from "@/types/libraries.type";
import Image from "next/image";
import React from "react";
import { FaFire, FaRegClock, FaStar } from "react-icons/fa";

interface ILibraryCardProps {
  library: ILibrary;
}
const LibraryCard = ({ library }: ILibraryCardProps) => {
  return (
    <div className="card w-full overflow-hidden rounded-xl border border-[#292c33] bg-[#15171d] shadow-lg">
      {/* Image */}
      <figure className="w-full h-[292px] ">
        <Image
          src={library.image}
          alt={library.name}
          width={392}
          height={292}
          className="object-cover rounded-xl w-full"
        />
      </figure>

      {/* Content */}
      <div className="p-4">
        {/* Muscle Groups */}
        <div className="mb-2 flex gap-2">
          {library.muscleGroups.slice(0, 2).map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C2F800] px-[10px] py-[2px] text-[11px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="text-[18px] font-bold uppercase text-white">
          {library.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-[12px] text-gray-500">{library.equipment}</p>

        {/* Divider */}
        <div className="my-3 border-t border-[#292c33]" />

        {/* Stats */}
        <div className="flex items-center justify-start gap-10 text-[10px] text-gray-400">
          {/* Duration */}
          <div className="flex items-center gap-1">
            <FaRegClock />
            <span>{library.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1">
            <FaFire />
            <span>{library.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <FaStar />
            <span>{library.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
