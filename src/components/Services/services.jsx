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
    <section id="services" className="mt-16 scroll-mt-20 font-customFont">
      <h1 className="text-center font-thin italic text-4xl md:text-6xl lg:text-8xl font-customFont">
        My <span className="underline">Services</span> :
      </h1>
      <div className="px-5 py-10 mx-auto text-center lg:px-40 bg-green-100">
        <div className="flex flex-col w-full mb-12">
          <p className=" mx-auto leading-normal text-4xl sm:text-5xl md:text-6xl lg:text-6xl lg:leading-normal">
            I provide a variety of services that can help you, grow your{" "}
            <span className="font-extrabold underline decoration-wavy underline-offset-4 italic text-[#ba0000] decoration-black">
              Business
            </span>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black text-center p-6 rounded-lg text-white shadow-[4px_7px_1px_1px_#ba0000] "
            >
              <h2 className="text-xl sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl font-bold text-white mb-3">
                {service.title}
              </h2>
              <p className="text-xl sm:text-lg md:text-xl lg:text-lg xl:text-xl leading-relaxed mb-4 text-gray-300 italic">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
