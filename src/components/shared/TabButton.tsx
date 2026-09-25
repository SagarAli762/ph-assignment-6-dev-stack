import React, { useState } from "react";

const TabButton = () => {
  const [isActive, setActive] = useState("saved");
  return (
    <div className="w-[225px] h-[40px] bg-[#151921] rounded-[12px] flex gap-4 items-center justify-center rounded-md bg-[#15181e] ">
      <button
        onClick={() => setActive("today")}
        className={` text-[8px] lg:text-[12px]  ${isActive === "today" ? "w-[108px] h-[30px] flex justify-center items-center rounded bg-[#242830] px-2 py-1 text-[8px] lg:text-[12px] font-semibold text-white shadow-sm" : "text-gray-500"}`}
      >
        Today's Plan
      </button>

      <button
        onClick={() => setActive("saved")}
        className={` text-[8px] lg:text-[12px]  ${isActive === "saved" ? "w-[108px] h-[30px] flex justify-center items-center rounded bg-[#242830] px-2 py-1 text-[8px] lg:text-[12px] font-semibold text-white shadow-sm" : "text-gray-500"}`}
      >
        Saved
      </button>
    </div>
  );
};

export default TabButton;
