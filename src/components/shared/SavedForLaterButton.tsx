import React from "react";
import { FaBookmark } from "react-icons/fa";

const SavedForLaterButton = () => {
  return (
    <button
      className="
                btn
                btn-sm
                border
                border-[#343944]
                bg-transparent
                px-4
                text-[10px]
                font-normal
                text-gray-300
                hover:bg-[#20232B]
              "
    >
      <FaBookmark size={10} />
      Save for later
    </button>
  );
};

export default SavedForLaterButton;
