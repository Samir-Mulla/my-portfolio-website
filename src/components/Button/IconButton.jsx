import React from "react";
  import { RiFileTextLine } from "react-icons/ri";


function IconButton() {
  return (
    <>
      <a
        href="https://drive.google.com/file/d/1Gd6gy1f1DIvGS7rN7U1a8FENGYQRSD6q/view?usp=sharing"
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
