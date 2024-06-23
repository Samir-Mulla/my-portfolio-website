import React from "react";
import { RiFileTextLine } from "react-icons/ri";
import SamirResume from "/Samir-Mulla-Resume-Updated-June-2024.pdf";

function IconButton() {
  return (
    <>
      <a
        href={SamirResume}
        rel="noopener noreferrer"
        target="_blank"
        className={`flex items-center gap-2 italic border p-2 border-r-4  rounded`}
      >
        <RiFileTextLine size="1.5rem" />
        View My Resume
      </a>
    </>
  );
}

export default IconButton;
