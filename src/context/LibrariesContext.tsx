"use client";

import React, { createContext, ReactNode, useState } from "react";
import { ILibrary } from "@/types/libraries.type";

interface ILibrariesContext {
  todayPlans: ILibrary[];
  setTodayPlans: React.Dispatch<React.SetStateAction<ILibrary[]>>;
  savedData: ILibrary[];
  setSavedData: React.Dispatch<React.SetStateAction<ILibrary[]>>;
  isActive: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
}

export const LibrariesContext = createContext<ILibrariesContext>({
  todayPlans: [],
  setTodayPlans: () => {},
  savedData: [],
  setSavedData: () => {},
  isActive: "saved",
  setIsActive: () => {},
});

const LibrariesProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlans, setTodayPlans] = useState<ILibrary[]>([]);
  const [savedData, setSavedData] = useState<ILibrary[]>([]);
  const [isActive, setIsActive] = useState<string>("today");

  return (
    <LibrariesContext.Provider
      value={{
        todayPlans,
        setTodayPlans,
        savedData,
        setSavedData,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </LibrariesContext.Provider>
  );
};

export default LibrariesProvider;
