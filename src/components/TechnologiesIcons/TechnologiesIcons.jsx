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

const TechnologiesIconsData = [
  { src: javascriptLogo, alt: "javascriptLogo", name: "JAVASCRIPT" },
  { src: reactLogo, alt: "reactLogo", name: "REACT 18+" },
  { src: htmlLogo, alt: "htmlLogo", name: "HTML5" },
  { src: cssLogo, alt: "cssLogo", name: "CSS3" },
  { src: svgLogo, alt: "svgLogo", name: "SVG" },
  { src: nodeLogo, alt: "nodeLogo", name: "NODE" },
  { src: figmaLogo, alt: "figmaLogo", name: "FIGMA" },
  { src: vscodeLogo, alt: "vscodeLogo", name: "VSCODE" },
  { src: gitLogo, alt: "gitLogo", name: "GIT" },
  { src: githubLogo2, alt: "githubLogo2", name: "GITHUB" },
  { src: netlifyLogo, alt: "netlifyLogo", name: "NETLIFY" },
  { src: viteLogo, alt: "viteLogo", name: "VITE" },
  { src: npmLogo, alt: "npmLogo", name: "NPM" },
];

function TechnologiesIcons() {
  return (
    <section id="skills" className="mt-16 scroll-mt-20">
      <h1 className="text-center font-thin italic text-4xl md:text-6xl lg:text-8xl font-customFont">
        My <span className="underline">Skills</span> :
      </h1>

      <div className="px-4 sm:px-8 md:px-10 py-4 sm:py-6 md:py-8 font-customFont font-semibold selection:bg-yellow-300 border-b bg-yellow-100">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {TechnologiesIconsData.map((icon) => (
            <div key={icon.name} className="flex flex-col items-center">
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-20 h-20 md:w-32 md:h-32"
              />
              <h3 className="text-lg md:text-xl">{icon.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologiesIcons;
