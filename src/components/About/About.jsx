import React from "react";
import myProfile from "/my-portfolio-img.jpg";
import SocialIcons from "../SocialIcons/SocialIcons";
function About() {
  return (
    <>
      <section id="about" className="font-customFont mt-32 scroll-mt-20">
        <h1 className="text-center font-thin italic text-8xl">
          About <span className="underline">Me</span> :
        </h1>

        <div className="flex gap-10 px-10 py-16 bg-slate-100">
          <img
            src={myProfile}
            alt="my photo"
            loading="lazy"
            className="rounded-lg animate-fade-in border-black bg-slate-200 p-6 max-w-full"
          />
          <article className="flex flex-col items-end justify-evenly border-4 border-b-0 border-blue-300 border-r-0 text-6xl not-italic px-10  rounded-lg  text-balance leading-[1.2em] tracking-wide bg-background2 bg-no-repeat">
            <p>
              I have completed my graduation from{" "}
              <span className="font-semibold italic">
                Sinhgad academy of engineering college
              </span>{" "}
              of Pune, with Bachelor's degree in{" "}
              <span className="font-medium italic">
                Information Technology.
              </span>
            </p>
            <SocialIcons />
          </article>
        </div>
      </section>
    </>
  );
}

export default About;
