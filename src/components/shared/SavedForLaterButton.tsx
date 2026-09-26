"use client";
import { LibrariesContext } from "@/context/LibrariesContext";
import { ILibrary } from "@/types/libraries.type";
import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const SavedForLaterButton = ({ library }: { library: ILibrary }) => {
  const { savedData, setSavedData } = useContext(LibrariesContext);
  const handleSavedData = (libraryId: number) => {
    const alreadySaved = savedData.some(
      (data: ILibrary) => data.id === libraryId,
    );
    if (alreadySaved) {
      return toast.error("Already saved");
    } else {
      setSavedData([...savedData, library]);
      toast.success("Saved for later");
    }
  };

  return (
    <button
      onClick={() => handleSavedData(library.id)}
      className="btn btn-sm border-none bg-[#C2F800] px-4 text-[10px] font-bold text-black hover:bg-[#b4e900]"
    >
      <FaCheck size={10} />
      Save for later
    </button>
  );
};

export default SavedForLaterButton;
