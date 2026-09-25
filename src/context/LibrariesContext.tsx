"use client";
import React, { createContext, ReactNode, useState } from "react";
export const LibrariesContext = createContext({});
const LibrariesProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlans, setTodayPlans] = useState([]);
  const sharedData = {
    todayPlans,
    setTodayPlans,
  };
  return (
    <LibrariesContext.Provider value={sharedData}>
      {children}
    </LibrariesContext.Provider>
  );
};

export default LibrariesProvider;
