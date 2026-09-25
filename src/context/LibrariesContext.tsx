"use client";
import React, { createContext, ReactNode, useState } from "react";
export const LibrariesContext = createContext({});
const LibrariesProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState("today");
  const sharedData = {
    todayPlan,
    setTodayPlan,
  };
  return (
    <LibrariesContext.Provider value={sharedData}>
      {children}
    </LibrariesContext.Provider>
  );
};

export default LibrariesProvider;
