import React from "react";
import htmlLogo from "/htmlLogo.svg";
import cssLogo from "/cssLogo.svg";
import javascriptLogo from "/javascriptLogo.svg";
import reactLogo from "/reactLogo.svg";
import svgLogo from "/svgLogo.svg"

function TechnologiesIcons() {
  return (
    <>
      <section className="px-10 py-16 font-customFont font-semibold">
        <h1 className="text-center font-thin italic text-8xl">
          My <span className="underline ">Skills</span>:
        </h1>

        <div className="flex justify-around mt-6 px-5 py-8">
          <div className="flex items-center">
            <h1 className="text-3xl font-semibold italic pr-3">
              Programming Language :
            </h1>
            <div className="text-center">
              <img src={javascriptLogo} alt="javascriptLogo" />
              <h3 className="">JAVASCRIPT</h3>
            </div>
          </div>

          <div className="flex items-center">
            <h1 className="text-3xl font-semibold italic pr-3">Library :</h1>
            <div className="text-center">
              <img src={reactLogo} alt="reactLogo" />
              <h3 className="">REACT 18+</h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around gap-3 mt-6 px-5 py-8">
          <h1 className="text-3xl font-semibold italic">Technologies : </h1>
          <div className="text-center">
            <img src={htmlLogo} alt="htmlLogo" />
            <h3 className="">HTML5</h3>
          </div>
          <div className="text-center">
            <img src={cssLogo} alt="cssLogo" />
            <h3 className="">CSS3</h3>
          </div>

          <div className="text-center">
            <img src={svgLogo} alt="svgLogo" />
            <h3 className="">SVG</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default TechnologiesIcons;
