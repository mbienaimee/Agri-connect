import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Navigation from "./Navigation";

const More = () => {
    const [navBar, setNavBar] = useState(false);
    const showNavbar = ()=>{
        setNavBar(!navBar);
    }
  return (
    <ul className="flex items-center gap-3">
      <li>
        <NavLink to="/search">
          <FaSearch fontSize={20}/>
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart">
          <FiShoppingCart fontSize={20}/>
        </NavLink>
      </li>
      <li>
        <NavLink>
          <FaRegUser fontSize={20}/>
        </NavLink>
      </li>
      <li>
        {open ? <NavLink onClick={showNavbar}>
        <HiOutlineMenuAlt3 className="w-[20px] md:hidden"/>
        </NavLink>
        :null}
      </li>
      <li>
        <NavLink
          to="/learnmore"
          className="md:flex sm:hidden py-2 px-2 bg-[#45AB49] text-white font-medium rounded"
        >
          Learn More
        </NavLink>
      </li>
    </ul>
  );
}

export default More
