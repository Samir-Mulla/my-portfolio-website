import React from "react";
import { RiFileTextLine } from "react-icons/ri";
import SamirResume from "/Samir-Resume-updated-2024.pdf"

function IconButton() {
  return (
    <>
      <a
        href={SamirResume}
        rel="noopener noreferrer"
        target="_blank"
        className="flex items-center gap-2 italic border p-2 border-r-4 border-black rounded hover:bg-[#e7e7e7] hover:ease-in duration-300"
      >
        <RiFileTextLine size="1.5rem" />
        View My Resume
      </a>
    </>
  );
}

export default IconButton;
