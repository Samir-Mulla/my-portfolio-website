// src/components/Services.js
import React from "react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "I build responsive and dynamic websites using modern technologies.",
    },
    {
      title: "UI/UX Design",
      description:
        "I create user-friendly interfaces and design visually appealing websites.",
    },
    {
      title: "App Development",
      description: "Coming Soon !",
      isComingSoon: true,
    },
  ];

  return (
    <section id="services" className="mt-32 scroll-mt-20 font-customFont">
      <h1 className="text-center font-thin italic text-8xl">
        My <span className="underline">Services</span> :
      </h1>
      <div className="px-5 py-10 mx-auto text-center lg:px-40 bg-green-100">
        <div className="flex flex-col w-full mb-12">
          <p className="lg:w-2/3 mx-auto leading-normal text-4xl">
            I provide a variety of services that can help you, grow your{" "}
            <span className="font-extrabold underline decoration-wavy underline-offset-4 italic text-[#ba0000] decoration-black">
              Business
            </span>
            .
          </p>
        </div>
        <div className="flex justify-between flex-wrap text-balance">
          {services.map((service, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2">
              <div className="bg-black p-6 rounded-lg text-white shadow-[4px_7px_1px_1px_#ba0000] ">
                <h2 className="text-3xl font-bold text-white mb-3">
                  {service.title}
                </h2>
                <p className=" text-xl leading-relaxed mb-4 text-gray-300 italic">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
