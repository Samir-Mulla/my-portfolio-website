import React from "react";
import GithubLogo from "/github-logo.svg";
import LinkedinLogo from "/linkedin-logo.svg";

function SocialIcons() {
  return (
    <>
      <div className="mt-20">
        <p className="text-3xl font-bold italic  text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
          <span className="">My Social Profiles :</span>
        </p>
        <div className="flex justify-center items-center gap-8 mt-4">
          <div>
            <a
              href="https://github.com/Samir-Mulla"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={GithubLogo} alt="Github Logo" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/samir-mulla-7b284a1a0/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={LinkedinLogo} alt="Linkedin Logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialIcons;
