import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-6 font-customFont">
      <div className="flex flex-wrap justify-around">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h5 className="font-bold mb-2">Services</h5>
          <ul className="list-none">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Front-end Development
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Mobile App Development
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h5 className="font-bold mb-2">Contact</h5>
          <p>Email: [Your Email]</p>
          <p>Phone: [Your Phone Number]</p>
          <p>
            LinkedIn:{" "}
            <a
              href="[Your LinkedIn Profile URL]"
              className="text-white hover:text-gray-300"
            >
              [Samir Mulla]
            </a>
          </p>
        </div>
      </div>
      <div className="flex justify-around mt-4">
        <p className="text-center text-sm">
          &copy; <span className="font-bold">{`${year}`}</span> Developed by{" "}
          <span className="font-bold">Samir Mulla</span>. All rights reserved.
        </p>
        <p className=" text-sm">Privacy Policy Terms & Conditions.</p>
      </div>
    </footer>
  );
};

export default Footer;
