import React from "react";
import f1 from "../../public/f1.png";
import f2 from "../../public/f2.png";

const Footer = () => {
  return (
    <div className="border border-transparent shadow-lg bg-black text-white">
      <div className="px-4 py-8">
        <p className="text-4xl ml-24 mt-4 text-center sm:text-left">
          <span className="text-[#45AB49]">AGRI</span>sales
        </p>
        <div className="flex flex-col sm:flex-row justify-around mt-4 space-y-8 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h1 className="font-semibold text-lg">Reach out</h1>
            <div className="space-y-4 mt-4">
              <p>
                <span className="font-semibold hover:text-[#FF9C00]">
                  Address:
                </span>{" "}
                Kacyiru-Kigali-Rwanda
              </p>
              <p>
                <span className="font-semibold hover:text-[#FF9C00]">
                  Email:
                </span>{" "}
                agrisales@gmail.com
              </p>
              <p>
                <span className="font-semibold hover:text-[#FF9C00]">
                  Call Us:
                </span>{" "}
                +250783059629
              </p>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="font-semibold text-lg">Quick Links</h1>
            <div className="flex flex-col mt-4 space-y-4">
              <a href="#" className="hover:text-[#FF9C00]">
                Home
              </a>
              <a href="#" className="hover:text-[#FF9C00]">
                About Us
              </a>
              <a href="#" className="hover:text-[#FF9C00]">
                Best Products
              </a>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="font-semibold text-lg">Recent Post</h1>
            <div className="mt-4 space-y-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <img
                  src={f1}
                  className="w-1/4 sm:w-[20%] h-auto transform transition duration-500 hover:scale-110"
                  alt="Recent Post 1"
                />
                <p className="p-3">This is the recent product so far</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <img
                  src={f2}
                  className="w-1/4 sm:w-[20%] h-auto transform transition duration-500 hover:scale-110"
                  alt="Recent Post 2"
                />
                <p className="p-3">This is the recent product so far</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-center sm:justify-between bg-[#FF9C00] px-4 py-4">
        <p className="text-xs font-semibold text-black text-center sm:text-left">
          &copy; 2024. AGRIsales. All rights reserved.
        </p>
        <ul className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-4 text-xs sm:justify-end">
          <li>
            <a
              href="#"
              className="text-black font-semibold transition hover:opacity-75"
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black font-semibold transition hover:opacity-75"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black font-semibold transition hover:opacity-75"
            >
              Cookies
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
