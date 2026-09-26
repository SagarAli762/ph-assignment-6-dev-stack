"use client";

import React, { createContext, ReactNode, useState } from "react";
import { ILibrary } from "@/types/libraries.type";

interface ILibrariesContext {
  todayPlans: ILibrary[];
  setTodayPlans: React.Dispatch<React.SetStateAction<ILibrary[]>>;
}

export const LibrariesContext = createContext<ILibrariesContext>({
  todayPlans: [],
  setTodayPlans: () => {},
});

const LibrariesProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlans, setTodayPlans] = useState<ILibrary[]>([]);

  return (
    <LibrariesContext.Provider
      value={{
        todayPlans,
        setTodayPlans,
      }}
    >
      {children}
    </LibrariesContext.Provider>
  );
};

export default LibrariesProvider;
