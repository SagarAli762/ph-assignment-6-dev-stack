import LibraryCard from "@/components/shared/LibraryCard";
import { ILibrary } from "@/types/libraries.type";
import React from "react";
const getLibraries = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error fetching libraries data", error);
  }
};
const LibrariesPage = async () => {
  const libraries = await getLibraries();

  return (
    <section className="lg:mt-44 mt-16 container mx-auto">
      <h3 className="font-bold lg:text-[30px] text-white">THE LIBRARY</h3>
      <p className="text-[14px]">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {libraries.map((library: ILibrary) => (
          <LibraryCard key={library.id} library={library}></LibraryCard>
        ))}
      </div>
    </section>
  );
};

export default LibrariesPage;
