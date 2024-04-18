import React from "react";
import htmlLogo from "/htmlLogo.svg";
import cssLogo from "/cssLogo.svg";
import javascriptLogo from "/javascriptLogo.svg";
import reactLogo from "/reactLogo.svg";
import svgLogo from "/svgLogo.svg";
import vscodeLogo from "/vscodeLogo.svg";
import figmaLogo from "/figmaLogo.svg";
import gitLogo from "/gitLogo.svg";
import githubLogo2 from "/githubLogo2.svg";
import netlifyLogo from "/netlifyLogo.svg";
import viteLogo from "/viteLogo.svg";
import npmLogo from "/npmLogo.svg";
import nodeLogo from "/nodeLogo.svg";

function TechnologiesIcons() {
  return (
    <>
      <section id="mySkills" className="mt-32 scroll-mt-20">
        <h1 className="text-center font-thin italic text-8xl font-customFont">
          My <span className="underline">Skills</span> :
        </h1>

        <div className="px-10 py-1 font-customFont font-semibold selection:bg-yellow-300 border-b bg-yellow-100">
          <div className="flex justify-around px-5 pt-8 pb-2">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold italic pr-3">
                Programming Language :
              </h1>
              <div className="text-center">
                <img src={javascriptLogo} alt="javascriptLogo" />
                <h3 className="">JAVASCRIPT</h3>
              </div>
            </div>
            <div className="flex items-center">
              <h1 className="text-3xl font-bold italic pr-3">Library :</h1>
              <div className="text-center">
                <img src={reactLogo} alt="reactLogo" />
                <h3 className="">REACT 18+</h3>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around gap-3  px-5 py-1 pb-2">
            <h1 className="text-3xl font-bold italic">Technologies : </h1>
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
            <div className="text-center">
              <img src={nodeLogo} alt="nodeLogo" />
              <h3 className="">NODE</h3>
            </div>
          </div>
          <div className="flex items-center justify-around gap-3 px-5 pb-8">
            <h1 className="text-3xl font-bold italic">Tools : </h1>
            <div className="text-center">
              <img src={figmaLogo} alt="figmaLogo" />
              <h3 className="">FIGMA</h3>
            </div>
            <div className="text-center">
              <img src={vscodeLogo} alt="vscodeLogo" />
              <h3 className="">VSCODE</h3>
            </div>
            <div className="text-center">
              <img src={gitLogo} alt="gitLogo" />
              <h3 className="">GIT</h3>
            </div>
            <div className="text-center">
              <img src={githubLogo2} alt="githubLogo2" />
              <h3 className="">GITHUB</h3>
            </div>
            <div className="text-center">
              <img src={netlifyLogo} alt="netlifyLogo" />
              <h3 className="">NETLIFY</h3>
            </div>
            <div className="text-center">
              <img src={viteLogo} alt="viteLogo" />
              <h3 className="">VITE</h3>
            </div>
            <div className="text-center">
              <img src={npmLogo} alt="npmLogo" />
              <h3 className="">NPM</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TechnologiesIcons;
