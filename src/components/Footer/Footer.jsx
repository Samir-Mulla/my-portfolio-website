import React from "react";
import CurrentDateTime from "../CurrentDateTime/CurrentDateTime";
import { RxEnvelopeClosed } from "react-icons/rx";
import { PiPhoneCallLight } from "react-icons/pi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background4 bg-black text-white p-6 font-customFont border-teal-100">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3">
          <CurrentDateTime />
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h5 className="font-bold mb-2 text-2xl">Services</h5>
          <ul className="list-none">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Front-end Development
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-white hover:text-gray-300">
                UI/UX Design
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-white hover:text-gray-300">
                Mobile App Development
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h5 className="font-bold mb-2 text-2xl">Contact</h5>
          <div className="flex gap-3 items-center">
            <RxEnvelopeClosed size={25} />
            My Email ID : samirmulla710@gmail.com
          </div>

          <div className="flex gap-3 items-center mt-2">
            <PiPhoneCallLight size={25} />
            <p> Phone : +91 9096726383</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-10">
        <p className="text-center text-sm">
          &copy; <span className="font-bold">{`${year}`}</span> Developed by{" "}
          <span className="font-bold">Samir Mulla</span>. All rights reserved.
        </p>
        <p className="flex gap-7 text-sm">
          <span>Privacy Policy</span> <span>Terms & Conditions.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
