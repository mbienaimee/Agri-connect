import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <ul
      id="mobileNav"
      className={`absolute flex flex-col space-y-2 bg-white text-black top-12 transition duration-500 left-0 w-full items-center py-4 text-xl hover:text-[#45AB49] text-bold ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <li className="flex justify-center w-full border-b border-gray-300">
        <Link to="/" className="flex items-center py-2 px-4 ">
          Home
        </Link>
      </li>
      <li className="flex justify-center w-full border-b border-gray-300">
        <Link to="/AboutUs" className=" flex items-center py-2 px-4 ">
          About Us
        </Link>
      </li>

      <li className="flex justify-center w-full border-b border-gray-300">
        <Link to="/Shop" className="flex items-center py-2 px-4">
          Shop
        </Link>
      </li>
      <li className="flex justify-center w-full border-b border-gray-300">
        <Link to="/Contact" className="flex items-center py-2 px-4">
          Contact Us
        </Link>
      </li>

      <li className="flex justify-center w-full border-b border-gray-300">
        <Link to="/Product" className="flex items-center py-2 px-4">
          {<IoPerson className="w-[20px]" />}
        </Link>
      </li>
      <li className="flex justify-center w-full border-b border-gray-300">
        <Link to="/Cart" className="flex items-center py-2 px-4">
          {<FaCartShopping className="w-[20px]" />}
        </Link>
      </li>

      <li>
        <button
          className="md:flex  py-2 px-2 bg-[#45AB49] text-white font-medium rounded"
          onClick={toggleMenu}
        >
          <Link to="/Login" className="flex items-center px-4 py-2">
            Login
          </Link>
        </button>
      </li>
    </ul>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className=" fixed bg-white drop-shadow-lg text-black font-bold top-0 left-0 w-full text-grey-500  flex justify-around items-center z-40 p-2.5">
        <div className="flex items-center">
          <p className="text-4xl font-semibold ">
            <span className="text-[#45AB49]">AGRI</span>sales
          </p>
        </div>

        <ul className="hidden md:flex space-x-4 items-center">
          <li>
            <Link
              to="/"
              className="flex items-center py-2 px-4 hover:text-[#45ab49]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/AboutUs"
              className=" flex items-center py-2 px-4 hover:text-[#45ab49]"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/Shop"
              className="flex items-center py-2 px-4 hover:text-[#45ab49]"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="flex items-center py-2 px-4 hover:text-[#45ab49]"
            >
              Contact Us
            </Link>
          </li>

          <li>
            <Link
              to="/Product"
              className="flex items-center py-2 px-4 hover:text-[#45ab49]"
            >
              {<IoPerson className="w-[20px]" />}
            </Link>
          </li>
          <li>
            <Link
              to="/Cart"
              className="flex items-center py-2 px-4 hover:text-[#45ab49]"
            >
              {<FaCartShopping className="w-[20px]" />}
            </Link>
          </li>

          <li>
            <button
              className="md:flex  py-2 px-2 bg-[#45AB49] text-white font-medium rounded "
              onClick={toggleMenu}
            >
              <Link to="/Login" className="flex items-center px-4 py-1">
                Login
              </Link>
            </button>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            id="menuToggle"
            className="text-black font-bold focus:outline-none text-2xl"
            onClick={toggleMenu}
          >
            <FiMenu />
          </button>
        </div>
        <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Header;
